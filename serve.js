var fs = require('fs')
var path = require('path')
var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts')
var assets = require('metalsmith-assets')
var collections = require('metalsmith-collections')
var permalinks = require('metalsmith-permalinks')
var browserSync = require('metalsmith-browser-sync')
var metadata = require('metalsmith-metadata')
var sass = require('metalsmith-sass')
var inplace = require('metalsmith-in-place')

var dataFiles = fs.readdirSync(path.join(__dirname, 'src', 'data'))
var data = {}

dataFiles.forEach(function (filename) {
  if (filename.indexOf('json') > -1) {
    data[filename.split('.')[0]] = 'data/' + filename
  }
})

Metalsmith(__dirname)
  .source('src/')
  .destination('./build/')
  .use(metadata(data))
  .use(collections({
    projects: {
      pattern: 'projects/*.md',
      sortBy: 'startDate',
      reverse: true,
      limit: 1
    }
  }))
  .use(permalinks({
    pattern: ':title'
  }))
  .use(markdown())
  .use(inplace({
    engine: 'mustache',
    pattern: '*.html',
    directory: 'src/'
  }))
  .use(layouts({
    engine: 'mustache',
    directory: 'src/layouts',
    partials: 'src/partials',
    default: 'layout.html',
    pattern: '**/*.html'
  }))
  .use(sass({
    outputStyle: 'expanded',
    outputDir: 'assets/css/'
  }))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(browserSync({
    server: './build',
    files: ['src/**/*.*']
  }))
  .build(function (error) {
    if (error) {
      console.log(error)
    }
  })
