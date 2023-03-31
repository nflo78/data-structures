

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var keys = Object.keys(this);
  this[keys.length] = {value: node, edge: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var arrValues = Object.values(this);

  for (var i = 0; i < arrValues.length; i++) {
    if (arrValues[i].value === node) {
      return true;
      }
    }
    return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var keys = Object.keys(this);
  var vals = Object.values(this);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i].value === node) {
      delete this[keys[i]];
    }
    if (vals[i].edge.indexOf(node) !== -1) {
      this[i].edge.splice(this[i].edge.indexOf(node), 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var vals = Object.values(this);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i].value === fromNode) {
      if (vals[i].edge.indexOf(toNode) !== -1) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var vals = Object.values(this);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i].value === fromNode) {
      this[i].edge.push(toNode);
    }
    if (vals[i].value === toNode) {
      this[i].edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var vals = Object.values(this);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i].value === fromNode) {
      this[i].edge.splice(this[i].edge.indexOf(fromNode), 1);
    }
    if (vals[i].value === toNode) {
      this[i].edge.splice(this[i].edge.indexOf(toNode), 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var vals = Object.values(this);
  var keys = Object.keys(this);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i].value) {
      cb(this[i].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

