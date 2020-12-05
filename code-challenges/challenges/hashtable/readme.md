# Challenge 31: Fist repeated word

## requirements:
- write a function that finds and returns the first repeated word in a lengthy string

## Approach a efficiency:
- split the string at the spaces
- loop over the split string storing the words in a hash table
- if the hash table does not include the current word, add it
- the the has table includes the current word, return the current word

## Solution:

![whiteboard](img.png)

# Challenge 33: Left Join

## Requirements:
- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic. 

## Solution:
![whiteboard](./IMG_0750.PNG)