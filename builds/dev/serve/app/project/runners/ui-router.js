(function() {
  angular.module('grupoLacosFloresFront').run([
    '$rootScope', function($rootScope) {
      return $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        console.group();
        console.log('[$stateChangeError]');
        console.table([event, toState, toParams, fromState, fromParams, error], ['name', 'url', 'resolve', 'message']);
        console.groupEnd();
        return event.preventDefault();
      });
    }
  ]);

}).call(this);
