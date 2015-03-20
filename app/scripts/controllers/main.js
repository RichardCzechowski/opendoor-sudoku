'use strict';

/**
 * @ngdoc function
 * @name opendoor3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the opendoor3App
 */
angular.module('opendoor3App')
.controller('MainCtrl', function ($scope, SudokuService) {

  $scope.sudoku =[
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
  ];

  $scope.getNumber = function(){
    return new Array(9);
  };

  $scope.check = function(obj, pos){
    if (!obj.value){
      var clss = pos + "Valid" + obj.row;
      $scope[clss] = true;
    }
  };

  $scope.$watch('sudoku', function(newVal, oldVal){
    $scope.check(SudokuService.checkHorizontal(newVal), 'row');
    $scope.check(SudokuService.checkVertical(newVal), 'col');
  }, true);

});
