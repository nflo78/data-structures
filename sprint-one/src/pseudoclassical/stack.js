var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.amount = 0
};
Stack.prototype.push = function(value) {
  var vals = Object.values(this.storage)
  vals.push(value)
  for (var i = 0; i < vals.length; i++) {
    this.storage[i] = vals[i]
  }
  this.amount++
}
Stack.prototype.pop = function () {
  var vals = Object.values(this.storage)
  var popped = vals.pop()
  delete this.storage[vals.length]
  if (this.amount > 0) {
    this.amount--
  }
  return popped
}
Stack.prototype.size = function () {
  return this.amount
}

