var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // create array
    var vals = Object.values(storage)
    // [];
    // push value into array
    vals.push(value)
    // [value]
    // assign value to index within storage
    for (var i = 0; i < vals.length; i++) {
      storage[i] = vals[i]
    }
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage)
    var popped = Object.values(storage).pop()
    var popKey = keys.pop()
    delete storage[popKey]
    return popped
  };

  someInstance.size = function() {
    var amount = Object.keys(storage).length
    return amount
  };

  return someInstance;
};
