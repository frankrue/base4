### @ngInject ###
module.exports = ($stateProvider) ->

  $stateProvider

    .state 'dashboard',
      url: '/'
      template: require '../pug/views/dashboard.pug'
      controller: require './controllers/dashboard.coffee'
      controllerAs: 'vm'

    .state 'otherwise',
      url: '*path'
      template: ''
      controller: ($state) ->
        $state.go 'dashboard'
