## Try Catch Blocks

In this lesson, you'll learn about the `throw`, `try`, and `catch` statements and how they can be used to work with errors in JavaScript and prevent your code from stopping. This process is known as **error handling**.

---

## Error Handling Keywords

JavaScript provides built-in statements to help your code continue running even if an error occurs:

- **`try`** - Wraps code that might throw an error
- **`catch`** - Catches and handles the error
- **`throw`** - Forces an error to be thrown

---

## The try...catch Statement

### Basic Structure
```js
try {
  // Code to be tested for errors
} catch(err) {
  // Code to execute if an error occurs
}
```

### How it Works

1. Code inside the `try` block is executed
2. If an error occurs, execution jumps to the `catch` block
3. The `catch` block receives an **error object** (commonly named `err`)
4. The program continues running after the `catch` block

---

## Example: Code Without Error Handling
```js
console.log(a + b);
console.log("This line is never reached");
```

**Output:**
```
ReferenceError: a is not defined
```

The program **stops immediately** and the second line never executes.

---

## Example: Using try...catch
```js
try {
  console.log(a + b);
} catch(err) {
  console.log("There was an error");
  console.log("The error was saved in the error log");
}
console.log("My program does not stop");
```

**Output:**
```
ReferenceError: a is not defined
There was an error
The error was saved in the error log
My program does not stop
```

**Key Point:** Even though an error occurred, the program **continued running** and executed the code after the `catch` block.

---

## The throw Keyword

You can manually throw errors using the `throw` keyword followed by an error constructor.

### Syntax
```js
throw new ReferenceError();
```

### Example: Throwing a Custom Error
```js
try {
  throw new ReferenceError();
} catch(err) {
  console.log(err);
  console.log("There was a reference error");
}
console.log("My program does not stop");
```

**Output:**
```
ReferenceError
There was a reference error
My program does not stop
```

---

## Important Notes

### About the Error Object

- The `catch` block accepts an **error object** (commonly named `err`)
- You can name it anything you like, but keep it short and meaningful
- This object contains information about the error that was thrown

### About the throw Keyword

- You can use `throw` **outside** a `try` block
- However, if thrown outside, it **cannot be caught** and will stop the program
- Always use `throw` inside a `try` block if you want to catch the error

---

## Benefits of try...catch

✅ **Prevents program crashes** - Code continues running even after errors  
✅ **Error logging** - You can log errors for debugging  
✅ **Graceful error handling** - Provide user-friendly error messages  
✅ **Program stability** - Critical errors won't break your entire application

---

## Complete Example
```js
try {
  // Attempt to execute code that might fail
  console.log(a + b);
} catch(err) {
  // Handle the error gracefully
  console.log("There was an error");
  console.log(err); // Log the error object
}

// Program continues executing
console.log("My program does not stop");
```

---

## Summary

### Without Error Handling
- Errors **stop** program execution
- Code after the error never runs

### With try...catch
- Errors are **caught** and handled
- Program **continues** running
- You control what happens when errors occur

### Key Syntax
```js
try {
  // Code that might throw an error
} catch(err) {
  // Code to handle the error
}

// Use throw to manually trigger errors
throw new ReferenceError();
```

---

## Key Takeaways

- **try...catch** prevents errors from stopping your program
- The **catch** block receives an error object with error details
- **throw** keyword lets you manually throw errors
- Error handling makes your code more **stable** and **user-friendly**
- Always catch errors that you throw inside a `try` block

Next time you see a game of catch, think about how you can use a similar mechanism to help catch errors in your code!
