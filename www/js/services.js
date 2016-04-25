angular.module('app.services', ["firebase"])

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://wots.firebaseio.com");
    return $firebaseAuth(ref);
  }
])

.factory('UserFactory', [ '$cookies', function($cookies) {

  

  return {
    setCurrentUID: function(userId) { 
      $cookies.put("uid", userId);
    },
    getCurrentUID: function() { 
      return $cookies.get("uid");
      
    },
    setCurrentUsername: function(user) { 
      $cookies.put("username", user);
    },
    getCurrentUsername: function() { 
      return $cookies.get("username");
      
    }
    
  };


}])

.factory("Reviews", function($firebaseArray, UserFactory) {

  var uid = UserFactory.getCurrentUID();
  var url = "https://wots.firebaseio.com/"+uid+"/reviews"
  var reviewsRef = new Firebase(url);
  return $firebaseArray(reviewsRef);
})

.factory("CashService", function($firebaseArray, UserFactory) {

  var uid = UserFactory.getCurrentUID();
  var url = "https://wots.firebaseio.com/"+uid+"/cash"
  var reviewsRef = new Firebase(url);
  return $firebaseArray(reviewsRef);
})

.factory("ReviewCards", function($firebaseArray) {
  var reviewCardsRef = new Firebase("https://wots.firebaseio.com");
  var artists = $firebaseArray(reviewCardsRef.child('receipts'));


  return {
        all: function() {
            return artists;
        },
        get: function(id) {
            // Simple index lookup
            return artists[id];
        }
        
    }
  
})


// .factory('AuthService', ['$scope', '$state', 'Auth',
//   function($scope, $state, Auth) { 

//   var currentUser;

//     return {

//       login: function(){
//         $scope.message = null;
//         $scope.error = null;
//         Auth.$authWithPassword ({
//           email: $scope.user.email,
//           password: $scope.user.password
//         }).then(function(userData) {
//            $scope.message = "User authenticated with uid: " + userData.uid;
//            $state.go('tabs.reviews');


//         }).catch(function(error) {
//           $scope.error = error;
//         });
       
//       } //doLogin ends

//     };      
//   }
// ])


.service('Map', function($q) {
    
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
    
    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }
    
})



.service('BlankService', [function(){

}]);





