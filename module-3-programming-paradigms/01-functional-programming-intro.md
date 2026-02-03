## Introduction to Functional Programming

Just like human languages have different styles (formal vs. colloquial), programming languages also have different styles called **programming paradigms**. No single paradigm is inherently better than another—they're just different approaches to writing code that accomplish the same goal: instructing a computer to perform operations.

## Common Programming Paradigms

The two most commonly used paradigms are:

- **Functional Programming (FP)** - Separates data and functions
- **Object-Oriented Programming (OOP)** - Combines data and functions into objects

## What is Functional Programming?

In functional programming, there is a **clear distinction between data and functions**:

- Data exists outside of functions
- Functions receive data as arguments
- Functions perform operations on the data
- Functions return values that can be used elsewhere in the program

This is different from OOP, where data and functions are combined into objects.

## Practical Example: Currency Conversion

Here's a functional programming example that performs currency conversion:
```js
// Declare variables with data
let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

// Create a function that operates on the data
function convertCurrency(amount, rate) {
    return amount * rate;
}

// Update currencyTwo by calling the function
currencyTwo = convertCurrency(currencyOne, exchangeRate);

// Test the result
console.log(currencyTwo); // Output: 120
```

### How It Works

1. **Define the data** - Three variables store our currency values and exchange rate
2. **Create the function** - `convertCurrency()` accepts two parameters and returns their product
3. **Invoke the function** - Pass `currencyOne` (100) and `exchangeRate` (1.2) as arguments
4. **Store the result** - The returned value (120) is assigned to `currencyTwo`
5. **Output the result** - Console logs 120

### Key Naming Convention

Variable names use **camelCase**:
- First letter of the first word is lowercase
- First letter of subsequent words is uppercase
- No spaces between words
- Examples: `currencyOne`, `exchangeRate`, `convertCurrency`

## Summary

Functional programming solves problems by **separating data from functions**. Functions operate on data passed as arguments and return results, keeping a clear distinction between what the data is and what operations can be performed on it.
