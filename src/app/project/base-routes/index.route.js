(function() {
  'use strict';

  angular
    .module('grupoLacosFloresFront')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        template: '<div ui-view></div>',
        abstract: true
      })


      .state('app.sidebarTheme', {
        url:"t",
        views: {
          '@app':{
            templateUrl : "app/project/base-routes/layout.html"
          },
          'topnav@app.sidebarTheme':{
            template: '<acme-navbar></acme-navbar>'
          }
        }
      })

      .state('app.sidebarTheme.home', {
        url: '/home',
        views: {
          'main@app.sidebarTheme': {
            templateUrl: 'app/features/home/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      });

    $urlRouterProvider.otherwise('/t/home');
  }

})();
