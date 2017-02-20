import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import { exec } from 'child_process';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';

const paths = {
  allSrcJs: 'src/**/*.js',
  gulpFile: 'gulpfile.babel.js',
  libDir: 'lib',
  allLibTests: 'lib/test/**/*.js',
};

gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['lint', 'clean'], () => gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)));

gulp.task('main', ['build'], (callback) => {
  console.log('Main is run');
  setTimeout(() => {
    exec(`node ${paths.libDir}/server`, (error, stdout) => {
      console.log(stdout, error);
      return callback(error);
    });
  }, 5000);
});

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
);

gulp.task('lint', () => gulp.src([
  paths.allSrcJs,
  paths.gulpFile,
])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));
