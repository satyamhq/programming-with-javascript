# Default Parameters in JavaScript

## Overview

ES6 (ECMAScript 2015) introduced default parameters, a feature that allows you to set default values inside function definitions. This feature works hand-in-hand with defensive coding practices and requires minimal effort to implement.

## The Problem: Functions Without Default Parameters

Consider a basic function without default parameters:

```js
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
```

This function should return the square of the number it receives. However, if called without an argument:

```js
noDefaultParams(); // Result: NaN
```

JavaScript doesn't throw an error. Instead, it returns `NaN` (Not a Number) because `number` is `undefined` by default.

## The Solution: Using Default Parameters

You can improve this function by setting a default parameter value:

```js
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
```

Now, even if no argument is passed, the function defaults to 10:

```js
withDefaultParams(); // Result: 100
```

### Key Benefits

- Functions run with default values even when no arguments are passed
- Still flexible enough to accept custom argument values
- Promotes predictable behavior
- Makes object instantiation easier

## Default Parameters in Classes

### Without Default Parameters

Here's a class definition without default parameters:

```js
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
```

When instantiated with incorrect values:

```js
var fail = new NoDefaultParams(1, 2, 3, false);
fail.calculate(); // 'The value of bool1 is incorrect'
```

This can lead to confusing error messages and poor user experience.

### With Default Parameters

An improved version using default parameters:

```js
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
```

Now you can instantiate without any arguments:

```js
var better = new WithDefaultParams();
better.calculate(); // Result: 6
```

### Advantages for Development

- No need to pass all arguments for quick tests
- Improved developer experience
- Easier to build inheritance hierarchies
- Subclasses can pass only specific properties while using defaults from superclass

## Best Practices

- Use default parameters to make your code more robust and predictable
- Set sensible defaults that work for the most common use cases
- Allow flexibility for custom values when needed
- Leverage defaults when building class inheritance hierarchies

## Summary

Default parameters in JavaScript provide:

- **Defensive coding**: Functions handle missing arguments gracefully
- **Flexibility**: Accept custom values while providing sensible defaults
- **Better developer experience**: Less boilerplate code and fewer errors
- **Inheritance support**: Easier to work with class hierarchies
