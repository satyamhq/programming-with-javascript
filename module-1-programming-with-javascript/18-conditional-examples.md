# Conditional Examples

## Overview

Both `if...else` and `switch` statements are **flow control statements** that determine program execution based on whether conditions are met. They control the flow of your code, allowing some code to be skipped while other code executes.

At the heart of both structures lies the evaluation of one or more conditions.

## The Break Statement

The `break` statement is used to exit a loop or stop the execution of a switch case. Once a `break` is encountered, the program immediately jumps out of the current block.

### Example

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stops when i is 3
    }
    console.log(i);
}

// Output: 1, 2
```

Without `break`, the loop or switch would continue running, which could lead to unintended behavior.

## When to Use If...Else

`if...else` is better suited for **binary choices** or when evaluating complex conditions.

### Binary Choice Example

```js
// Plain English: if it's sunny, wear sunglasses. Otherwise, don't.
if (sunny) {
    console.log("Wear sunglasses");
} else {
    console.log("Don't wear sunglasses");
}
```

### Multiple Conditions Example

```js
if (light == "green") {
    console.log("Drive");
} else if (light == "orange") {
    console.log("Get ready");
} else if (light == "red") {
    console.log("Don't drive");
} else {
    // This block runs if no condition matches
    console.log("The light is not green, orange, or red");
}
```

## When to Use Switch

When there are **many possible outcomes**, it is best practice to use a `switch` statement because it is:

- Less wordy
- Easier to read
- Easier to follow the logic
- Reduces cognitive load

### Important Note: Strict Equality

Switch uses **strict equality (`===`)** for comparisons, meaning it compares both type and value.

```js
console.log(1 === "1");     // false (different types)
console.log(null === null); // true (same type and value)
console.log(1 == "1");      // true (type coercion)
```

### Switch Example

```js
// Converting the previous if-else example with switch-case
switch (light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
}
```

## Fallthrough Behavior

**Important:** In JavaScript, switch statements have fallthrough behavior. If a `break` is not included after a case, the code will continue to execute the next case, regardless of whether it matches.

### Example of Fallthrough

```js
switch (light) {
    case 'green':
        console.log("Drive");
    case 'orange': // No break here, so this will also run
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
}
```

If `light` is `"green"`, both "Drive" and "Get ready" will be logged. Always include a `break` unless intentional fallthrough is desired.

## Logical Operators

You can use logical operators like `&&` (AND) and `||` (OR) to combine multiple conditions in an `if...else` statement.

### Example

```js
if (weather === "sunny" && temperature > 20) {
    console.log("Go for a picnic");
} else if (weather === "rainy" || temperature < 10) {
    console.log("Stay indoors");
}
```

## Limitations of Switch

Switch works well with **discrete, exact matches** (like strings or numbers) but is less flexible than `if...else` for evaluating complex conditions or ranges.

### Example: Complex Condition

This kind of condition **cannot** be expressed in a switch:

```js
if (age > 18 && age < 60) {
    console.log("Eligible for the program");
}
```

## Conclusion

Choosing between `if...else` and `switch` is primarily a matter of **readability**, not performance, for most use cases, especially for a small number of conditions.

### Quick Guide

- **Use if...else when:**
  - You have binary (true/false) conditions
  - You need to evaluate ranges or complex conditions
  - You need logical operators (`&&`, `||`)

- **Use switch when:**
  - You have many discrete, exact values to check
  - You want cleaner, more readable code
  - You're comparing a single variable against multiple values
