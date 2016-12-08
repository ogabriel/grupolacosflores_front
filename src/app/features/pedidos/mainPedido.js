angular.module('grupoLacosFloresFront').controller('PedidosController', function($scope, $http, $location){
  

  $scope.Pedidos = [];

 $scope.formItem = {
        nome: '',  
        descricao: '',
        valorUnitario: ''
    };

    $scope.exibirDetalhes = function(){
      $location.path("/pedidos/Detalhes");
    }

    $scope.editar = function(){


      $http({
        method: 'PUT',
        url: ''
      })
    }


     $scope.salvarItem = function(){
       
        $http({
        method: 'POST',
        url: 'http://127.0.0.1:9080/grupolacosflores_WEB-novo/item',
        data: JSON.stringify($scope.formItem),
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json', 
      }}).then(function(){
        //tratar retorno aqui
      });
    };

    $scope.listarPedidos = function(){

      //isso aqui temq mudar. 
      //Tem que pegar id da floriculuta dinamicamente
      var idFloricultura = 1;


      $http({
        method: 'GET',
        url: ''+idFloricultura
      }).then(function(retorno){
        $scope.Pedidos = retorno.data
      });

    }
});


