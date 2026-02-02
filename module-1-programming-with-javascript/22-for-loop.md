# For Loop

## The Problem

Let's say you want to code a countdown from 1 to 3, then say "Go!" as if you're racing.

You could do this by logging each step to the console:

```js
console.log(1);
console.log(2);
console.log(3);
console.log("Go!");
```

While this method works, imagine counting from 1 to 10, 1 to 100, or even more. You'd have to type `console.log()` hundreds of times!

## The Solution: For Loop

Luckily, there's a more efficient way using a **for loop**.

### Basic Syntax

```js
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
console.log("Go!");

// Output:
// 1
// 2
// 3
// Go!
```

## Anatomy of a For Loop

The `for` loop declaration consists of three parts, known as the **counter**:

```js
for (initialization; condition; increment) {
    // Loop body - code to execute
}
```

### 1. Initialization (Start Count)

```js
let i = 1
```

- The counter is a variable typically named `i` (for iterator)
- You can use any variable name you want
- This sets the starting value of the counter

### 2. Condition (End Count)

```js
i <= 3
```

- Specifies how many times the loop will iterate or run
- The loop continues while this condition is `true`
- In this example, the loop runs while `i` is less than or equal to 3

### 3. Increment (Change the Counter)

```js
i++
```

- Changes the value of `i` after each loop iteration
- `i++` increases the value by 1 (same as `i = i + 1`)
- This is crucial to prevent infinite loops

## Exit Condition

The exit condition works with the incrementor to prevent the loop from running forever.

**Without an incrementor:**
```js
for (let i = 1; i <= 3; ) {
    console.log(i);
    // This will run forever! i is always 1, which is always <= 3
}
```

**How it works:**
- The loop terminates when the condition returns `false`
- In our example, when `i` equals 4, the condition `4 <= 3` returns `false`
- The loop exits and JavaScript continues to the next line of code

## Loop Body

The loop body is enclosed in curly braces `{}` and contains the code you want to run on each iteration.

```js
for (let i = 1; i <= 3; i++) {
    console.log(i); // This runs 3 times
}
```

## Counting Backward (Decrementing)

You can also count backward by decrementing the counter:

```js
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// Happy New Year!
```

### Breaking It Down

- **Start:** `i = 10`
- **Condition:** `i > 0` (loop runs while i is greater than 0)
- **Decrement:** `i--` (decreases i by 1 each time)
- The `console.log()` repeats 10 times until `i` reaches 0
- Once `i` equals 0, the condition `0 > 0` is `false`, and the loop exits

## Key Concepts

### Incrementing vs Decrementing

```js
i++  // Increases i by 1 (same as i = i + 1)
i--  // Decreases i by 1 (same as i = i - 1)
```

### Different Loop Variations

**Counting up:**
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

**Counting down:**
```js
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

**Counting by 2s:**
```js
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

## Summary

A **for loop** is a way to automate repetition in JavaScript. Instead of writing the same code multiple times, you can use a loop to execute it as many times as needed.

**Remember:**
- Always include an incrementor/decrementor to avoid infinite loops
- The loop exits when the condition returns `false`
- The counter variable (commonly `i`) tracks the current iteration

## Practice Challenge

Try creating your own for loop to repeat some code! Experiment with different start values, conditions, and increments.
