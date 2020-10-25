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

  addToFront(value) {
    let node = new Node(value);
    if(this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
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

  includes(value) {
    console.log(this.head);
    let current = this.head;
    while(current) {
      if(current.value === value) {
        console.log('its a match');
        return true;
      } 
      current = current.next;
    }
    return false;
  }

  // insertBefore(node,value){
  //   let current = this.head;

  //   while(current.value !== null) {
  //     console.log('hello')
  //   }
  // }

  insertAfter(node,value) {
    let current = this.head;
    console.log(current.value);

    while (current !== null) {
      if (current.value === node){
        let node = new Node(value);
        node.next = current.next;
        current.next = node
        break;
      }
      current = current.next;
    }
  }

  insertBefore(nodeToInsertBefore,valueToInsert) {
    let current = this.head;
    console.log(current.next.value);

    if(nodeToInsertBefore===this.head.value) {
      this.addToFront(valueToInsert);
    } else if(!this.includes(nodeToInsertBefore)) {
        console.log('This node does not exist in the linked list')
    } else {

    while(current !== null) {
      if(current.next.value === nodeToInsertBefore) {
        let node = new Node(valueToInsert);
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }
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
    ll.addToFront(11);
    //ll.addToFront(7)
    //ll.includes(7);
   // console.log(ll);
  ll.insertAfter(6,30000);
   ll.insertBefore(6,46665);
   ll.toString();
   
   ll.insertBefore(753,60)
   ll.toString()
   //console.log(ll.includes(10));
   //console.log(ll.includes(10000));


   