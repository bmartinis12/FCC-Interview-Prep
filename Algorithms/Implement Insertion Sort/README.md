# Implement Insertion Sort #

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

## Examples: ##
  - insertionSort([5, 4, 33, 2, 8]) should return [2, 4, 5, 8, 33]
  - insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]

## Link: ##
  - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort
