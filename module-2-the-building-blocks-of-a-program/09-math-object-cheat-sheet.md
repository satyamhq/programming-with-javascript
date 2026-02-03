## Math Object Cheat Sheet

JavaScript has useful built-in objects. One of these popular built-in objects is the **Math object**.

By the end of this reading, you'll be able to:
- Outline the built-in properties and methods of the Math object

## Number Constants

Here are some of the built-in number constants that exist on the Math object:

- **The PI number**: `Math.PI` which is approximately 3.14159
- **Euler's number**: `Math.E` which is approximately 2.718
- **The natural logarithm of 2**: `Math.LN2` which is approximately 0.693

## Rounding Methods

These include:

- `Math.ceil()` - rounds up to the closest integer
- `Math.floor()` - rounds down to the closest integer
- `Math.round()` - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
- `Math.trunc()` - trims the decimal, leaving only the integer

## Arithmetic and Calculus Methods

Here is a non-exhaustive list of some common arithmetic and calculus methods that exist on the Math object:

- `Math.pow(2, 3)` - calculates the number 2 to the power of 3, the result is 8
- `Math.sqrt(16)` - calculates the square root of 16, the result is 4
- `Math.cbrt(8)` - finds the cube root of 8, the result is 2
- `Math.abs(-10)` - returns the absolute value, the result is 10
- **Return the minimum and maximum values**: `Math.min(9, 8, 7)` returns 7, `Math.max(9, 8, 7)` returns 9
- **Trigonometric methods**: `Math.sin()`, `Math.cos()`, `Math.tan()`, etc.

## Logarithmic Methods

- `Math.log(x)` - Returns the natural logarithm (base e) of x
- `Math.log2(x)` - Returns the base-2 logarithm of x
- `Math.log10(x)` - Returns the base-10 logarithm of x

## Storing Math Results in Variables

You can assign the results of JavaScript's Math functions to variables to store and reuse calculated values:
```js
var MyNum = Math.sqrt(16); // Calculates square root of 16
console.log(MyNum); // Output: 4
```

This approach works for any Math function:
```js
var MyNum = Math.pow(3, 4); // Assigns the value 81 to MyNum
```

### Why Store Results?

This is done to:
- Simplify calculations
- Make your code cleaner
- Use the results later in your program

## Summary

- The Math object provides built-in constants like `Math.PI` and `Math.E`
- Rounding methods include `ceil()`, `floor()`, `round()`, and `trunc()`
- Arithmetic methods include `pow()`, `sqrt()`, `cbrt()`, and `abs()`
- Logarithmic methods include `log()`, `log2()`, and `log10()`
- You can store Math function results in variables for reuse
