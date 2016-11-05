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
        templateUrl: 'app/project/base-routes/layout.html',
        abstract: true
      })


      // .state('app.sidebarTheme', {
      //   url:"",
      //   views: {
      //     '@content':{
      //       templateUrl : "app/project/base-routes/layout.html"
      //     },
      //     'topnav@app.sidebarTheme':{
      //       template: '<acme-navbar></acme-navbar>'
      //     }
      //   }
      // })

      .state('app.home', {
        url: 'home',
        views: {
          'content': {
            templateUrl: 'app/features/home/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })

      .state('app.pedidos', {
        url: 'pedidos',
        views: {
          'content': {
            templateUrl: 'app/features/pedidos/main.html',
            controller: 'PedidosController'
          }
        }
      })

      .state('app.parceiros',{
        url: 'parceiros',
        views: {
          'content':{
            templateUrl: 'app/features/parceiros/main.html',
            controller: ''
          }
        }
      });

     /* .state('app.parceiros.cadastro',{
        url: 'cadastro_parceiro',
        views: {
          'content':{
            templateUrl: 'app/features/parceiros/main_parceiros.html',
            controller: ''
          }
        }
      });*/

    $urlRouterProvider.otherwise('/home');
  }

})();
