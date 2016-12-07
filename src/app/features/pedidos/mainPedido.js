
angular.module('grupoLacosFloresFront').controller('PedidosController', function($scope, PedidosService){
  

  $scope.testaMensagem = 'eita XD';



  var promise = PedidosService.getQuestions();
  promise.then(function(retorno){
    console.log('sucesso!', retorno);
  })
  .catch(function(){
    console.log('falhou');
  });


})

.service('PedidosService', function($http){
  return{
    //funções para chamada de endpoint
    salvarItem: function(){
      return $http({
        //vai indo
      })
    }
  };
});


