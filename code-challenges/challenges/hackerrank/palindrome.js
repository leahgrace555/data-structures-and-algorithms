const { Stack,Queue } = require('../stacksAndQueues/stacks-and-queues.js');

//use a queue and a stack to check if a string is a palindrome. 

//////// kayak
/////// ghjkkjhg

function palindromeChecker(string) {
  let forwards = new Queue();
  let backwards = new Stack();

  for(let i = 0; i < string.length; i++) {
    forwards.enqueue(string[i]);
    backwards.push(string[i]);
  }

  for(let i=0; i < string.length; i++) {
    let pop = backwards.pop();
    let dequeue = forwards.dequeue();

    if(pop!==dequeue) {
      return false;
    }
  }

  return true;
}