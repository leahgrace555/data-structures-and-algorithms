'use strict';

//define the node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }

}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  add(value) {
    //this adds to the ends, need to refactor to add to beginning
    let node = new Node(value);
    let current;

    if (this.head ==null) {
      this.head = node
    } else {
      current = this.head;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node
  }

  toString() {
    let current = this.head;
    let returnString = '';
    while(current.next) {

    }
  }
}