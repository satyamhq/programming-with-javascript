# Functions in JavaScript

## Introduction

Have you ever wondered how a washing machine just knows what to do when you select a specific wash cycle? You select "sports wash" and it runs at the same temperature every time, or you turn the dial to "synthetics" and it runs for the exact same length of time.

Functions work just like this—running the same set of stored instructions repeatedly without requiring you to adjust the settings every time.

## What is a Function?

A **function** is a way to group several lines of code that perform a set of related actions together under a single label. When you need to run that code, you just invoke (call) the function.

### The DRY Principle

One of the basic principles of programming: **DRY** (Don't Repeat Yourself)

Functions help you avoid repetition by allowing you to:
- Write code once
- Run it as many times as needed
- Keep your code organized and maintainable

## Basic Example: Adding Two Numbers

### Without a Function

```js
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
```

This works, but what if you want to execute this code more than once?

### With a Function

```js
function addTwoNums() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
```

## Function Declaration

To declare a function:

1. Type the keyword `function`
2. Add a space
3. Write the function name (you can name it nearly anything)
4. Add opening and closing parentheses `()`
5. Add opening and closing curly braces `{}`
6. Place the code to execute inside the braces

### Syntax

```js
function functionName() {
    // Function body - code to be executed
}
```

### Important Note

A function declaration on its own **does not execute the code**. It just specifies what operations should be performed when the function is called.

## Calling (Invoking) a Function

To run the function's code, you need to **call** or **invoke** the function:

```js
addTwoNums(); // Calls the function
```

### Terminology

All these terms mean the same thing:
- **Call a function**
- **Invoke a function**
- **Run a function**
- **Execute a function**

They all mean: execute the code inside the function's body.

## The Limitation of Fixed Values

The `addTwoNums` function has a limitation—it only adds 10 and 20:

```js
function addTwoNums() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}

addTwoNums(); // Always outputs: 30
```

The function always gives the same result because `a` and `b` have specific fixed values.

## Function Parameters

To make functions more flexible, you can pass values to them using **parameters**.

### Parameters vs Arguments

- **Parameters:** Variable names defined in the function declaration
- **Arguments:** Actual values passed to the function when calling it

### Updated Function with Parameters

```js
function addTwoNums(a, b) {
    var c = a + b;
    console.log(c);
}
```

Now `a` and `b` are parameters instead of fixed variables.

### Calling the Function with Arguments

```js
addTwoNums(10, 20);  // Output: 30
addTwoNums(5, 15);   // Output: 20
addTwoNums(100, 50); // Output: 150
```

## Advantages of Parameters

Parameters act like variable names that allow you to set changeable values on each function call.

### Benefits

- **Flexibility:** Use any values you want
- **Reusability:** Call the function many times with different values
- **Clean code:** More efficient and maintainable
- **No repetition:** Write once, use many times

### Example: Multiple Calls

```js
function addTwoNums(a, b) {
    var c = a + b;
    console.log(c);
}

addTwoNums(3, 7);    // Output: 10
addTwoNums(25, 75);  // Output: 100
addTwoNums(1, 1);    // Output: 2
```

As long as you send two values, the function will add them together and output the result.

## How Parameters Work

Think of parameters as placeholders:

```js
function functionName(parameter1, parameter2) {
    // Code uses parameter1 and parameter2
}

functionName(argument1, argument2);
```

When the function is invoked:
- `argument1` gets assigned to `parameter1`
- `argument2` gets assigned to `parameter2`

## Complete Example

```js
// Function declaration with parameters
function addTwoNums(a, b) {
    var c = a + b;
    console.log(c);
}

// Function calls with different arguments
addTwoNums(10, 20);  // 30
addTwoNums(5, 5);    // 10
addTwoNums(100, 1);  // 101
```

## Summary

### What We Learned

1. **Functions group related code** under a single label
2. **Functions avoid repetition** (DRY principle)
3. **Function declaration** specifies what operations to perform
4. **Function invocation** executes the code
5. **Parameters** make functions flexible and reusable
6. **Arguments** are the actual values passed when calling a function

### Key Points

- Function parameters act like variable names
- Actual values come from function arguments at invocation time
- Functions with parameters can accept any kind of value
- This results in clean, efficient, reusable code

### Why Functions Matter

Working with functions is common in day-to-day development and is **one of the core skills a developer needs to master**. They help you write more efficient, reusable code.

## Function Terminology

| Term | Meaning |
|------|---------|
| **Declare** | Create the function |
| **Invoke/Call/Run** | Execute the function |
| **Parameters** | Variable names in function definition |
| **Arguments** | Actual values passed when calling |
| **Body** | Code between the curly braces |
