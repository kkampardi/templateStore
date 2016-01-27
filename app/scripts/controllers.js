'use_strict'

angular.module('templateStoreApp')

  .controller('IndexController', ['$scope', 'templateFactory',
  function($scope, templateFactory){
    console.log("index view :) ");
    $scope.message = "Loading ...";
    templateFactory.getTemplates()
    .then(
          function(response){
            $scope.templates = response.data;
          }
        );
  }])

  .controller('TemplateDetController', ['$scope', function($scope){
      console.log("Template Details controller :)");
    }])
;
