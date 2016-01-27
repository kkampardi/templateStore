'use_strict'

angular.module('templateStoreApp')

  .controller('IndexController', ['$scope', function($scope){
    console.log("index view :) ");
  }])

  .controller('TemplateDetController', ['$scope', function($scope){
      console.log("Template Details controller :)");
  }])

;
