# Problem Solving Patterns

## Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

### Anagram Problem

```javascript
function validAnagram(string1, string2) {
    const lookup = {};
    for (let i = 0; i < string1.length; i++) {
        lookup[string1[i]] = ++lookup[string1[i]] || 1;
    }

    for (let i = 0; i < string1.length; i++) {
        const letter = string2[i];
        if (!lookup[letter]) return false;
        else lookup[letter] -= 1;
    }
    return true;
}
```

## Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

### Counting Unique Values in an array

```javascript
function countUniqueValues(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i ? ++i : 0;
}
```

### Average Pair

```javascript
function averagePair(arr, target) {
    if (!arr.length) return false;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        if ((arr[start] + arr[end]) / 2 < target) start++;
        else if ((arr[start] + arr[end]) / 2 > target) end--;
        else return true;
    }
    return false;
}
```

### Is Subsequence

```javascript
function isSubsequence(first, second) {
    let i = first.length - 1;
    for (let j = 0, pointer = 0; j < second.length; j++) {
        if (!first[pointer]) break;
        if (first[pointer] === second[j]) {
            pointer++;
            i--;
        }
    }
    return i ? true : false;
}
```

## Sliding Window Pattern

This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

### Finding the maximum sum of a subarray

```javascript
function maxSubSumArray(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    let max = -Infinity;
    for (let i = 0; i < num; i++) maxSum += arr[i];
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
```

## Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously `decrease time complexity`

### Binary Search

```javascript
function search(array, val) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
        if (currentElement < val) min = middle + 1;
        else if (currentElement > val) max = middle - 1;
        else return middle;
    }
    return -1;
}
```

# Recursion

A process (a function) that calls itself

Follows the logic of recurrence relation

# Searching Algorithms

## Linear Search

We iterate every element on our array

**Big O**
`Best Case` is O(1) where we were able to find the element that we are looking for on the spot.

`Worst Case` is O(n) where we need to search the last element in our array

## Binary Search

A much faster form of search (Only works on sorted array)

> Rather than eliminating one element at a time, we eliminate half of the remaining elements at a time

**Big O Notation**
`Best Case` is O(1) where we were able to find the element that we are looking for on the spot;

`Worst Case` is O(logn) where we weren't able to immediately find the element we are looking for

# Sorting Algorithms

Sorting is the process of rearranging the items in a collection so that the are items are in some kind of order.

Examples:

-   Sorting numbers form smallest to largest
-   Sorting names alphabetically
-   Sorting movies based on release year
-   Sorting movies based on revenue

## Bubble Sort

A sorting algorithm where the largest values bubble up to the top

> O(n^2)

## Selection Sort

The opposite of bubble sort, it places small values into sorted position

> O(n^2)

## Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted

## Merge Sort

## Quick Sort

## Radix Sort

# Data Structures

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

### Classes in JavaScript

-   A blueprint for creating objects with pre-defined properties and methods

## Linked Lists

A data structure that contains a head, tail, and length property. It consists of nodes, and each node has a value and a pointer to another node or null

## Singly Linked Lists

Are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required. Arrays contain a built-in index whereas Linked Lists do not.

The idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues.

### Methods

-   push
    -   Add a new node at the end of the list
-   pop
    -   Remove the last node and return that node
-   shift
    -   Remove the first node and return that node
-   unshift
    -   Add a new node at the start of the list
-   get
    -   Get the node at a given index
-   set
    -   Get a node at a given index then change its value
-   insert
    -   Insert a new node at a given index
-   remove
    -   Remove a node at a given index
-   reverse
    -   Reverse all the nodes where the head will be the tail and the head will be the tail

### Time Complexity

| Operation | Big O |
| --------- | ----- |
| Insertion | O(1)  |
| Removal   | O(N)  |
| Searching | O(N)  |
| Access    | O(N)  |

## Doubly Linked Lists

Compared to the singly linked lists, every node in a doubly linked lists contains two pointers corresponding to the next node and the previous node

It consumes more memory than a single linked lists. It has the same methods with a double linked list but the implementation are much faster.

### Time Complexity

| Operation | Big O |
| --------- | ----- |
| Insertion | O(1)  |
| Removal   | O(1)  |
| Searching | O(n)  |
| Access    | O(n)  |

# Stacks

Are abstract data structures that follows the principle of **Last In and First Out**

The last element added to the stack will be the first element removed from the stack

It can implemented using:

-   Arrays
    -   Disadvantage would be is you need to have a dynamic array to implement a stack
-   Linked Lists
    -   Disadvantage would be is that you do not have a random access for things on the stack

## Methods of Stack

| Method     | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| Push O(1)  | You push something at the top of the stack                       |
| Pop O(1)   | You remove something from the top of the stack                   |
| Peek O(1)  | You check the element at the top of the stack                    |
| Empty O(1) | Returns a boolean to determine whether the stack is empty or not |
