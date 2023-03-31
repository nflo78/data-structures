var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var keys = Object.keys(this._storage);
  this._storage[keys.length] = item;
};

setPrototype.contains = function(item) {
  var storage = this._storage;
  for (var key in storage) {
    if (storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var keys = Object.keys(this._storage);
  var storage = this._storage;
  for (var key in storage) {
    if (storage[key] === item) {
      delete storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
