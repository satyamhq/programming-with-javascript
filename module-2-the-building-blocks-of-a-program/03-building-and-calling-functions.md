# Building and Calling Functions

## Overview

This lesson demonstrates how to build (declare) and call (invoke) a function that accepts an array and iterates through it.

## Learning Objectives

By the end of this lesson, you should be able to:
- Understand how a simple function can accept an array and iterate through it

## Step 1: Function Declaration

Let's start by giving our function a name:

```js
function listArrayItems(arr) {
    // ... more code to be added later ...
}
```

We've declared a `listArrayItems` function that accepts a single parameter, `arr` (an array).

## Step 2: Understanding the For Loop Requirements

A for loop needs three pieces of information:

1. **Starting loop counter value** as a temporary variable `i`
2. **Exit condition** (maximum value of `i` above which the loop stops)
3. **How to update** the value of `i` after each loop

### For Loop Configuration

**Starting counter: `i = 0`**
- The first item in an array is at index 0
- This ensures `i` directly corresponds to the index position in the array

**Exit condition: `i < arr.length`**
- Array indices start from zero
- `arr.length` represents the total number of items
- Loop continues as long as `i < arr.length`
- When `i` equals `arr.length`, the condition becomes false and the loop exits
- This ensures each item is processed exactly once

**Example:** For an array with 5 elements (indices 0, 1, 2, 3, 4):
- `arr.length` equals 5
- Loop iterates 5 times
- Stops after the last item (index 4, which is `arr.length - 1`)

**Increment: `i++`**
- Increases `i` by 1 after each loop
- Ensures no items in the array are skipped

## Step 3: Adding the For Loop

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        // ... code pending here ...
        // Right now, there is no code inside the loop's body
        // This means the function currently does nothing
    }
}
```

## Step 4: Outputting Array Items

### Basic Version

Display each array item using `console.log()`:

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]); // display the array item where index equals i
    }
}
```

### Invoking the Function

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); // display all items in the array at once
```

**Output:**
```
red
orange
yellow
green
blue
purple
pink
```

## Step 5: Adding Index Numbers

Display each item with its index:

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```

**Output:**
```
0 'red'
1 'orange'
2 'yellow'
3 'green'
4 'blue'
5 'purple'
6 'pink'
```

## Step 6: Starting Count from 1

To start the count from 1 instead of 0, add 1 to `i`:

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i]);
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```

**Output:**
```
1 'red'
2 'orange'
3 'yellow'
4 'green'
5 'blue'
6 'purple'
7 'pink'
```

## Step 7: Adding Conditional Logic

Add control flow inside the function to handle specific conditions:

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i * 100, "tomato!");
        } else {
            console.log(i * 100, arr[i]);
        }
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```

**Output:**
```
0 'tomato!'
100 'orange'
200 'yellow'
300 'green'
400 'blue'
500 'purple'
600 'pink'
```

This version:
- Checks if the array item equals `'red'`
- If true, displays `"tomato!"` instead
- Multiplies the index by 100 for spacing

## Key Concepts

### Function Declaration (Build)

```js
function functionName(parameter) {
    // Function body
}
```

### Function Invocation (Call)

```js
functionName(argument);
```

### Array Iteration Pattern

```js
for (var i = 0; i < arr.length; i++) {
    // Access each item using arr[i]
}
```

## Summary

### What We Learned

1. How to declare a function that accepts an array parameter
2. How to use a for loop to iterate through an array
3. How to access array items using index notation `arr[i]`
4. How to customize output by manipulating the index
5. How to add conditional logic inside a function

### Important Points

- Array indexing starts at 0
- `arr.length` gives the total number of items
- Loop condition `i < arr.length` ensures all items are processed
- `arr[i]` accesses the item at index `i`
- You can add any logic inside the loop body

### Pattern to Remember

```js
function processArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        // Do something with arr[i]
    }
}
```

This is a fundamental pattern used throughout JavaScript development for processing arrays.
