var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.amount = 0
};

Queue.prototype.enqueue = function (value) {
  var vals = Object.values(this.storage)
  vals.push(value)
  for (var i = 0; i < vals.length; i++) {
    this.storage[i] = vals[i]
  }
  this.amount++
}
Queue.prototype.dequeue = function () {
  var vals = Object.values(this.storage)
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
Queue.prototype.size = function () {
  return this.amount
}


