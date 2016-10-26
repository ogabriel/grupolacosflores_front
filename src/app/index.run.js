(function() {
  'use strict';

  angular
    .module('grupoLacosFloresFront')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
