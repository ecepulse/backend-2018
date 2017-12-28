/**
 * Created by rahul_ram on 12/28/17.
 */

export default function ($scope, $state, LoginProvider) {
    $scope.formSubmit = function() {
        LoginProvider.loginStandard($scope.username, $scope.password);
        if(LoginProvider.fbAuth().currentUser) {
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('application');
        } else {
            $scope.error = "Incorrect username/password ! May need to register user.";
        }
    };
    $scope.googleSubmit = function () {
        LoginProvider.loginGoogle();
    };

    if(LoginProvider.fbAuth().currentUser) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('application');
    }
}