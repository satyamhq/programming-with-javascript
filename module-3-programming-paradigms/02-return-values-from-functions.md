# Return Values from Functions

## Introduction

Returning values from functions in JavaScript allows you to pass the result of a computation or operation back to the caller, enabling further use or manipulation of that result. This helps maintain modular code and reusability.

## Default Return Value

Many functions, by default, return the value of `undefined`. An example is the `console.log()` function.

If I run:

```js
console.log('Hello');
```

Here's the output in the console:

```
Hello
undefined
```

The `console.log()` function is built with the intention to not have the return value explicitly set. Therefore, it gets the default return value of `undefined`.

## Explicitly Returning Values

This default behavior can be changed by explicitly returning a value from a function.

Here's a custom implementation of `console.log()` that doesn't return `undefined`:

```js
function consoleLog(val) {
    console.log(val)
    return val
}
```

Now when I run my custom `consoleLog()` function:

```js
consoleLog('Hello')
```

I get the following output:

```
Hello
'Hello'
```

So, the value is output in the console, but it's also returned.

## Why is Returning Values Useful?

It's useful because I can use return values from one function inside another function. In JavaScript, return values can be used for:

- Further computation
- Passed to other functions
- Assigned to variables for later use

This makes functions more versatile and allows for cleaner, reusable code.

## Examples

### Basic Function Returns

Here's a function that returns the double of a number:

```js
function doubleIt(num) {
    return num * 2
}
```

And another function that builds an object with a specific value:

```js
function objectMaker(val) {
    return {
        prop: val
    }
}
```

### Using Return Values

I can call the `objectMaker()` function with any value:

```js
objectMaker(20);
```

The returned value will be an object with a single `prop` key set to 20:

```js
{prop: 20}
```

### Chaining Function Calls

Return values can be chained together:

```js
doubleIt(10).toString()
```

The above code returns the number 20 as a string: `"20"`.

### Combining Custom Functions

I can even combine my custom function calls:

```js
objectMaker( doubleIt(100) );
```

This will return:

```js
{prop: 200}
```

## What Does This Mean?

By using the `return` keyword, you can:

- Have multiple function calls
- Return and manipulate data
- Solve complex coding challenges through function composition
- Reduce side effects and create pure functions (important in functional programming)

Being able to return custom values is one of the foundations that makes functional programming possible.

## Complete Example

```js
// Function to double a number
function doubleIt(num) {
    return num * 2;
}

// Function to create an object with a 'prop' key
function objectMaker(val) {
    return { prop: val };
}

// Chaining functions and returning values
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }
```

## Conclusion

Returning values from functions is a powerful feature in JavaScript that enhances:

- **Flexibility** - Pass data between functions seamlessly
- **Reusability** - Create modular code that can be used in multiple contexts
- **Readability** - Make code intent clearer and easier to understand

By utilizing the `return` keyword, you can create more modular code and support functional programming principles like purity and avoiding side effects. Understanding and leveraging return values is essential for writing efficient and maintainable JavaScript applications.
