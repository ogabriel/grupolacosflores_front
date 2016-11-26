(function() {
  'use strict';

  angular
    .module('grupoLacosFloresFront')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '',
        templateUrl: 'app/project/base-routes/layout.html',
        abstract: true
      })

      .state('app.home', {
        url: '/home',
        views: {
          'content': {
            templateUrl: 'app/features/home/mainHome.html',
            controller: 'HomeController',
            controllerAs: 'home'
          }
        }
      })

      .state('app.pedidos', {
        url: '/pedidos',
        views: {
          'content': {
            templateUrl: 'app/features/pedidos/mainPedido.html',
            controller: 'PedidosController',
            controllerAs: 'pedido'
          }
        }
      })

      .state('app.parceiros',{
        url: '/parceiros',
        views: {
          'content':{
            template: '<div ui-view>',
            controller: 'parceirosController'
          }
        },
        abstract: true
      })

      .state('app.parceiros.lista', {
        url: '',
        templateUrl: 'app/features/parceiros/mainParceiro.html'
      })

      .state('app.parceiros.cadastro', {
        url: '/cadastro',
        templateUrl: 'app/features/parceiros/cadastroParceiro.html'
      })

      .state('app.noticias',{
        url: '/noticias',
        views: {
          'content':{
            templateUrl:'app/features/noticias/mainNoticias.html',
            controller: ''
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
