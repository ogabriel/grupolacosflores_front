
angular.module('grupoLacosFloresFront').controller('PedidosController', function($scope, PedidosService){
  var ctrl = this;

  ctrl.testaMensagem = 'eita XD';



  var promise = PedidosService.getQuestions();
  promise.then(function(retorno){
    console.log('sucesso!', retorno);
  })
  .catch(function(){
    console.log('falhou');
  });

  return this;
})

.service('PedidosService', function($http){
  return{
    getQuestions: function(){
      return $http({
        method: 'POST',
        url: 'http://polls.apiblueprint.org/questions',
        data: {
          xpto: 'eitaa'
        }
      });
    }
  };
});


