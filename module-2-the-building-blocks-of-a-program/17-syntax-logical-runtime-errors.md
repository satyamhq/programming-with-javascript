## Syntax, Logical and Runtime Errors

In this lesson, you'll learn to recognize common types of errors in JavaScript and understand how to handle them effectively.

---

## Common JavaScript Errors

### Primary Error Types

1. **ReferenceError**
2. **SyntaxError**
3. **TypeError**
4. **RangeError**

### Other Error Types

- AggregateError
- Error
- InternalError
- URIError

---

## 1. ReferenceError

A **ReferenceError** is thrown when you try to use variables that haven't been declared.

### Example
```js
console.log(username);
```

**Output:**
```
Uncaught ReferenceError: username is not defined
```

This error occurs because the variable `username` hasn't been declared anywhere in the code.

---

## 2. SyntaxError

A **SyntaxError** occurs when you write invalid JavaScript code.

### Example
```js
var a "there's no assignment operator here";
```

**Output:**
```
Uncaught SyntaxError: Unexpected string
```

### Important Caveat

**SyntaxError cannot be caught using try-catch blocks** because the code fails to parse before execution.

---

## 3. TypeError

A **TypeError** occurs when a method is used on an incompatible data type.

### Example
```js
"hello".pop();
```

**Output:**
```
Uncaught TypeError: "hello".pop is not a function
```

Strings are array-like but do not support array methods like `pop()`. Attempting to use array methods on strings results in a TypeError.

---

## 4. RangeError

A **RangeError** is thrown when you give a value to a function that is outside the allowed range of acceptable input values.

### Example: Number System Conversion
```js
(10).toString(2);
// Converts 10 to binary: '1010'

(10).toString(8);
// Converts 10 to base 8: '12'

(10).toString(100);
// Uncaught RangeError: toString() radix argument must be between 2 and 36
```

The `toString()` method accepts bases between 2 and 36. Using Base 100 (which doesn't exist) throws a RangeError.

---

## 5. Logical Errors

**Logical errors** cause incorrect behavior in programs despite the absence of syntax or runtime errors.

### Example
```js
function addNumbers(a, b) {
  return a - b; // Logical error: should be a + b
}

console.log(addNumbers(5, 3));
// Output: 2 (Incorrect, expected: 8)
```

The code runs without errors, but produces the wrong result.

### Debugging Logical Errors

1. **Use Breakpoints**: Inspect variable values step-by-step (available in IDEs like VS Code)
2. **Review Logic**: Walk through the code to confirm intended functionality
3. **Peer Review**: Another perspective can reveal hidden issues

---

## Error Object Properties

JavaScript errors are objects with useful properties:

- **`name`**: The type of error (e.g., TypeError, RangeError)
- **`message`**: A description of the error
- **`stack`**: A stack trace showing where the error occurred

### Example
```js
try {
  let a = b; // ReferenceError
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // b is not defined
  console.log(error.stack);   // Stack trace
}
```

---

## Best Practices for Handling Errors

### 1. Use Try-Catch Blocks

Handle predictable runtime errors gracefully.

### 2. Validate Inputs

Check inputs before operations to prevent invalid operations.

### 3. Use Specific Error Types

Throw custom errors for clarity.

### Complete Example
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}
```

---

## Distinguishing Between Error Types

| Error Type | When It Occurs | Can Execute? | Example |
|------------|----------------|--------------|---------|
| **Syntax Errors** | Invalid syntax prevents code execution | ❌ No | `var a "missing operator";` |
| **Logical Errors** | Code executes but produces incorrect output | ✅ Yes | `return a - b` instead of `a + b` |
| **Runtime Errors** | Occur during execution, halt program unless handled | ✅ Yes (until error) | `console.log(undeclaredVar);` |

---

## Summary of Error Types

### ReferenceError
- **Cause**: Using undeclared variables
- **Example**: `console.log(username);`

### SyntaxError
- **Cause**: Invalid JavaScript code
- **Example**: `var a "missing operator";`
- **Note**: Cannot be caught with try-catch

### TypeError
- **Cause**: Using methods on incompatible data types
- **Example**: `"hello".pop();`

### RangeError
- **Cause**: Value outside acceptable range
- **Example**: `(10).toString(100);`

### Logical Errors
- **Cause**: Code runs but produces wrong results
- **Example**: Using subtraction instead of addition
- **Solution**: Debug, review logic, peer review

---

## Key Takeaways

- **Syntax Errors**: Prevent code execution due to invalid syntax
- **Logical Errors**: Allow execution but cause incorrect output
- **Runtime Errors**: Occur during execution and halt the program unless handled
- Use **try-catch blocks** to handle runtime errors gracefully
- **Validate inputs** to prevent errors before they occur
- Access error properties (`name`, `message`, `stack`) for debugging
- **Logical errors** require careful code review and debugging

Understanding these error types helps you write more robust and error-resistant JavaScript code!
