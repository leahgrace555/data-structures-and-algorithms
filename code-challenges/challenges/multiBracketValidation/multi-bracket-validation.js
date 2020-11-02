'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js');

function bracketValidation(string) {
  // validates whether the brackets in a string are balanced
   
    let bracketStack = new Stack();
console.log(string.length)
    for (let i = 0; i < string.length; i++) {
      if(string[i] === '[' || string[i] === '(' || string[i] === '{') {
        bracketStack.push(string[i])
      } 
            if(!bracketStack.top) {
              return false;
            }
      else if(string[i] === ']' || string[i] === ')' || string[i] === '}') {
        if((string[i] === ']' && bracketStack.top.value === '[' )|| (string[i] === '}' && bracketStack.top.value === '{' )|| (string[i] === ')' && bracketStack.top.value === '(')) {
          bracketStack.pop();
        }
        else {
          return false;
       } 
      }
    }
    if(bracketStack.top) {
      return false;
    }
    return true;
}

console.log('BRACKET VALIDATION:')
console.log(bracketValidation('{)'));