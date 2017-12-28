/**
 * Created by rahul_ram on 11/22/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginController from 'login/login';
import applicationController from 'application/application';
import registrationController from 'registration/registration';
import * as firebase from "firebase";

const app = angular.module('app', [uiRouter]);

let config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/application');

    $stateProvider
        .state('registration', {
            url: '/registration',
            template: require('registration/registration.html'),
            controller: registrationController
        })
        .state('login', {
            url: '/login',
            template: require('login/login.html'),
            controller: loginController
        })
        .state('application', {
            url: '/application',
            template: require('application/application.html'),
            controller: applicationController
        });

    // Gets rid of hashes from urls
    $locationProvider.html5Mode(true);
});

app.factory('LoginProvider', function () {
    firebase.initializeApp(config);
    firebase.auth().useDeviceLanguage();
    return {
      loginStandard : function(email, password) {
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
              let errorCode = error.code;
              let errorMessage = error.message;
          });
      },
      loginGoogle : function () {
          // TODO: Need to test if redirect is better on mobile
          let provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/drive.file');
          firebase.auth().signInWithPopup(provider).then(function(result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              let token = result.credential.accessToken;
              // The signed-in user info.
              let user = result.user;
              // ...
          }).catch(function(error) {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              // The email of the user's account used.
              let email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              let credential = error.credential;
              // ...
          });
      }, 
      createStandard : function (email, password) {
          // TODO: Feed promise values to something useful
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              // ...
          });
      },
      fbAuth : function () {
          return firebase.auth();
      }
    };
});

export default app;