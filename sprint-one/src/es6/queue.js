class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.amount = 0;
    this.storage = {};
  }
  enqueue (value) {
    var vals = Object.values(this.storage)
    vals.push(value)
    for (var i = 0; i < vals.length; i++) {
      this.storage[i] = vals[i]
    }
    this.amount++
  }
  dequeue() {
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
  size() {
    return this.amount
  }
}
