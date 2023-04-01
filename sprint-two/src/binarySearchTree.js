var BinarySearchTree = function(value) {
  var storage = {value: value};
  _.extend(storage, binaryMethods)
  return storage
};

var binaryMethods = {};

binaryMethods.insert = function (value) {
  var recurse = function (branch) {
    if (value > branch.value && branch.right === undefined) {
      branch.right = {}
      branch.right.value = value
    }
    if (value < branch.value && branch.left === undefined) {
      branch.left = {}
      branch.left.value = value
    }
    if (value > branch.value && branch.right) {
      recurse(branch.right)
    }
    if (value < branch.value && branch.left) {
      recurse(branch.left)
    }
  }
  recurse(this)
}

binaryMethods.contains = function (target) {
  var array = []
  var recurse = function (branch) {
    array.push(branch.value)
    if (branch.right) {
      recurse(branch.right)
    }
    if (branch.left) {
      recurse(branch.left)
    }
  }
  recurse(this)
  if (array.indexOf(target) !== -1) {
    return true
  } else {
    return false;
  }
}

binaryMethods.depthFirstLog = function (cb) {
  var recurse = function (branch) {
    cb(branch.value)
    if (branch.left) {
      recurse(branch.left)
    }
    if (branch.right) {
      recurse(branch.right)
    }
  }
  recurse(this)
}
/*
 * Complexity: What is the time complexity of the above functions?
 */