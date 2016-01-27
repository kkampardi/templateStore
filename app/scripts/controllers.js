'use_strict';

angular.module('templateStoreApp')

  .controller('IndexController', ['$scope', '$http', function($scope, $http){
    console.log("Template Controller");
   	$http.get('json/templates.json').success(function(data){
      		$scope.templates = data;
          console.log($scope.templates);
      	});
    }])

  .controller('TemplateDetController', ['$scope', function($scope){
        console.log("Template Details controller :)");
    }])
  ;
