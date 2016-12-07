angular.module('grupoLacosFloresFront').controller('parceirosController', function($scope, parceirosService){
  $scope.testaMensagem = 'eita XD';
  
  $scope.floricultura = {
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: ''
  };

  $scope.consultaCEP = function(cep){
    if( cep.length < 8 )
      return;

    parceirosService.consultaCEP(cep).
      then(function(retorno){
        $scope.floricultura = retorno.data;
    }).catch(function(){
        alert(retorno.message || "Houve um erro desconhecido");
        return;
    });
  };



    $scope.listarParceiro = function(){
       parceirosService.listarParceiro().then(function(retorno){
            $scope.parceiro = retorno.data
        }).catch(function(){
            console.log('deu ruim');
        })
    }

    $scope.listarParceiro();

    $scope.salvarParceiro = function(floricultura){
        
        var floricultura = JSON.stringify($scope.floricultura);

        parceirosService.cadastrarParceiro(floricultura).then(function(retorno){
            console.log('DEU BOM')
        }).catch({

        });
    }

})
.service('parceirosService', function($http){
    return{

        consultaCEP: function(cep){
            return $http({
                method:'GET',
                url: 'http://viacep.com.br/ws/'+cep+'/json/'
            });
        },

        cadastrarParceiro: function(floricultura){

            return $http({
                method: 'POST',
                url: 'http://localhost:9080/grupolacosflores_WEB-novo/floricultura',
                data: floricultura
            });
        },

        listarParceiro: function(){
            return $http({
                method: 'GET',
                url: 'http://localhost:9080/grupolacosflores_WEB-novo/floricultura'
            })
        }
    } 
});