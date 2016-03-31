angular.module('app.controllers', [])
  
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


//LOGIN
.controller('AuthCtrl', function($scope, $ionicConfig) {

})



.controller('LoginCtrl', function($scope, $state, $templateCache, $q, $rootScope) {
	$scope.doLogIn = function(){
		$state.go('tabs.reviews');
	};

	$scope.user = {};

	$scope.user.email = "john@doe.com";
	$scope.user.pin = "12345";

	// We need this for the form validation
	$scope.selected_tab = "";

	$scope.$on('my-tabs-changed', function (event, data) {
		$scope.selected_tab = data.title;
	});

})

.controller('SignupCtrl', function($scope, $state) {
	$scope.user = {};

	$scope.user.email = "john@doe.com";

	$scope.doSignUp = function(){
		$state.go('app.feeds-categories');
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state) {
	$scope.recoverPassword = function(){
		$state.go('app.feeds-categories');
	};

	$scope.user = {};
})

 