require '../sass/app.sass'

dependencies = [
  'ui.bootstrap'
  'ui.router'
]

angular.module 'app', dependencies
  .config require './config.coffee'
  .run require './run.coffee'

angular.bootstrap document, ['app']
