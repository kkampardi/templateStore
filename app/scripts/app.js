'use_strict';

angular.module('templateStoreApp', ['ui.router', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })

            // route for the template details page
            .state('app.templatedetails', {
                url:'home/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/templatedetails.html',
                        controller  : 'TemplateDetController'
                    }
                }
            })
            $urlRouterProvider.otherwise('/');
      })
;
