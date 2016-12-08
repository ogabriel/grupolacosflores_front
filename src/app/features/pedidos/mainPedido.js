
angular.module('grupoLacosFloresFront').controller('PedidosController', function($scope, $http){
  

 $scope.formItem = {
        nome: '',  
        descricao: '',
        valorUnitario: ''
    };


     $scope.salvarItem = function(){
       
       $http({
       method: 'POST',
       url: 'http://127.0.0.1:9080/grupolacosflores_WEB-novo/item',
       data: JSON.stringify($scope.formItem),
       headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
     }});
   }
  })
       


