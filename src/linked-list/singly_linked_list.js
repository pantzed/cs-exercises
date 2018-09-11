'use strict';

function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.__getNodeAt = function(index) {
  if (this.length === 0) {
    return null;
  }
  else {
    let node = this.head;
    let count = 0;
    while (count !== index){
      node = node.next;
      count++;
    }
    return node.val;
  }
};

SinglyLinkedList.prototype.push = function(val) {

  if (this.length === 0){
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
    return this;
  }

  else {
    let node = this.head;
    for (let i=0; i<=this.length; i++) {
      if (node.next === null) {
        node.next = new Node(val);
        this.tail = node.next;
        this.length++;
        return this;
      }
      else {
        node = node.next;
      }
    }
  }

  return this;
};

SinglyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

SinglyLinkedList.prototype.pop = function() {

  if (this.length === 0){
    return null;
  }

  let node = this.head;
  let prevNode = this.head;

  if (node.next === null){
    this.clear();
    return node.val;
  }
  else {
    prevNode = node;
    node = node.next;
    for (let i=0; i<=this.length; i++) {
      if (node.next === null) {
        this.tail = prevNode;
        this.tail.next = null;
        this.length--;
        return node.val;
      }
      prevNode = node;
      node = node.next;
    }
  }
};

SinglyLinkedList.prototype.unshift = function(val) {
  if (this.length === 0) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length ++;
    return this;
  }
  else {
    let nodes = this.head;
    this.head = new Node(val);
    this.head.next = nodes;
    this.length++;
    return this;
  }
};

SinglyLinkedList.prototype.shift = function() {
  if (!this.head) {
    return null
  }
  else {
    let newHead = this.head.next;
    let shift = this.head;
    this.head = newHead;
    this.length--;
    return shift.val;
  }
};

SinglyLinkedList.prototype.get = function(index) {
  if (!this.head) {
    return null;
  }
  else if (index > this.length - 1) {
    return null;
  }
  else {
    let node = this.head;
    for (let i=0; i<index; i++) {
      node = node.next;
    }
    return node.val;
  }
};

SinglyLinkedList.prototype.set = function(index, val) {
  if (!this.head) {
    return null;
  }
  else {
    let node = this.head;
    for (let i=0; i<index; i++) {
      node = node.next;
    }
    node.val = val;
    return this;
  }
};


SinglyLinkedList.prototype.remove = function(index) {
  let nodeValue = null;
  if (this.length === 1){
    nodeValue = this.head.val;
    this.head = null;
    this.next = null;
    this.length = 0;
    return nodeValue;
  }
  else {
    let node = this.head;
    let nextNode = this.head.next;
    let prevNode = null;
    for (let i=0; i<index; i++){
      prevNode = node;
      node = node.next;
      nextNode = node.next;
    }
    prevNode.next = nextNode;
    this.length--;
    return node.val;
  }
};

SinglyLinkedList.prototype.reverse = function () {
  if (!this.head){
    return null;
  }
  else if (this.length === 1) {
    return this.head.val;
  }
  else {
    let prevNode = null;
    let node = this.head;
    let nextNode = this.head;
    let tail = null;
    while (nextNode !== null){
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }
    this.head = this.tail;
    this.tail = tail;
    return this;
  }
};

SinglyLinkedList.prototype.reverseR = function () {
  if (this.head.next === null){
    return this;
  }
  else {
    let node = this.head;
    for (let i=0; i<this.length-2; i++){
      node = node.next;
      this.tail = node.next;
    }
    node.next = null;
    console.log(node);
    this.tail.next = node;
    this.length--;
    return this.reverseR();
  }
};

module.exports = SinglyLinkedList;
