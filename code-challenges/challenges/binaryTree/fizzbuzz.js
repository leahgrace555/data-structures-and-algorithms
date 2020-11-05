'use strict'; 

class Node {

  constructor() {
    this.value = value;
    this.parent = null;
    this.children = [];
  }

}

class Tree {

  constructor() {

  }

  preOrder(node) {

    let currentNode = !node ? this.root : node;
    if(currentNode) {
      //call fizzbuzz?
    }

  
  }


  add(node, childrenArr) {
    //theoretical function that adds a new node to the k-ary tree since jacob said we didn't need to make a tree for this challenge
    console.log(`added new node with value ${node.value}`);
  }

}

function fizzBuzzTree (kAryTree) {
  // will need to traverse the tree and create a new one?

}

function fizzbuzz(value) {
  let newNodeValue = null;
  if(value % 3 === 0 && value % 5 === 0 ) {
    newNodeValue = 'fizzbuzz';
  } else if(value % 3 === 0) {
    newNodeValue = 'fizz';
  }

}