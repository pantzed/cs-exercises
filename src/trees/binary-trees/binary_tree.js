'use strict';

// http://visualgo.net/bst.html

function BinTree() {
 this.root = null;
}

function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

// NOTE - Duplicates are excluded in our tree!

BinTree.prototype.insertIteratively = function(value) {

  if (typeof(value) !== "number" || isNaN(value)){
    return 'Please insert a number';
  }

  if (!this.root) {
    this.root = new Node(value);
    return;
  }

  let currentNode = this.root;
  let newNode = new Node(value); 

  while (currentNode) {
    if (value === currentNode.value) {
      currentNode = false;
      break;
    }
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      }
      else {
        currentNode = currentNode.left;
      }
    }
    else {
      if (!currentNode.right) {
          currentNode.right = newNode;
          break;
      }
      else {
          currentNode = currentNode.right;
      }
    }
  }
};

BinTree.prototype.insertRecursively = function(value, current) {

  if (typeof(value) !== "number" || isNaN(value)){
    return 'Please insert a number';
  }

  else {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    if (!current) {
      current = this.root;
    }

    if (newNode.value === current.value) {
      return 'duplicate!';
    }

    if (newNode.value < current.value) {
      if (!current.left) {
        current.left = newNode;
      }
      else {
        return this.insertRecursively(value, current.left);
      }
    }
    else if (newNode.value > current.value) {
      if (!current.right) {
        current.right = newNode;
      }
      else {
        return this.insertRecursively(value, current.right);
      }
    }
  } 

};

BinTree.prototype.containsIteratively = function(value) {

  if (typeof(value) !== "number" || isNaN(value)){
    return 'Please insert a number';
  }

  else {
    let node = this.root;
    while(node) {
      if (value === node.value) {
        return true;
      }
      else if (value > node.value) {
        node = node.right
      }
      else if (value < node.value) {
        node = node.left;
      }
    }
    return false;
  }
};

BinTree.prototype.containsRecursively = function(value, current) {

    if (!this.root) {
      return false;
    }

    if (!current) {
      current = this.root;
    }

    if (value === current.value) {
      return true;
    }
    else {
      if (value < current.value) {
        if (!current.left){
          return false;
        }
        else {
          return this.containsRecursively(value, current.left);
        }
      }
      if (value > current.value) {
        if (!current.right) {
          return false;
        }
        else {
          return this.containsRecursively(value, current.right);
        }
      }
    }
};

BinTree.prototype.breadthFirstSearch = function() {
  if (!this.root) {
    return [];
  }
  else {
    let currentNode = this.root;
    let queue = [];
    let values = [];
    
    if (currentNode) {
      queue.push(currentNode);
    }

    while (queue.length > 0){
      currentNode = queue.shift()
        if (currentNode.left){
          queue.push(currentNode.left);
        }
        if (currentNode.right){
          queue.push(currentNode.right);
        }
      values.push(currentNode.value);
    }
  return values;
  }
};

// DEPTH FIRST SEARCH (Pre / In / Post Order)

// http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html

// HINT - you can evaluate a JS expression conditionally by adding a truthy / falsey statement and // then attaching a && along with the expression

// take a look at this code for an example

// function sayHi() {
//   return 'hey!'
// }

// what does true && sayHi() return?
// what about false && sayHi() return?

// visualizing the call stack using the chrome dev tools or just drawing it will help a lot with this!

BinTree.prototype.DFSPreOrder = function() {
  if (!this.root) {
    return [];
  }

  else {
    let currentNode = this.root;
    let stack = [currentNode];
    let values = [];

    while (stack.length > 0) {
      let currentNode = stack.pop();
      values.push(currentNode.value)
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left){
        stack.push(currentNode.left);
      }
    }
    return values;
  }
};

BinTree.prototype.DFSInOrder = function() {
  if (!this.root) {
    return [];
  }
  else {
    let currentNode = this.root;
    let stack = [];
    let values = [];
    do {

      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      values.push(currentNode.value);
      currentNode = currentNode.right;

    } while (stack.length > 0 || currentNode !== null);

    return values;
  }
};

BinTree.prototype.DFSPostOrder = function() {
  if (!this.root) {
    return [];
  }
  else {
    let currentNode = this.root;
    let stack = [];
    let values = [];
    do {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left || currentNode.right;
      }

      currentNode = stack.pop();
      values.push(currentNode.value);
      currentNode = stack[stack.length - 1].right;

    } while (currentNode !== null);

    while (stack.length > 1){
      values.push(stack.pop().value);
    }

    stack = [];
    currentNode = this.root;

    do {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.right || currentNode.left;
      }

      currentNode = stack.pop();
      values.push(currentNode.value);
      currentNode = stack[stack.length - 1].left;

    } while (currentNode !== null);

    while (stack.length > 0){
      values.push(stack.pop().value);
    }

    return values;
  }
};

BinTree.prototype.size = function() {
  if (!this.root) {
    return [];
  }

  else {
    let currentNode = this.root;
    let stack = [currentNode];
    let values = [];

    while (stack.length > 0) {
      let workingNode = stack.pop();
      values.push(workingNode.value)
      if (workingNode.right) {
        stack.push(workingNode.right);
      }
      if (workingNode.left){
        stack.push(workingNode.left);
      }
    }
    return values.length;
  }
};

BinTree.prototype.findLowest = function() {
  if (!this.root) {
    return [];
  }
  else {
    let currentNode = this.root;
    let stack = [];
    let values = [];
    do {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left || currentNode.right;
      }

      currentNode = stack.pop();
      values.push(currentNode.value);
      currentNode = stack[stack.length - 1].right;

    } while (currentNode !== null);

    while (stack.length > 0){
      values.push(stack.pop().value);
    }

    return Math.min(...values)
  }
};

BinTree.prototype.findHighest = function() {
  if (!this.root) {
    return [];
  }
  else {
    let currentNode = this.root;
    let stack = [];
    let values = [];

    do {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.right || currentNode.left;
      }

      currentNode = stack.pop();
      values.push(currentNode.value);
      currentNode = stack[stack.length - 1].left;

    } while (currentNode !== null);

    while (stack.length > 0){
      values.push(stack.pop().value);
    }

    return Math.max(...values);
  }
};

// private helper method for remove
BinTree.prototype._countChildren = function(node) {
  if (!node) {
    return 0;
  }

  else {
    let currentNode = node;
    let queue = [];
    let count = [];
    
    if (!currentNode.right && !currentNode.left) {
      return 0;
    }
    else {
      currentNode = (currentNode.right ? currentNode.right : currentNode.left);
      queue.push(currentNode);
    }

    while (queue.length > 0){
      currentNode = queue.shift()
        if (currentNode.left){
          queue.push(currentNode.left);
        }
        if (currentNode.right){
          queue.push(currentNode.right);
        }
      count.push(currentNode.value);
    }
  return count.length;
  }
};

BinTree.prototype.remove = function(value) {

};

module.exports = {
  BinTree: BinTree,
  Node: Node
};
