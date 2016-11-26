angular.module('grupoLacosFloresFront').controller('parceirosController', function($scope, parceirosService){
  $scope.testaMensagem = 'eita XD';
  $scope.endereco = {};
  $scope.endereco.cep = "";

  $scope.consultaCEP = function(cep){
    if( cep.length < 8 )
      return;

    parceirosService.consultaCEP(cep).
      then(function(retorno){
        $scope.endereco = retorno.data;
    }).catch(function(){
        alert(retorno.message || "Houve um erro desconhecido");
        return;
    });
  };


})

.service('parceirosService', function($http){
  return{
    consultaCEP: function(cep){
      return $http({
        method:'GET',
        url: 'http://viacep.com.br/ws/'+cep+'/json/'
      });
    }
  }
});