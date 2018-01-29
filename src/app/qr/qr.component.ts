import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

declare var require: any
var QRCode = require('qrcode')

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  constructor(private afAuth : AngularFireAuth) { }

  ngOnInit() {
    var canvas = document.getElementById('canvas')
    this.afAuth.authState.subscribe(authData => {
        let uid = authData.uid;
        QRCode.toCanvas(canvas, uid, {scale: 6}, function (error) {
          if (error) console.error(error)
          console.log('success!');
        })
    });

  }

}
