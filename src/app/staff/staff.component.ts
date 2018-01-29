import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { User } from '../util/user';
import { WorkshopPreferences } from '../util/workshop_preferences';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  private uniCollection: AngularFirestoreCollection<User>;
  public users: Observable<User[]>;
  private highSchoolCollection: AngularFirestoreCollection<User>;
  public highSchoolers: Observable<User[]>;
  private unfinishedCollection: AngularFirestoreCollection<User>;
  public unfinishedUsers: Observable<User[]>;
  private workshopsCollection: AngularFirestoreCollection<WorkshopPreferences>;
  public workshops: Observable<WorkshopPreferences[]>;
  count = null;
  usersCount = null;
  unfinishedCount = null;
  workshopCount = null;
  emails = [];

  constructor(private authService: AuthService, private afs : AngularFirestore) { }

  ngOnInit() {
  }

  getCount(){
          this.highSchoolCollection = this.afs.collection<User>('users', ref => ref.where('highSchoolName', '>=', ''));
          this.highSchoolers = this.highSchoolCollection.valueChanges();
          this.highSchoolers.subscribe(queriedItems => {
            console.log(queriedItems);
            this.count = queriedItems.length;
          });
          console.log(this.highSchoolers);
          console.log(this.count);
  }

  getRegistrations(){
          this.uniCollection = this.afs.collection<User>('users', ref => ref.where('applicantType', '>=', ''));
          this.users = this.uniCollection.valueChanges();
          this.users.subscribe(queriedItems => {
            console.log(queriedItems);
            this.usersCount = queriedItems.length;
          });
          console.log(this.users);
          console.log(this.usersCount);
  }

    getUnfinishedRegistrations(){
            this.unfinishedCollection = this.afs.collection<User>('users', ref => ref.where('uid', '>=', ''));
            this.unfinishedUsers = this.unfinishedCollection.valueChanges();
            this.unfinishedUsers.subscribe(queriedItems => {
              console.log(queriedItems);
              this.unfinishedCount = queriedItems.length;
            });
            console.log(this.unfinishedUsers);
            console.log(this.unfinishedCount);
    }
    getWorkshopPreferences(){
          var thing = this;
          this.emails = [];
          this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('uid', '>=', ''));
          this.workshops = this.workshopsCollection.valueChanges();
          this.workshops.subscribe(queriedItems => {
            console.log(queriedItems);
            this.workshopCount = queriedItems.length;
            for(var i =0; i < queriedItems.length; i++){
                    let uid = queriedItems[i].uid;
                    if(!uid){thing.emails.push("N/A"); continue;}
                    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
                    userRef.ref.get().then(function(doc) {
                        if (doc.exists) {
                            var userObj = doc.data();
                            thing.emails.push(userObj.email)
                        } else {
                            console.log("No such document!");
                        }
                    }).catch(function(error) {
                        console.log("Error getting document:", error);
                    });
              }
          });
          console.log(this.workshops);
          console.log(this.workshopCount);
    }

    getMicrosoftPreferences(){
        this.emails = [];
        var thing = this;
        // this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'microsoft'));
        this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'microsoft').orderBy("timestamp").limit(52));
        this.workshops = this.workshopsCollection.valueChanges();
        this.workshops.subscribe(queriedItems => {
          console.log(queriedItems);
          this.workshopCount = queriedItems.length;
          for(var i =0; i < queriedItems.length; i++){
                  let uid = queriedItems[i].uid;
                  const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
                  userRef.ref.get().then(function(doc) {
                      if (doc.exists) {
                          var userObj = doc.data();
                          thing.emails.push(userObj.email)
                      } else {
                          console.log("No such document!");
                      }
                  }).catch(function(error) {
                      console.log("Error getting document:", error);
                  });
            }
        });
        console.log(this.workshops);
        console.log(this.workshopCount);
    }

    getCCCPreferences(){
        this.emails = [];
            var thing = this;
            // this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'ccc'));
            this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'ccc').orderBy("timestamp").limit(50));
            this.workshops = this.workshopsCollection.valueChanges();
            this.workshops.subscribe(queriedItems => {
              console.log(queriedItems);
              this.workshopCount = queriedItems.length;
              for(var i =0; i < queriedItems.length; i++){
                      let uid = queriedItems[i].uid;
                      const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
                      userRef.ref.get().then(function(doc) {
                          if (doc.exists) {
                              var userObj = doc.data();
                              thing.emails.push(userObj.email)
                          } else {
                              console.log("No such document!");
                          }
                      }).catch(function(error) {
                          console.log("Error getting document:", error);
                      });
                }
            });
            console.log(this.workshops);
            console.log(this.workshopCount);
    }

    getQualcommPreferences(){
        this.emails = [];
            var thing = this;
            // this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'qualcomm'));
            this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'qualcomm').orderBy("timestamp").limit(50));
            this.workshops = this.workshopsCollection.valueChanges();
            this.workshops.subscribe(queriedItems => {
              console.log(queriedItems);
              this.workshopCount = queriedItems.length;
              for(var i =0; i < queriedItems.length; i++){
                      let uid = queriedItems[i].uid;
                      const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
                      userRef.ref.get().then(function(doc) {
                          if (doc.exists) {
                              var userObj = doc.data();
                              thing.emails.push(userObj.email)
                          } else {
                              console.log("No such document!");
                          }
                      }).catch(function(error) {
                          console.log("Error getting document:", error);
                      });
                }
            });
            console.log(this.workshops);
            console.log(this.workshopCount);
    }

    getTIPreferences(){
        this.emails = [];
            var thing = this;
            // this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'ti'));
            this.workshopsCollection = this.afs.collection<WorkshopPreferences>('workshopPreferences', ref => ref.where('firstWorkshopPreference', '==', 'ti').orderBy("timestamp").limit(50));
            this.workshops = this.workshopsCollection.valueChanges();
            this.workshops.subscribe(queriedItems => {
              console.log(queriedItems);
              this.workshopCount = queriedItems.length;
              for(var i =0; i < queriedItems.length; i++){
                      let uid = queriedItems[i].uid;
                      const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
                      userRef.ref.get().then(function(doc) {
                          if (doc.exists) {
                              var userObj = doc.data();
                              thing.emails.push(userObj.email)
                          } else {
                              console.log("No such document!");
                          }
                      }).catch(function(error) {
                          console.log("Error getting document:", error);
                      });
                }
            });
            console.log(this.workshops);
            console.log(this.workshopCount);
    }

}
