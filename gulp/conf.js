var gutil = require('gulp-util');

/**
 *  Gulp Paths
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

exports.url = {
  database: 'mongodb://admin:art9874RT#@ds157112.mlab.com:57112/heroku_20v3s87z'
  // database: 'mongodb://artside:art9874RT#@cluster0-shard-00-00-uxde6.mongodb.net:27017,cluster0-shard-00-01-uxde6.mongodb.net:27017,cluster0-shard-00-02-uxde6.mongodb.net:27017/artside?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
  // database: 'mongodb://localhost/artside'
};

// Wiredep
exports.wiredep = {
  directory: 'bower_components'
};

// Error Handler
exports.errorHandler = function (title) {
  'use strict';

  return function (err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};