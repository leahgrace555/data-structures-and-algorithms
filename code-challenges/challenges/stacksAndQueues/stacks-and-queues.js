'use strict';

class Node {
  constructor(value,pointer) {
    this.value = value;
    this.next = pointer;
  }
}

class Stack {
  constructor() {
    this.top = 0;
    this.items = [];
  }

  push(itemToAdd) {
    // adds an item to the top of the stack
  }

  pop() {
  // does not take in any arguements
  //removes the node form the top of the stack

  }

  peek() {
    //returns the value of the node at the stop of the stack withhout removing it
  }

  isEmpty() {
    //returns boolean indicating if the stack is empty
    //does not take in ay arguements

  }

}