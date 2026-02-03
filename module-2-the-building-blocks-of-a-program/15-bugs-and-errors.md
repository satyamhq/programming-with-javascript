## Bugs and Errors

In this lesson, you'll learn about bugs and errors in JavaScript and some common error types, such as syntax errors, reference errors, and type errors.

---

## Bugs vs Errors

### What is a Bug?

A **bug** occurs when a program keeps running, but it behaves in a way we didn't intend.

**Example:**
```js
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(1, 2);
console.log("still running");
// Output:
// 3
// still running
```

This code works as expected. But what if we pass different data types?
```js
addNumbers("1", 2);
console.log("still running");
// Output:
// 12
// still running
```

Due to JavaScript **coercion**, when you add a string and a number using the `+` operator, the values concatenate as strings. The result is `"12"` instead of `3`.

The program continues to run without interruption, but it's not working how we intended. **This is a bug.**

---

### What is an Error?

An **error** occurs when the program stops running as a direct consequence of faulty code.

**Example:**
```js
console.log(c + d);
console.log("This line never runs");
// Output: ReferenceError: c is not defined
```

JavaScript looks for variables `c` and `d`, but since they don't exist (not declared or assigned), it outputs a **ReferenceError**.

When an error happens:
- The program **stops execution**
- No further lines of code are executed
- In JavaScript, we say an error is **thrown**

---

## Common Error Types

### 1. ReferenceError

Occurs when you attempt to use a value that is **not defined**.
```js
console.log(c + d);
// ReferenceError: c is not defined
```

---

### 2. SyntaxError

Occurs when you write code that JavaScript **cannot read**.

**Example: Missing quotation mark**
```js
var message = "Hello;
// SyntaxError: Invalid or unexpected token
```

JavaScript cannot parse this code because the string is missing a closing quotation mark.

---

### 3. TypeError

Occurs when you try to use a method or operation on the **wrong data type**.

**Example: Using array method on a number**
```js
(5).pop();
// TypeError: 5.pop is not a function
```

The `pop()` method is for arrays, not numbers. This results in a **TypeError**.

---

## How JavaScript Helps

JavaScript does its best to report errors by outputting **error messages to the console**.

Error messages are useful because they:
- Narrow down the issue in your code
- Indicate the type of error
- Show the line where the error occurred

---

## Summary

### Bugs
- Program keeps running
- Behaves unexpectedly
- No error is thrown

### Errors
- Program stops running
- Error message is displayed
- Code execution halts

### Common Error Types

| Error Type | Description | Example |
|------------|-------------|---------|
| **ReferenceError** | Value is not defined | `console.log(x)` when `x` doesn't exist |
| **SyntaxError** | Code cannot be read/parsed | Missing quotation mark: `"Hello` |
| **TypeError** | Wrong operation on a data type | `(5).pop()` - using array method on number |

---

## Key Takeaways

- **Bugs** make code behave unexpectedly but don't stop execution
- **Errors** cause the program to stop running
- JavaScript throws errors and outputs helpful error messages
- Common errors: ReferenceError, SyntaxError, TypeError
- Programming errors will almost certainly occur when writing code
- Understanding error messages helps you fix issues faster

Next, you'll learn about JavaScript tools used to catch these errors!
