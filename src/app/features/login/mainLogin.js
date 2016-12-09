angular.module('grupoLacosFloresFront').controller('LoginCtrl', function($scope, parceirosService, $rootScope,$http, $location){

  $scope.formLogin = {
      email: '',
      senha: '',
  }

   $scope.loginUsuario= function(){
       
       var data = JSON.stringify($scope.formLogin);
       console.log(data);
        $http({
            method: 'POST',
            url: 'http://localhost:9080/grupolacosflores_WEB-novo/login',
            data: data,
        }).then(function(retorno){
          console.log(retorno.status);
            if(retorno.status == 200){
                console.log(retorno.data);
                if(retorno.data > 1)
                {
                    $rootScope.idFloricultura = retorno.data;
                    console.log($rootScope.idFloricultura);

                } else {
                    $rootScope.idFloricultura = undefined;
                    console.log($rootScope.idFloricultura);
                    
                }
                $location.path("/home");

                
            };

        })
   }

})
.service('LoginService', function(){
  
})