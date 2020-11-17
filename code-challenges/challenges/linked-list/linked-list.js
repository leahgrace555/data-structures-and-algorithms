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
    this.size++
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

  insertAfter(node,value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === node){
        let node = new Node(value);
        node.next = current.next;
        current.next = node
        break;
      }
      current = current.next;
    }
    this.size++
  }

  insertBefore(nodeToInsertBefore,valueToInsert) {
    let current = this.head;

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
  this.size++
  }

  kthFromEnd(k) {
    let counter = 1;
    let current = this.head;
    let placeToReturn = this.size-1 -k;
    let kthFromEndValue = null;
    while(counter<=this.size) {
      if(counter === placeToReturn) {
        kthFromEndValue = current.value;
        break;
      } else {
        current = current.next;
        counter++;
      }
    }
    return kthFromEndValue;
  }


  toString() {
    let current = this.head;
    let returnString = '';
    while(current) {
      returnString = returnString + `{${current.value}}->`
      current=current.next
    }
    returnString = returnString + 'NULL'
    return returnString;
  }
}

// function zipList(listOne,listTwo) {
//   let zippedList = new LinkedList();
//   zippedList.current = zippedList.head;
//   listOne.current = listOne.head;
//   listTwo.current = listTwo.head;

//   while(listOne && listTwo) {
    
//     if(listOne.current !==null || listTwo.current !==null) {
//       zippedList.addToEnd(listTwo.current.value);
//       zippedList.addToEnd(listOne.current.value);
//       listTwo.current = listTwo.current.next;
//       listOne.current = listOne.current.next;
//     }
//     else if (listOne.current !== null && listTwo.current === null) {
//       zippedList.addToEnd(listOne.current.value);
//       listOne.current = listOne.current.next;
//     } else if (listOne.current == null || listTwo.current != null) {
//       zippedList.addToEnd(listTwo.current.value);
//       listTwo.current = listTwo.current.next;
//     }
//     else {
//       listOne.current = listOne.current.next;
//       listTwo.current = listTwo.current.next
//     }
//   }
//   return zippedList.head;
// }

// const ll = new LinkedList();
//     ll.addToEnd(5);
//     ll.addToEnd(6);
//     ll.addToEnd(10);
//     ll.addToFront(11);
    //ll.addToFront(7)
    //ll.includes(7);
   // console.log(ll);
  // ll.insertAfter(6,30000);
  //  ll.insertBefore(6,46665);
  //  ll.toString();
   
  //  ll.insertBefore(753,60)
  //  ll.toString()
   //console.log(ll.includes(10));
   //console.log(ll.includes(10000));
  //  console.log(ll.size);

 //ll.kthFromEnd(4);
//  console.log(ll.kthFromEnd(2));
//  console.log(ll.kthFromEnd(4));

//  let ll2 = new LinkedList();
//  ll2.addToEnd(3);
//  ll2.addToEnd(7);
//  ll2.addToEnd(5);
//  ll2.addToEnd(9);


//  console.log(ll.toString());
//  console.log(ll2.toString());

//  zipList(ll,ll2);

module.exports = LinkedList;
//module.exports = Node;
 