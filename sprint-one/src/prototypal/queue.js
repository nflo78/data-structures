var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods)
  someInstance.storage = {};
  someInstance.amount = 0
  return someInstance
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  var vals = Object.values(this.storage)
  vals.push(value)
  for (var i = 0; i < vals.length; i++) {
    this.storage[i] = vals[i]
  }
  this.amount++
}

queueMethods.dequeue = function () {
  var vals = Object.values(this.storage)
  var keys = Object.keys(this.storage)
  var shifted = vals.shift()
  delete this.storage[vals.length]
  for (var i = 0; i < vals.length; i++) {
    this.storage[i] = vals[i]
  }
  if (this.amount > 0) {
    this.amount--
  }
  return shifted
}

queueMethods.size = function () {
  return this.amount
}

