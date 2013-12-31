angular.module('appModule')
.run(function($rootScope, $cookies, $location){
  $rootScope.$on('$routeChangeStart', function(evt, nextUrl, currentUrl){
    if(nextUrl.$$route && nextUrl.$$route.originalPath !== '/login'){
      switch($cookies.status){
        case "401":
          $location.path('/login');
          break;
        case "412":
          $location.path('/getphonenumber');
          break;
      }
    }
  })
});