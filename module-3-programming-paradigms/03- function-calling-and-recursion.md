# Function Calling and Recursion

## Introduction

Treadmills are a useful piece of equipment for doing cardio at the gym, or when running outdoors isn't an option. They are easily started with the push of a button. Imagine, however, if there was no way to control when a treadmill stopped - that wouldn't be ideal, would it? 

Fortunately, most treadmills have a function that tells the treadmill to stop after a specified amount of time. In JavaScript, functions that repeat tasks are similarly helpful, unless they run endlessly.

This lesson demonstrates what recursive functions are and how to write them properly to avoid getting stuck in an infinite loop.

## What Does It Mean to Call a Function?

To **call**, **invoke**, or **execute** a function means instructing it to follow the code inside of it one line at a time.

## Basic Function Example

Let's build a simple example:

```js
function example() {
    console.log("line one");
    console.log("line two");
    console.log("line three");
}
```

When I run this function, each of the lines will be executed one at a time in sequence, producing three strings.

## Creating an Infinite Loop (Don't Do This!)

Now let's add one more line to the `example` function - the function calling itself:

```js
function example() {
    console.log("line one");
    console.log("line two");
    console.log("line three");
    example(); // Function calls itself!
}
```

If I run the function now, it will repeat in an **infinite loop**. Obviously, this wouldn't be useful.

## Proper Recursion with a Stop Condition

Let's improve it and ensure that it won't run endlessly:

```js
let counter = 3;

function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example();
}
```

### How It Works

1. We initialize a `counter` variable set to `3`
2. The function logs the current counter value
3. The counter is decremented by 1
4. **Stop condition**: If the counter equals 0, the function returns (stops)
5. Otherwise, the function calls itself again

When I call the function this time, it will log the numbers `3`, `2`, `1`, and then stop.

### Output

```
3
2
1
```

## What is Recursion?

When a function calls itself, this is what's known as **recursion**.

Recursion is an alternative way to run repetitive code without the use of loops.

## Key Takeaways

- Recursion occurs when a function calls itself
- Recursive functions need a **stop condition** to avoid infinite loops
- Without a stop condition, a recursive function will run endlessly
- Recursion is an alternative to loops for repetitive tasks

## The Treadmill Analogy

Next time you see someone running on a treadmill, imagine a function running in the background. It might be calling itself to continue running until its condition is met to stop.

## Conclusion

You've learned about:

- The uses and potential problems of recursive functions
- How to write them properly so they don't run endlessly
- The importance of including a stop condition in recursive functions
