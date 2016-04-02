angular.module('app.controllers', ['ionic-ratings', 'app.services','firebase'])


.controller('SignUpCtrl', ['$scope','$state','Auth',
  function($scope, $state, Auth) {

      $scope.doSignUp = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
        $state.go('tabs.reviews');      
      }).catch(function(error) {
        $scope.error = error;
      });
      
    };    
  }

])


.controller('LoginCtrl', ['$scope', '$state', 'Auth',
  function($scope, $state, Auth) {       

      $scope.doLogin = function(){
      $scope.message = null;
      $scope.error = null;

      Auth.$authWithPassword ({
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function(userData) {
         $scope.message = "User authenticated with uid: " + userData.uid;
         $state.go('tabs.reviews');

      }).catch(function(error) {
        $scope.error = error;
      });
     
    }; //doLogin ends
  }
  ])


.controller('DummyLoginCtrl', 
  function($scope, $state, $templateCache, $q, $rootScope) {
  $scope.doLogIn = function(){
    $state.go('tabs.reviews');
  };
})




  
.controller('reviewsCtrl', function($scope) {

})
   
.controller('cashCtrl', function($scope) {

})
   
.controller('searchCtrl', function($scope) {

})
         
.controller('profileCtrl', function($scope) {

})
   
.controller('paymentCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})
   
.controller('logoutCtrl', function($scope) {

})

.controller('ratingCtrl', ['$scope', function($scope, $state) {

      $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(179,205,82)',
        iconOffColor: 'rgb(68,68,68)',
        //iconOffColor:  'rgb(200, 100, 100)',
        rating:  1,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };


      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

}])




//LOGIN
.controller('AuthCtrl', function($scope, $ionicConfig) {

})



.controller('ForgotPasswordCtrl', function($scope, $state) {
  $scope.recoverPassword = function(){
    $state.go('app.feeds-categories');
  };

  $scope.user = {};
})









 






 