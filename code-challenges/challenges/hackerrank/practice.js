'use strict';

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

}


function reverseLinkedList(head) {
  //need to traverse and add to new linked list at the front

  let  reverseList = new LinkedList();
  let current = head;
  while(current) {

    //get the value
    if (!reverseList.head) {
      let node = new Node(current.value);
      reverseList.head = node;
    } else if(reverseList.head) {
      let node = new Node(current.value);
      node.next = reverseList.head;
      reverseList.head = node;
    }

    current=current.next;

  }

  return reverseList;

}




