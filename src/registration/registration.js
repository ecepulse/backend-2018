/**
 * Created by rahul_ram on 12/28/17.
 */

export default function ($scope, $state, LoginProvider) {
    $scope.formSubmit = function() {
        //TODO: Add proper error handling
        LoginProvider.fbAuth.createUserWithEmailAndPassword($scope.username, $scope.password).then(function () {
            if(LoginProvider.fbAuth().currentUser) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('application');
            }
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            $scope.error = errorMessage;
            // ...
        });
    };

    if(LoginProvider.fbAuth().currentUser) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('application');
    }
}