var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)
  someInstance.amount = 0
  someInstance.storage = {}
  return someInstance
};

var stackMethods = {};

stackMethods.push = function (value) {
  var vals = Object.values(this.storage)
  vals.push(value)
  for (var i = 0; i < vals.length; i++) {
    this.storage[i] = vals[i]
  }
  this.amount++
}

stackMethods.pop = function () {
  var vals = Object.values(this.storage)
  delete this.storage[vals.length-1]
  var popped = vals.pop()
  if (this.amount > 0) {
    this.amount--
  }
  return popped
}

stackMethods.size = function () {
  return this.amount;
}

