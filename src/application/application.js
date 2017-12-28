/**
 * Created by rahul_ram on 12/28/17.
 */

export default function ($scope, $state, LoginProvider) {
    if(LoginProvider.fbAuth().currentUser) {
        $scope.logoutForm = LoginProvider.fbAuth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
        $scope.user = LoginProvider.fbAuth().currentUser.email;
    } else {
        $state.transitionTo('login');
    }
}