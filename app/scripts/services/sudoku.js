angular.module('opendoor3App')
.service('SudokuService', function(){

  var isUnique = function(row){
    var obj = {};
    for (var i = 0; i<row.length; i++){
      if (obj.hasOwnProperty(row[i]) && row[i] != null){
        return false;
      }
      else{
        obj[row[i]] = null;
      }
    }
    return true;
  };

  var checkHorizontal = function(row){
    for (var k = 0; k < row.length; k++){
      var check = isUnique(row[k]);
      if (!check){
        return {value: false, row: k};
      }
    }
    return {value: true, row: null};
  };

  var checkVertical = function(row){
    var arr = [];
    for(var j = 0; j < row.length; j++){
      arr.push([]);
      for (var l = 0; l < row[j].length; l++){
        arr[j].push(row[l][j]);
      }
    }
    return checkHorizontal(arr);
  };

  var checkBox = function(){

  };

  var obj = {
    checkHorizontal: checkHorizontal,
    checkVertical: checkVertical
  }

  return obj;
});
