angular.module('grupoLacosFloresFront').controller('PedidosController', function($scope, $http, $location){
  

  $scope.Pedidos = [];

  $scope.p = {
    numero : '',
    pedidoData:'',
    status:'',
    observacao:'',
    quantidade:'',
    valorTotal:''
  }

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
      $http({
        method: 'GET',
        url: ' http://127.0.0.1:9080/grupolacosflores_WEB-novo/pedido'
      }).then(function(retorno){
        console.log(retorno.data);
        $scope.p = retorno.data;

      });
       
    }

    $scope.listarPedidos();

   
});


