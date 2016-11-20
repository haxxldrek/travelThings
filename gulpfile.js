var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var config = {
    styles: {
        input: [
            './bower_components/angular/angular-csp.css',
            './app/app.scss'
        ],
        name: 'app.css',
        output: './www/styles'
    },
    scripts: {
        input: [
            './bower_components/angular/angular.js',
            './app/**/*.module.js',
            './app/**/*.js'
        ],
        name: 'app.js',
        output: './www/scripts'
    },
    index: {
        input: [
            './app/index.html'
        ],
        name: 'index.html',
        output: './www'
    }
};

var state = 'prod';

gulp.task('default', [
    'build_index',
    'build_scripts',
    'build_styles'
]);

gulp.task('dev', function() {

    state = 'dev';

    return gulp.run([
        'watch',
        'build_index',
        'build_scripts',
        'build_styles'
    ]);
});

gulp.task('stage', function() {

    state = 'stage';

    return gulp.run([
        'build_index',
        'build_scripts',
        'build_styles'
    ]);
});

gulp.task('watch', function() {
    gulp.watch('./app/app.scss', ['build_styles']);
    gulp.watch('./app/**/*.js', ['build_scripts'])
});

gulp.task('build_styles', function(){
    return gulp
        .src(config.styles.input)
        .pipe(plugins.sass())
        .pipe(plugins.concat(config.styles.name))
        .pipe(plugins.autoprefixer())
        .pipe(plugins.if((state === 'prod' || state === 'stage'), plugins.minifyCss()))
        .pipe(gulp.dest(config.styles.output));
});

gulp.task('build_index', function(){
    return gulp
        .src(config.index.input)
        .pipe(gulp.dest(config.index.output));
});

gulp.task('build_scripts', function(){
    return gulp
        .src(config.scripts.input)
        .pipe(plugins.concat(config.scripts.name))
        .pipe(plugins.if((state === 'prod' || state === 'stage'), plugins.uglify()))
        .pipe(gulp.dest(config.scripts.output));
});