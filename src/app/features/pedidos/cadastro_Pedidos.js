angular.module('grupoLacosFloresFront').controller('pedidoCadastroCtrl', function($scope, $http, $cookies){

  $scope.Pedido = {
    numero: '',
    pedidoData: '',
    status: '',
    observacao: '',
    quantidade: '',
    valorTotal: ''
  }

  $scope.Floricultura = {
    floricultura_id: ''
  }


$scope.salvarPedido = function(){
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

})

