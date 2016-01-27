'use strict';

angular.module('templateStoreApp')
        .constant("baseURL", "http://localhost:3000/")

        .service('templateFactory',[ '$http', 'baseURL', function($http, $baseURL) {
              this.getTemplates = function(){
                return $http.get($baseURL+"templates");
              };
        }])
