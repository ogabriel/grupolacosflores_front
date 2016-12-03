angular.module('grupoLacosFloresFront').controller('parceirosController', function($scope, parceirosService){
  $scope.testaMensagem = 'eita XD';
  
  $scope.floricultura = {
    id: '',
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    /* endereco: {} */
  };

  $scope.parceiro = [];

  /* $scope.floricultura.endereco.cep = "";

  $scope.consultaCEP = function(cep){
    if( cep.length < 8 )
      return;

    parceirosService.consultaCEP(cep).
      then(function(retorno){
        $scope.floricultura.endereco = retorno.data;
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
  } */


    $scope.listarParceiro = function(){
       parceirosService.listarParceiro().then(function(retorno){
            $scope.parceiro = retorno.data
        }).catch(function(){
            console.log('deu ruim');
        })
    }

    $scope.listarParceiro();

    $scope.salvarParceiro = function(){
        
        var parceiross = JSON.stringify($scope.formParceiro);

        parceirosService.cadastrarParceiro(parceiross).then(function(retorno){
            console.log('DEU BOM')
        }).catch({

        });
    }

})
.service('parceirosService', function($http){
    return{
        cadastrarParceiro: function(parceiross){


            return $http({
                method: 'POST',
                url: '',
                data: parceiross
            });
        },

        listarParceiro: function(){
            return $http({
                method: 'GET',
                url: ''
            })
        }
    } 
})
;