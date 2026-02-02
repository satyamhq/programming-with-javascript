# Looping Constructs

## Overview

In everyday life, we repeat activities again and again:

- Buttoning each button on a shirt
- Washing a stack of plates one by one
- Counting down from 10 to 1 before singing "Happy New Year"

Similarly, in JavaScript, we use **loops** to continually execute repeated blocks of code until a certain condition is satisfied.

## Loops vs Conditionals

Recall that conditional `if` statements execute a block of code if a certain condition is met, but this sequence only runs once.

Loops are similar to conditionals in that a condition must be satisfied, but loops have an additional parameter: the **counter** (also called an incrementer or loop counter).

## Understanding the Counter

The counter variable is crucial because it determines:

- When the loop should start
- When the loop should terminate

### Real-Life Example

When counting down from 10 to 1 before singing "Happy New Year":

- The counter starts at 10
- It decrements until it reaches 1
- Only after reaching 1 can we start singing

In JavaScript, the counter can be any variable or number, but it's common to use the letter `i`.

### Infinite Loops

Without a properly configured counter, your loop will not know when to start or terminate, and could run indefinitely. This is known as an **infinite loop**.

## Why Use Loops?

Consider logging numbers 1, 2, 3 to the console:

```js
console.log(1);
console.log(2);
console.log(3);
```

We're performing the same activity repeatedly—only the number changes. Using a loop, we can perform this task more efficiently with fewer lines of code.

While this might seem like a minimal gain for counting to 3, imagine counting to 100. Using a loop, you can achieve this with the same amount of code—just update the condition!

## Types of Loops

JavaScript has several types of loops:

- **For loop**
- **While loop**
- **Nested loop** (covered later)

## The For Loop

The `for` loop is used to loop a block of code a specific number of times. It has a structured syntax with three parts:

1. **Counter initialization** - Set the starting value
2. **Condition** - Specify when to stop
3. **Increment/Decrement** - Update the counter after each iteration

### Syntax

```js
for (initialization; condition; increment) {
    // Code to execute
}
```

### Example

```js
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
```

### Counting to 100

```js
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

All the loop's logic is in one place, making it self-contained and easy to read.

## The While Loop

The `while` loop runs as long as the condition returns `true`. Unlike the `for` loop:

- The counter is set **outside** the loop
- The increment/decrement is done **inside** the loop's body

### Syntax

```js
initialization

while (condition) {
    // Code to execute
    increment
}
```

### Example

```js
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}

// Output:
// 1
// 2
// 3
```

## For vs While Loop

Both loops can achieve the same results. However, as a budding developer, you might find the `for` loop easier to work with because:

- All loop logic is in one place (self-contained)
- Less chance of forgetting to update the counter
- More structured and easier to read

## Important Reminder

**Always remember to update the counter value!** Otherwise, the loop might run forever (infinite loop).

### Example of Infinite Loop (Avoid This!)

```js
let i = 1;

while (i <= 3) {
    console.log(i);
    // Missing i++ - This will loop forever!
}
```

## Summary

- Loops execute repeated blocks of code until a condition is satisfied
- The **counter** determines when the loop starts and stops
- **For loops** are self-contained with all logic in one place
- **While loops** have the counter outside and increment inside
- Always update the counter to avoid infinite loops
