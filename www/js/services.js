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





.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);





