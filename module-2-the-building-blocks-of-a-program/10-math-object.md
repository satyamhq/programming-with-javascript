## The Math Object in JavaScript

In this lesson, you'll learn how to use the `random()` and `ceil()` methods of the Math object in JavaScript.

---

## Math.random() Method

The `random()` method generates a decimal number between **0** and **0.99**.

### Basic Usage
```js
const decimal = Math.random();
console.log(decimal); // Output: random decimal between 0 and 0.99
```

### Extending the Range

To output a number larger than 1, multiply the result by 10:
```js
const decimal = Math.random();
console.log(decimal);           // Random decimal (0 - 0.99)
console.log(decimal * 10);      // Random decimal (0 - 9.99)
```

---

## Math.ceil() Method

The `ceil()` method rounds **up** any decimal number to the nearest integer.

### Examples with Small Decimals
```js
const rounded = Math.ceil(0.0001);
console.log(rounded); // Output: 1

const rounded2 = Math.ceil(0.5);
console.log(rounded2); // Output: 1

const rounded3 = Math.ceil(0.99);
console.log(rounded3); // Output: 1
```

### Examples with Larger Numbers
```js
console.log(Math.ceil(1.01)); // Output: 2
console.log(Math.ceil(1.5));  // Output: 2
console.log(Math.ceil(2.99)); // Output: 3
```

**Key Point:** The `ceil()` method **always rounds upwards**.

---

## Combining random() and ceil()

You can combine both methods to generate a random integer between **0** and **10**.

### Step-by-Step

1. Generate a random decimal and multiply by 10
2. Pass the result through `Math.ceil()` to get an integer
3. Log the result
```js
const decimal = Math.random() * 10;
const rounded = Math.ceil(decimal);
console.log(rounded); // Output: random integer between 1 and 10
```

### Complete Example
```js
const decimal = Math.random() * 10;
const rounded = Math.ceil(decimal);
console.log(rounded);
```

Each time you run this code, you'll get a different integer between 1 and 10.

---

## Summary

- **Math.random()**: Generates a decimal between 0 and 0.99
- **Math.ceil()**: Rounds up to the nearest integer
- **Combined**: Create random integers by multiplying `Math.random()` and using `Math.ceil()`

Try experimenting with these methods in your own code to see what creative uses you can find!
