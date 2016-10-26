angular.module 'grupoLacosFloresFront'
  .run ['$rootScope', ($rootScope) ->

    $rootScope.$on '$stateChangeError' , (event, toState, toParams, fromState, fromParams, error) ->
      console.group()
      console.log('[$stateChangeError]')
      console.table([event, toState, toParams, fromState, fromParams, error], ['name', 'url', 'resolve', 'message'])
      console.groupEnd()
      event.preventDefault()

  ]