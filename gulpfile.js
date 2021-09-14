const {src, dest, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

//Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

//HTML-task, kopiera html-filer till pub-mappen
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

//CSS-task, slå ihop css-filer och minifiera. Kopiera sedan till pub-mappen
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'));
}

//JS-task, slå ihop js-filer och minifiera. Kopiera sedan till pub-mappen
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(dest('pub/js'));
}

//Image-task, komprimera bild-filer och kopiera till pub-mappen
function imageTask() {
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));
}

//Watch-task, håll koll på ändringar som görs i källkodsfiler och ändra i pub-mappen. Starta även upp browsersync.
function watchTask() {

    browserSync.init({
        server: "./pub"
    });

    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, cssTask, jsTask, imageTask)).on('change', browserSync.reload);
}

exports.default = series(
    parallel(copyHTML, cssTask, jsTask, imageTask), 
    watchTask
);