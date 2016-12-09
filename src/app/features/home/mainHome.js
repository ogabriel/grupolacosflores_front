(function() {
  'use strict';

  angular
    .module('grupoLacosFloresFront')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, webDevTec, toastr,$scope,$rootScope,$http) {
    var vm = this;



  $scope.noticias = {
    count: ''
  }

   $scope.pedidos = {
    count: ''
  }

  $http({
        method: 'GET',
        url: 'http://127.0.0.1:9080/grupolacosflores_WEB-novo/pedido/count/',
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json', 
      }}).then(function(retorno){
        console.log(retorno.data);
        $scope.pedidos.count = retorno.data;
        //tratar retorno aqui
      });

  
        $http({
        method: 'GET',
        url: 'http://127.0.0.1:9080/grupolacosflores_WEB-novo/noticias/count/',
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json', 
      }}).then(function(retorno){
        console.log(retorno.data);
        $scope.noticias.count = retorno.data;
        //tratar retorno aqui
      });
    
    

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1477155311509;
    vm.showToastr = showToastr;

    activate();

     $scope.id = $rootScope.idFloricultura;

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
    return this;
  }
})();

