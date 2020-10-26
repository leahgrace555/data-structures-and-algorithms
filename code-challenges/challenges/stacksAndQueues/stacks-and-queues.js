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

class Queue {
  constructor() {
    this.front = 0;

  }

  enqueue(itemtoQueue) {
    //adds a new node with the value to the back of the queue

  }

  dequeue() {
    //removes the node from the front of the queue and does not take any arguements
    //should raise na exception when called on an empty queue
  }

  peek() {
    //does not take any arguements
    //returns the value at the front of the queue without removing it
  }

  isEmpty() {
    //does not take any arguements
    //returns a boolean dependign on if the queue is empty or not
  }
}