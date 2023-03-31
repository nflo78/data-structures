var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = {};
  newChild.value = value;
  newChild.children = [];
  _.extend(newChild, treeMethods);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var arrValues = Object.values(this.children);
  var array = []
  var recurse = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].value) {
        array.push(arr[i].value)
      }
      if (arr[i].children.length > 0) {
        recurse(arr[i].children)
      }
    }
    }
    recurse(arrValues)
  if (array.indexOf(target) !== -1) {
    return true
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
