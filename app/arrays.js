if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                return i;
            };
        }
        return -1;
    },

    sum : function(arr) {
        var total = 0;
        for(var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                arr.splice(i,1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                arr.splice(i,1);
                i--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop()
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item){
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var dupes = [];
        var sorted = arr.sort();
        for(var i = 0; i < sorted.length - 1; i++) {
            if(sorted[i] === sorted[i + 1] && dupes[dupes.length - 1] != sorted[i + 1]) {
                dupes.push(sorted[i + 1])
            }
        }
        return dupes;
    },

    square : function(arr) {
        for(var i = 0; i < arr.length; i++) {
            arr[i] = arr[i]*arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === target) {
                result.push(i);
            }
        }
      return result;
    }
  };
});
