// var Metalsmith = require('metalsmith')
// var markdown = require('metalsmith-markdown')
// var layouts = require('metalsmith-layouts')
// var assets = require('metalsmith-assets')
// var collections = require('metalsmith-collections')
// var permalinks = require('metalsmith-permalinks')
// var browserSync = require('metalsmith-browser-sync')
// var metadata = require('metalsmith-metadata')
// var sass = require('metalsmith-sass')
// var inplace = require('metalsmith-in-place')
//
// Metalsmith(__dirname)
//   .source('src/')
//   .destination('./build/')
//   .use(metadata({
//     'companies': 'data/companies.json',
//     'projects': 'data/projects.json'
//   }))
//   .use(collections({
//     projects: {
//       pattern: 'data/projects/*.md',
//       sortBy: 'startDate',
//       reverse: true,
//       limit: 1
//     }
//   }))
//   .use(markdown())
//   .use(permalinks({
//     pattern: ':title'
//   }))
//   .use(inplace({
//     engine: 'mustache',
//     pattern: '*.html',
//     directory: 'src/'
//   }))
//   .use(layouts({
//     engine: 'mustache',
//     directory: 'src/layouts',
//     partials: 'src/partials',
//     default: 'layout.html',
//     pattern: '**/*.html'
//   }))
//   .use(sass({
//     outputStyle: 'expanded',
//     outputDir: 'assets/css/'
//   }))
//   .use(assets({
//     source: './assets', // relative to the working directory
//     destination: './assets' // relative to the build directory
//   }))
//   .build(function (error) {
//     if (error) {
//       console.log(error)
//     }
//   })
