const
  gulp = require('gulp')
  , webpackTasks = require('./gulp/webpack')
  , deployTasks = require('./gulp/deploy')
;

// srcPaths
global.srcPaths = {
  build: 'build',                     // Eventually export
  node_modules: 'node_modules'        // Node dependent packages
};

// task
gulp.task('build', webpackTasks.packBuild);
gulp.task('build:watch', webpackTasks.packBuildWatch);
gulp.task('build:test_server:watch', webpackTasks.packBuildTestServerWatch);
gulp.task('deploy', deployTasks.deploy);

// default task
gulp.task('default', webpackTasks.packDev);

