var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var vals = Object.values(storage)
    vals.push(value)
    for (var i = 0; i < vals.length; i++) {
      storage[i] = vals[i]
    }
  };

  someInstance.dequeue = function() {
    var vals = Object.values(storage)
    var shifted = vals.shift()
    for (var i = 0; i < vals.length; i++) {
      storage[i] = vals[i]
    }
    delete storage[vals.length]
    return shifted
  };

  someInstance.size = function() {
    var amount = Object.keys(storage).length
    return amount
  };

  return someInstance;
};
