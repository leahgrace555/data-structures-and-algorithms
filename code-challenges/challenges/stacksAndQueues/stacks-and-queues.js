'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(itemToAdd) {
    // adds an item to the top of the stack
    const item = new Node(itemToAdd);
    item.next = this.top;
    this.top = item;
  }

  pop() {
  // does not take in any arguements
  //removes the node form the top of the stack
  let temp = this.top;
  this.top = temp.next;
  temp.next = null
  return temp.value;

  }

  peek() {
    //returns the value of the node at the stop of the stack withhout removing it
    if (!this.isEmpty()) {
      return this.top.value;
    }
  }

  isEmpty() {
    //returns boolean indicating if the stack is empty
    //does not take in ay arguements
    if(this.top === null) {
      return true;
    } else {
      return false;
    }

  }

}

const testStack = new Stack();

// console.log(testStack.isEmpty());

// testStack.push(1);
// testStack.push(2);
// testStack.push(3);
// testStack.push(4);
// testStack.pop();

// console.log(testStack.peek());

// console.log(testStack.isEmpty());

class Queue {
  constructor() {
    this.front = null;
    this.rear = null

  }

  enqueue(itemtoQueue) {
    //adds a new node with the value to the back of the queue
    const newNode = new Node(itemtoQueue);

    if(this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

  }

  dequeue() {
    //removes the node from the front of the queue and does not take any arguements
    //should raise na exception when called on an empty queue
    if(this.front === null) {
      return null;
    }
    let itemToDequeue = this.front.value;
    this.front = this.front.next;
    return itemToDequeue;
  }

  peek() {
    //does not take any arguements
    //returns the value at the front of the queue without removing it
    if(this.front === null) {
      return null;
    } else { return this.front.value}
  }

  isEmpty() {
    //does not take any arguements
    //returns a boolean dependign on if the queue is empty or not
    if(this.front === null && this.rear === null) {
      return true;
    } else { return false; }
  }
}

class PseudoQueue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
    this.size = 0
  }

  enqueue(itemToEnqueue) {
    this.enqueueStack.push(itemToEnqueue);
    this.size++;
  }

  dequeue() {
    
  }
}

let testQueue = new Queue();
console.log(testQueue.isEmpty());

let testPseudoQueue = new PseudoQueue();
testPseudoQueue.enqueue(27);
console.log(testPseudoQueue);


testQueue.enqueue(565)
testQueue.enqueue(5)
testQueue.enqueue(6)
testQueue.enqueue(5493)

console.log(testQueue.peek());
console.log(testQueue.isEmpty());
