/**
 * Created by rahul_ram on 12/28/17.
 */

import * as firebase from "firebase";

export default function ($scope, $state, LoginProvider) {
    //TODO: Switch to catch and debug error message update delay
    $scope.formSubmit = function(result) {
        LoginProvider.fbAuth().signInWithEmailAndPassword($scope.username, $scope.password).then(function (result) {
            if(LoginProvider.fbAuth().currentUser) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('application');
            }
        }, function (error) {
            let errorMessage = error.message;
            $scope.error = errorMessage;
        });
    };
    $scope.googleSubmit = function () {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/drive.file');
        LoginProvider.fbAuth().signInWithPopup(provider).then(function(result) {
            if(LoginProvider.fbAuth().currentUser) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('application');
            }
        }, function (error) {
            let errorMessage = error.message;
            $scope.error = errorMessage;
        });
    };

    if(LoginProvider.fbAuth().currentUser) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('application');
    }
}