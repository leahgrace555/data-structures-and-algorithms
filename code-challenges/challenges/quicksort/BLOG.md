# Quick Sort Algorithm:

The quick sort algorithm

## Pseudocode:

````
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
````

## Process: 

![quicksort illustration](./IMG_0723.jpg)

Take this array as an example: 
````
let arr = [8,4,23,42,16,15];
````
### First pass: 
- assigns pivot to the rigth most value (15)
- iterates over the array
- 8 and 4 are pushed to the left array while 23,42,and 16 are pushed to the right array
- the function is called recursively on an array that consists of the right, pivot and left as elements

### second pass: the left array
- the pivot is 4
- 8
