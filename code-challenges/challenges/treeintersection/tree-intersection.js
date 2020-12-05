'use strict';

function treeIntersection(rootOne,rootTwo){
  let intersection = [];

  if(!rootOne || !rootTwo){
    return intersection;
  }
  let treeOneArr = [];
  let treeTwoArr = [];

  treeOneArr = treeHelper(rootOne, treeOneArr);
  treeTwoArr = treeHelper(rootTwo, treeTwoArr);

  for(let i =0; i< treeTwoArr.length; i++) {
    if(treeOneArr.includes(treeTwoArr[i])) {
      intersection.push(treeTwoArr[i])
    }
  }

  return intersection;
}

function treeHelper(rootOne, arr) {

  arr.push(rootOne.value)

  if(rootOne.leftChild) {
    treeHelper(rootOne.leftChild, arr)
  }

  if(rootOne.rightChild) {
    treeHelper(rootOne.rightChild, arr)
  }

  return arr;
}

module.exports = treeIntersection;
