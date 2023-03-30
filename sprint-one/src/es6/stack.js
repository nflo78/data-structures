class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.amount = 0;
    this.storage = {};
  }
  push(value) {
    var vals = Object.values(this.storage)
    vals.push(value)
    for (var i = 0; i < vals.length; i++) {
      this.storage[i] = vals[i]
    }
    this.amount++
  }
  pop() {
    var vals = Object.values(this.storage)
    var popped = vals.pop()
    delete this.storage[vals.length]
    for (var i = 0; i < vals.length; i++) {
      this.storage[i] = vals[i]
    }
    if (this.amount > 0) {
      this.amount--
    }
    return popped
  }
  size() {
    return this.amount
  }

}