/**
 * Created by rahul_ram on 12/28/17.
 */

export default function ($scope, $state, LoginProvider) {
    if(LoginProvider.fbAuth().currentUser) {
        $scope.logoutForm = function() {
            LoginProvider.fbAuth().signOut().then(function () {
                $state.transitionTo('login');
            });
        };
        $scope.user = LoginProvider.fbAuth().currentUser.email;
    } else {
        $state.transitionTo('login');
    }
}