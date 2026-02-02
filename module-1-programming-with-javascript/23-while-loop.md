# While Loop

## Overview

The **while loop** is another type of loop in JavaScript. While it's similar to the `for` loop, they're not exactly the same.

In this lesson, you'll learn how to use the while loop to code a countdown to a "Happy New Year" greeting.

## Major Differences from For Loop

### 1. Counter Position

With a while loop, the counter value is set **before** the loop and must be clearly defined.

```js
let counter = 3; // Counter set OUTSIDE the loop
```

### 2. Simplified Declaration

You only need to specify the **exit condition** in the parentheses of the loop declaration.

```js
while (counter > 0) {
    // Code to execute
}
```

You just give JavaScript an expression to check. If that expression returns `true`, JavaScript will run the code inside the while loop.

## Building a While Loop

### Step 1: Initialize the Counter

```js
let counter = 3;
```

### Step 2: Set Up the While Loop

```js
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year!");
```

### Complete Example

```js
let counter = 3;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year!");

// Output:
// 3
// 2
// 1
// Happy New Year!
```

## How It Works: Step-by-Step Execution

Let's trace through the execution:

### Iteration 1
1. JavaScript checks: Is `counter > 0`? (Is 3 > 0?) → **TRUE**
2. Runs code inside the loop
3. Outputs: `3`
4. Updates counter: `counter = 3 - 1` → `counter = 2`
5. Returns to the top to check the condition again

### Iteration 2
1. JavaScript checks: Is `counter > 0`? (Is 2 > 0?) → **TRUE**
2. Runs code inside the loop
3. Outputs: `2`
4. Updates counter: `counter = 2 - 1` → `counter = 1`
5. Returns to the top to check the condition again

### Iteration 3
1. JavaScript checks: Is `counter > 0`? (Is 1 > 0?) → **TRUE**
2. Runs code inside the loop
3. Outputs: `1`
4. Updates counter: `counter = 1 - 1` → `counter = 0`
5. Returns to the top to check the condition again

### Exit
1. JavaScript checks: Is `counter > 0`? (Is 0 > 0?) → **FALSE**
2. Loop exits
3. Code after the closing curly brace runs
4. Outputs: `Happy New Year!`

## While Loop Syntax

```js
initialization (before loop)

while (condition) {
    // Code to execute
    increment/decrement
}
```

## For Loop vs While Loop Comparison

### For Loop
```js
for (let i = 3; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");
```

### While Loop
```js
let i = 3;

while (i > 0) {
    console.log(i);
    i--;
}
console.log("Happy New Year!");
```

Both produce the same output, but the structure is different:
- **For loop:** All loop logic (initialization, condition, increment) in one line
- **While loop:** Initialization before loop, only condition in declaration, increment inside body

## Important Reminders

### Always Update the Counter!

If you forget to decrement the counter, you'll create an infinite loop:

```js
let counter = 3;

while (counter > 0) {
    console.log(counter);
    // Missing: counter = counter - 1;
    // This will run FOREVER!
}
```

### Decrement Shortcuts

```js
counter = counter - 1;  // Long form
counter -= 1;           // Shorter form
counter--;              // Shortest form (decrement by 1)
```

All three methods achieve the same result.

## When to Use While Loop

While loops are particularly useful when:
- You don't know in advance how many times the loop will run
- The loop depends on a condition that might change unpredictably
- You're waiting for a specific state or input

## Summary

- The **while loop** runs as long as the condition is `true`
- The counter must be initialized **before** the loop
- The counter must be updated **inside** the loop body
- The loop exits when the condition returns `false`
- Always ensure you have a way to exit the loop to avoid infinite loops

## Practice Challenge

Try creating your own while loop! Loops are a common way to automate code repetition.

For more information about the specific use of loops, refer to the additional reading at the end of this lesson.
