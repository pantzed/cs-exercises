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
  function recurse(node) {
    if (node.right === null && node.left === null) {
      return [];
    }
    else {
      return recurse()
    }
  }
  let node = this.root;
  let arr = new Array;
  return recurse(node, arr);
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

};

BinTree.prototype.DFSInOrder = function() {
  // function recurse(node, arr) {
  //   if (node) {
  //     arr.unshift(node.value);
  //     if (node.left) {
  //       return recurse(node.left, arr);
  //     }
  //     else if (node.right) {
  //       return recurse(node.right, arr);
  //     }
  //     else {
  //       return arr;
  //     }
  //   }
  // }
  // let node = this.root;
  // let arr = new Array;
  // return recurse(node, arr);
};

BinTree.prototype.DFSPostOrder = function() {

};

BinTree.prototype.size = function() {

};

BinTree.prototype.findLowest = function() {

};

BinTree.prototype.findHighest = function() {

};

// private helper method for remove
BinTree.prototype._countChildren = function(node) {

};

BinTree.prototype.remove = function(value) {

};

module.exports = {
  BinTree: BinTree,
  Node: Node
};
