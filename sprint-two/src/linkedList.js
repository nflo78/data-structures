var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head
    } else {
    list.tail.next = Node(value);
    list.tail = Node(value)
    }
  };

  list.removeHead = function() {
    var currHead = list.head.value;
    list.head = list.head.next;
    return currHead;
  };

  list.contains = function(target) {
    var arrValues = Object.values(list)
    console.log(arrValues)
    for (var i = 0; i < arrValues.length; i++) {
      if (arrValues[i].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
