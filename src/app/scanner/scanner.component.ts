import { Component, OnInit } from '@angular/core';

declare var require: any
const jsQR = require("jsqr");

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor(private afs : AngularFirestore) { }

  outputData = null
  errorData = null
  user = null;

  ngOnInit() {
      var video = document.createElement("video");
      var canvasElement = <HTMLCanvasElement>document.getElementById("canvas");
      var canvas = canvasElement.getContext("2d");
      var outputContainer = document.getElementById("output");
      this.outputData = document.getElementById("outputData");
      this.errorData = document.getElementById("errorData");
      var thing = this;
      var lastCode = null;

      function drawLine(begin, end, color) {
        canvas.beginPath();
        canvas.moveTo(begin.x, begin.y);
        canvas.lineTo(end.x, end.y);
        canvas.lineWidth = 4;
        canvas.strokeStyle = color;
        canvas.stroke();
      }


      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
        requestAnimationFrame(tick);
      });
      // List cameras and microphones.

    navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
      devices.forEach(function(device) {
        console.log(device.kind + ": " + device.label +
                    " id = " + device.deviceId);
      });
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    });

      canvasElement.addEventListener('click', function() { thing.updateCheckin(lastCode) }, false);


      function tick() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvasElement.hidden = false;
          outputContainer.hidden = false;

          canvasElement.height = video.videoHeight;
          canvasElement.width = video.videoWidth;
          canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
          var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
          var code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
            drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
            drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
            drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
            lastCode = code;
          }
          else {
          }
        }
        requestAnimationFrame(tick);
      }
  }

  updateCheckin(code){
      var thing = this;
      if(code.data == ""){return;}
      var uid = code.data.replace(/[^a-z0-9]/gi,'');
      if(uid==""){return;}
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
      userRef.ref.get().then(function(doc) {
          if (doc.exists) {
              thing.user = doc.data();
              if(thing.user.checkedIn){
                  thing.errorData.innerText = "USER ALREADY CHECKED IN";
                  thing.outputData.innerText = "";
              }
              else {
                  thing.errorData.innerText = "";
                  userRef.update({checkedIn: true}).then(function() {
                          thing.outputData.innerText = "User " + uid + " has been checked in.";
                  }).catch((error) => {
                          console.log(error);
                          thing.outputData.innerText = "Invalid QR code.";
                  });
              }
          }
          else {
              thing.errorData.innerText = "USER DOES NOT EXIST";
          }
      });
  }

}
