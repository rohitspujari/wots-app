angular.module('app.services', ["firebase"])

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://wots.firebaseio.com");
    return $firebaseAuth(ref);
  }
])

.factory("Reviews", function($firebaseArray) {
  var reviewsRef = new Firebase("https://wots.firebaseio.com/reviews");
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


.factory('UserFactory', [ '$cookies', function($cookies) {

  var currentUser;

  return {
    setCurrentUser: function(user) { 
      currentUser = user; 
      $cookies.put("username", user);
    },
    getCurrentUser: function() { 
      currentUser = $cookies.get("username");
      return currentUser; 
    }
    
  };


}])



.service('BlankService', [function(){

}]);





