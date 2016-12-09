angular.module('grupoLacosFloresFront').controller('noticiasController', function($scope, noticiasService,$http){
    
    
    $scope.formNoticia = {
        titulo: '',
        conteudo: ''
    };

    // $scope.load = function(){
    //     if($routeParams.idNotica){
    //         $scope.formNoticia = noticiasService.getNoticia(idNotica).then(function(retorno){
    //             $scope.formNoticia = retrno.data;
    //         }).catch(function(){
    //             console.log("vish");
    //         })
    //     }else{
    //         $scope.formNoticia = {
    //             titulo: '',
    //             conteudo: ''
    //         }
    //     }
    // }

    // $scope.noticias = [];

    // $scope.editarNoticia = function(noticia){
    //     $location.path();
    // };

    $scope.listarNoticias = function(){
        noticiasService.listarNoticias().then(function(retorno){
            $scope.noticias = retorno.data
        }).catch(function(){
            console.log('deu ruim');
        })
    }

    $scope.listarNoticias();

    $scope.salvarNoticia = function(){
        
        var noticia = JSON.stringify($scope.formNoticia);

        noticiasService.cadastrarNoticia(noticia).then(function(retorno){
            console.log('DEU BOM')
        }).catch({

        });
    }

})
.service('noticiasService', function($http){
    return{
        cadastrarNoticia: function(noticia){
            return $http({
                method: 'POST',
                url: 'http://localhost:9080/grupolacosflores_WEB-novo/noticias',
                data: noticia
            });
        },

        listarNoticias: function(){
            return $http({
                method: 'GET',
                url: 'http://localhost:9080/grupolacosflores_WEB-novo/noticias'
            })
        },

        getNoticia: function(noticiaID){
            return $http({
                method: 'GET',
                url: 'http://localhost:9080/grupolacosflores_WEB-novo/noticias'+noticiaID
            })
        }
    } 
});