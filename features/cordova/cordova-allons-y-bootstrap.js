'use strict';

module.exports = {
  bootstrap: function($allonsy, $options, $done) {
    if ((process.env.CORDOVA && process.env.CORDOVA == 'false') || $options.owner != 'gulp') {
      return $done();
    }

    var $gulp = DependencyInjection.injector.controller.get('$gulp'),
        apps = $allonsy.glob.sync('apps/*/');

    apps.forEach(function(app) {
      app = app
        .replace(/^apps\//, '')
        .replace(/\//g, '');

      $gulp.addDist('apps/' + app + '/www', ['apps', app], true);
    });

    $done();
  }
};

