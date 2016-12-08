angular.module('grupoLacosFloresFront').controller('pedidoCadastroCtrl', function($scope, $http, PedidosService){

  $scope.Pedido = {
    numero: '',
    pedidoData: '',
    status: '',
    observacao: '',
    quantidade: '',
    valorTotal: ''
  }


  $scope.salvarPedido = function(Pedido){
    
    var params = JSON.stringify($scope.Pedido);


    PedidosService.cadastrarPedido(params).then(function(retorno){

    }).catch(function(retorno){

    })
  }

})

.service('PedidosService', function(){
  return{
    cadastrarPedido: function(params){
      return $http({
        method: 'POST',
        url: '',
        data: params
      })
    }
  };
})