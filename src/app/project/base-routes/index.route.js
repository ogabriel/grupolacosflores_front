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

      
      .state('app.pedidos',{
        url: '/pedidos',
        views: {
          'content':{
            template: '<div ui-view>',
            controller: 'PedidosController'
          }
        },
        abstract: true
      })

      .state('app.pedidos.lista', {
        url: '',
        templateUrl: 'app/features/pedidos/mainPedido.html'
      })

      .state('app.pedidos.cadastro', {
        url: '/cadastro',
        templateUrl: 'app/features/pedidos/cadastro_Pedidos.html'
      })

      .state('app.pedidos.cadastroEntregadores', {
        url: '/cadastroEntregadores',
        templateUrl: 'app/features/pedidos/cadastro_Entregadores.html'
      })

      .state('app.pedidos.cadastroItens', {
        url: '/cadastroItens',
        templateUrl: 'app/features/pedidos/cadastro_Itens.html'
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
            template: '<div ui-view>',
            controller: 'noticiasController'
          }
        },
        abstract: true
      })

      .state('app.noticias.lista',{
        url: '',        
        templateUrl:'app/features/noticias/mainNoticias.html',
      })

      .state('app.noticias.cadastro', {
        url: '/cadastroNoticias',
        templateUrl: 'app/features/noticias/noticia_cadastrar.html'
      })

      
     
    $urlRouterProvider.otherwise('/home');
  }

})();
