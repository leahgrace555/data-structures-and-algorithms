# Challenge 31: Fist repeated word

## requirements:
- write a function that finds and returns the first repeated word in a lengthy string

## Approach a efficiency:
- split the string at the spaces
- loop over the split string storing the words in a hash table
- if the hash table does not include the current word, add it
- the the has table includes the current word, return the current word

## Solution: