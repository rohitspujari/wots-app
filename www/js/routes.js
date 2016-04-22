angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('tabs.reviews', {
    url: '/review',
    views: {
      'tab1': {
        templateUrl: 'templates/reviews.html',
        controller: 'reviewsCtrl'
      }
    }
  })

  .state('tabs.cash', {
    url: '/cash',
    views: {
      'tab2': {
        templateUrl: 'templates/cash.html',
        controller: 'cashCtrl'
      }
    }
  })

  .state('tabs.search', {
    url: '/search',
    views: {
      'tab3': {
        templateUrl: 'templates/search.html',
        controller: 'MapsCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('payment', {
    url: '/payment',
    templateUrl: 'templates/payment.html',
    controller: 'paymentCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('logout', {
    url: '/logout',
    templateUrl: 'templates/logout.html',
    controller: 'logoutCtrl'
  })


   .state('auth', {
    url: "/auth",
    templateUrl: "templates/auth/auth.html",
    abstract: true,
    controller: 'AuthCtrl'
  })

  .state('auth.walkthrough', {
    url: '/walkthrough',
    templateUrl: "templates/auth/walkthrough.html"
  })

  .state('auth.login', {
    url: '/login',
    templateUrl: "templates/auth/login.html",
    controller: 'LoginCtrl'
  })

  .state('auth.signup', {
    url: '/signup',
    templateUrl: "templates/auth/signup.html",
    controller: 'SignUpCtrl'
  })

  .state('auth.forgot-password', {
    url: "/forgot-password",
    templateUrl: "templates/auth/forgot-password.html",
    controller: 'ForgotPasswordCtrl'
  })


$urlRouterProvider.otherwise('/auth/login')

  

});