// Gulp is a node module installed in the node_modules directory.
// The gulpfile.js is created manually in the project root. It automatically loads when you run the gulp command.


//Require gulp and import some methods: src, dest, parallel, watch.
const {gulp, src, dest, parallel, watch} = require('gulp');

// Require gulp-sass to process Sass using Gulp and store it in a variable.
const sassProcessor = require('gulp-sass');

// Require sass and set the sass.compiler property so Gulp uses sass instead of the default node-sass. This is an option/preference for future-proofing.
sassProcessor.compiler = require('sass');

// This is a function I have called makeCSS.
const makeCSS = () => {
    return src('./src/scss/styles.scss') // Takes/returns source file input.
        .pipe(sassProcessor({outputStyle: 'compressed'}).on('error', sassProcessor.logError)) // Preprocesses, compresses output, and logs any errors.
        .pipe(dest('./src/_includes/css')); // Outputs to the specified css directory.
};

// Export the value from makeCSS to use it.
module.exports = makeCSS;


// This is a function I have called watcher.
// It uses Gulp's watch method to watch the specified directory/file.
const watcher = () => {
    watch('./src/scss/**/*.scss', {ignoreInitial: true}, makeCSS); // With 'ingoreInitial' set to true the task will not be run when 'gulp watch' is run, but it will run when a file changes.
};

// Export two functions: watch and default.
// These are functions Gulp looks for when it is run.
// If we just run 'npx gulp', in the terminal, default is executed.
// If we run 'npx gulp watch' the named exported function is executed.

// Sets default (if anyone just runs 'gulp') to run each task in parallel.
module.exports.default = parallel(makeCSS);

// This is the 'watcher' task or function (written above).
// It instructs Gulp to watch directories and act accordingly.
module.exports.watch = watcher;


// I have added the node module concurrently in node_modules.
// A script in package.json runs gulp and, concurrently, 'gulp watch' and 'eleventy --serve'.
