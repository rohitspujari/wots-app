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

.controller('ratingCtrl',  ['$scope', '$http', '$state', 'Reviews', 'ReviewCards',function($scope, $http, $state,Reviews, ReviewCards) {

  // $http.get('js/data.json').success(function(data){

  //   $scope.orderItems = data.artists;

  // });

$scope.orderItems = ReviewCards.all();
  
 
  $scope.orders = [];

  $scope.ratingsObject = {
    iconOn: 'ion-ios-star',    //Optional
    iconOff: 'ion-ios-star-outline',   //Optional
    iconOnColor: 'rgb(179,205,82)',
    iconOffColor: 'rgb(68,68,68)',
    rating:  0, //Optional
    minRating:0,    //Optional
    
    callback: function(rating) {    //Mandatory
      $scope.ratingsCallback(rating);
    }
  };

    $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
         $scope.userRating= rating;

    };


  $scope.itemReview = function(item, id){

    //$scope.orders.push(item+","+$scope.userRating);

      // if($scope.orders.length == 0)
      // {
      //   $scope.orders.push({order: item.name, rating: $scope.userRating, key:id, array:$scope.orders.length});
      // }

    for(var i = 0; i < $scope.orders.length; i++) {
      if ($scope.orders[i].key === id) {
          $scope.orders.splice(i, 1);
          break;
      }
    }
    $scope.orders.push({order: item.name, rating: $scope.userRating, key:id});
  }
  

  $scope.rateServer = function(liked_server){

    $scope.liked_server = !$scope.liked_server;

  }

  $scope.reviewSlideHasChanged = function(index){
    $scope.orders = [];
    //$scope.message = "Changed"
  }

  $scope.rateService = function(liked_service){

    $scope.liked_service = !$scope.liked_service;

  }

  $scope.rateDelivery = function(liked_delivery){

    $scope.liked_delivery = !$scope.liked_delivery;

  }

  $scope.submitReview = function(){

    // $scope.message = $scope.message + $scope.liked_server + " " + 
    //                  $scope.liked_service + " " + 
    //                  $scope.liked_delivery 


    $scope.db = Reviews;
    $scope.db.$add($scope.orders);
  }

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









 






 