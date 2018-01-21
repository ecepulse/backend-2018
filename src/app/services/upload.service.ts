import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

import { Upload } from '../util/upload';
import {AngularFirestoreDocument, AngularFirestore} from "angularfire2/firestore";
import {User} from "../util/user";

@Injectable()
export class UploadService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private afs : AngularFirestore) { }
  private basePath:string = '/users';
  uploads: FirebaseListObservable<Upload[]>;
  private isUploaded: boolean = false;
  pushUpload(upload: Upload) {
    this.afAuth.authState.subscribe((authData) => {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`${this.basePath}/${authData.uid}/resume`).put(upload.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: any) =>  {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            // upload failed
            console.log(error);
            this.isUploaded = false;
          },
          () => {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = `${authData.uid}/resume`;
            // Don't need to keep file records if only allowed uploads are to users/{uid}/resume
            // this.saveFileData(upload);
            this.isUploaded = true;
            const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${authData.uid}`);
            const resumeData: User = {
              resumeString: upload.name,
              resumeURL:  upload.url
            };
            return userRef.update(resumeData);
          }
        );
    });
  }

  hasSuccessfullyUploaded() {
    return this.isUploaded;
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
        this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error))
  }
  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}
