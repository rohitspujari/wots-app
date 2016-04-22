angular.module('app.controllers', ['ionic-ratings','app.services','firebase'])



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

.controller('ratingCtrl',  ['$scope', '$http', '$ionicSlideBoxDelegate', '$state', 'Reviews', 'ReviewCards',function($scope, $http,$ionicSlideBoxDelegate, $state,Reviews, ReviewCards) {

  // $http.get('js/data.json').success(function(data){

  //   $scope.orderItems = data.artists;

  // });

  $scope.receipts = ReviewCards.all();
  

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


  $scope.updateSlider = function () {
            $ionicSlideBoxDelegate.update(); //or just return the function
  }

  $scope.receiptReview = function(item, id){

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
    if($scope.liked_service == true)
      $scope.liked_delivery=false;

  }

  $scope.rateDelivery = function(liked_delivery){

    $scope.liked_delivery = !$scope.liked_delivery;
    if($scope.liked_delivery == true)
      $scope.liked_service=false;

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


.controller('MapController', ['$scope',function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });
 
}])



.controller('MapsCtrl', function($scope, $ionicLoading) {

  $scope.info_position = {
    lat: 43.07493,
    lng: -89.381388
  };

  $scope.center_position = {
    lat: 43.07493,
    lng: -89.381388
  };

  $scope.my_location = "";

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe= function(){

    $scope.positions = [];

    $ionicLoading.show({
      template: 'Loading...'
    });

    // with this function you can get the user’s current position
    // we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.current_position = {lat: pos.G,lng: pos.K};
      $scope.my_location = pos.G+", "+pos.K;
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });
  };
});



















 






 