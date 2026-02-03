## A Closer Look at Strings

In this lesson, you'll learn about the array-like characteristics of strings and explore string manipulation using the concatenation operator.

---

## What is an Iterable?

In JavaScript, an **iterable** is any datatype that can be iterated over using a `for...of` loop.

### Examples of Iterables

- Arrays
- Strings

---

## Strings are Array-Like

Strings behave like arrays in JavaScript, which means:

- You can access individual characters using index notation
- You can use the `length` property
- You can iterate over them with loops

### Example: Iterating Over an Array
```js
const veggies = ['onion', 'parsley', 'carrot'];

console.log(veggies.length);  // Output: 3
console.log(veggies[0]);      // Output: onion
console.log(veggies[1]);      // Output: parsley

for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}
// Output:
// onion
// parsley
// carrot
```

### Example: Iterating Over a String
```js
const greeting = 'howdy';

console.log(greeting.length);  // Output: 5
console.log(greeting[0]);      // Output: h
console.log(greeting[1]);      // Output: o

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}
// Output:
// h
// o
// w
// d
// y
```

---

## Strings are NOT Arrays

Despite similar behavior, strings are **not** arrays. You cannot use all array methods on strings.

### Example: Array Methods Don't Work on Strings
```js
const greet = 'hello';

console.log(greet.pop());
// Error: TypeError: greet.pop is not a function
```

This confirms that strings do not have access to array methods like `pop()`.

---

## String Concatenation

You can join strings together using:

1. The **`+` operator** (concatenation operator)
2. The **`concat()` method**

### Example: Using the + Operator
```js
const greet = 'hello';
const user = 'Lisa';

console.log(greet + user);  // Output: helloLisa
```

### Example: Using the concat() Method
```js
const greet = 'hello';
const user = 'Lisa';

console.log(greet.concat(user));  // Output: helloLisa
```

Both approaches produce the same result: joining strings together.

---

## Summary

- **Iterables**: Datatypes that can be looped over (arrays, strings)
- **Strings are array-like**: You can access characters by index and use `length`
- **Strings are NOT arrays**: Array methods like `pop()` don't work on strings
- **Concatenation**: Use `+` operator or `concat()` method to join strings

Try experimenting with string manipulation in your own code!
