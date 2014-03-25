'use strict';

angular.module('developBuildTestDeployApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
