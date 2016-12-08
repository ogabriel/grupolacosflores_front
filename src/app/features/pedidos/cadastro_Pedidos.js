angular.module('grupoLacosFloresFront').controller('pedidoCadastroCtrl', function($scope, $http, PedidosService, $cookies){

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



    //Exemplo de uso de cookie
    // $cookies.put('id', params);
    // var id =  JSON.parse($cookies.get('id')); 


    PedidosService.cadastrarPedido(params).then(function(retorno){
      var numeroPedido = retorno.data.floriculturaID;

      numeroPedido = JSON.stringify(numeroPedido);

      $cookies.put('id', numeroPedido);
       var id =  JSON.parse($cookies.get('id')); 

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