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



.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);


