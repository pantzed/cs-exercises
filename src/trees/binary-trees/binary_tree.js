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

BinTree.prototype.insertRecursively = function(value) {

  let newNode = new Node(value);

  function recursively(node) {
    if (value === node.value) {
      return 'duplicate!';
    }
    else {
      if (value < node.value && node.left === null) {
        node.left = newNode;
        return;
      }
      if (value < node.value) {
        return recursively(node.left);
      }
      if (value > node.value && node.right === null) {
        node.right = newNode;
        return;
      }
      if (value > node.value) {
        return recursively(node.right);
      }
    }
  }

  if (typeof(value) !== "number" || isNaN(value)){
    return 'Please insert a number';
  }

  else if (!this.root) {
    this.root = new Node(value);
    return;
  } 

  else {
    return recursively(this.root);
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

BinTree.prototype.containsRecursively = function(value) {

  function recurse(node) {
    if (!node) {
      return false;
    }
    else if (value === node.value) {
      return true;
    }
    else if (value > node.value) {
      return recurse(node.right);
    }
    else if (value < node.value) {
      return recurse(node.left);
    }
  }

  if (typeof(value) !== "number" || isNaN(value)){
    return 'Please insert a number';
  }

  else {
    return recurse(this.root);
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
      let workingNode = queue.shift()
        if (workingNode.left){
          queue.push(workingNode.left);
        }
        if (workingNode.right){
          queue.push(workingNode.right);
        }
      values.push(workingNode.value);
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
      let workingNode = stack.pop();
      values.push(workingNode.value)
      if (workingNode.right) {
        stack.push(workingNode.right);
      }
      if (workingNode.left){
        stack.push(workingNode.left);
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

      // Traverse down the left-most branch
      // add nodes to the stack until null becomes currentNode
      // pop from the stack and add it's value to values
      // add currentNode value to the stack when null is reached
      // remove that node from the stack
      // check if current node has a right branch
      // if it does, right branch becomes current branch
      // else the last node in the stack becomes current branch
      /*

      console.log('**** STACK: ' + currentNode);
      console.log('**** NODE: ' + currentNode.value);

      */

      while (currentNode){
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      values.push(currentNode.value);
      currentNode = currentNode.right;
      

    } while (stack.length > 0);

    return values;
  }
};

BinTree.prototype.DFSPostOrder = function() {

};

// BinTree.prototype.size = function() {

// };

// BinTree.prototype.findLowest = function() {

// };

// BinTree.prototype.findHighest = function() {

// };

// // private helper method for remove
// BinTree.prototype._countChildren = function(node) {

// };

// BinTree.prototype.remove = function(value) {

// };

module.exports = {
  BinTree: BinTree,
  Node: Node
};
