'use strict';

//define the node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  addToEnd(value) {
    //this adds to the ends, need to refactor to add to beginning
    let node = new Node(value);
    var current;

    if (this.head == null) {
      this.head = node
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
    }
    current.next = node
    }
    this.size++;
  }


  toString() {
    let current = this.head;
    let returnString = '';
    while(current) {
      returnString = returnString + `{${current.value}}->`
      current=current.next
    }
    returnString = returnString + 'NULL'
    console.log(returnString);
  }
}

const ll = new LinkedList();
    ll.addToEnd(5);
    ll.addToEnd(6);
    ll.addToEnd(10);
    console.log(ll);
    ll.toString();