angular.module('grupoLacosFloresFront').controller('LoginCtrl', function($scope, parceirosService, $rootScope,$http, $location){

  $scope.formLogin = {
      email: '',
      senha: ''
  }

   $scope.loginUsuario= function(){
       
       var data = JSON.stringify($scope.formLogin);
        $http({
            method: 'POST',
            url: 'http://localhost:9080/grupolacosflores_WEB-novo/login',
            data: data,
        }).then(function(retorno){
          console.log(retorno.status);
            if(retorno.status == 200){
              $location.path("/home");
            };

        })
   }

})
.service('LoginService', function(){
  
})