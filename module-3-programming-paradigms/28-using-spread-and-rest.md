# Using Spread and Rest

## Introduction

In this reading, you'll learn how to join arrays and objects using the spread operator.

You will also discover how to use the spread operator to:

- Add new members to arrays without using the `push()` method
- Convert a string to an array
- Copy either an object or an array into a separate object

**Recall:** The `push()` and `pop()` methods are used to add and remove items from the end of an array.

## Notes on Using the Rest Operator

By using the rest operator, you can gather multiple elements into a single array or object. It's useful for handling remaining items in destructuring or collecting arguments in functions.

### Example: Array Destructuring

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

### Example: Collecting Function Arguments

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

## Differences Between Spread and Rest Operators

### Spread Operator

- **Expands** arrays, objects, or strings into individual elements or properties
- Used for concatenation, copying, or passing arguments

### Rest Operator

- **Gathers** multiple elements into a single array or object
- Used in destructuring or collecting function arguments

## Join Arrays and Objects Using the Spread Operator

### Concatenating Arrays

Using the spread operator, it's easy to concatenate arrays:

```js
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries);
```

**Output:**

```js
['apple', 'pear', 'plum', 'blueberry', 'strawberry']
```

### Joining Objects

It's also easy to join objects:

```js
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}
```

## Add New Members to Arrays Without Using the push() Method

Here's how to use the spread operator to easily add one or more members to an existing array:

```js
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
```

**Output:**

```js
['onion', 'parsley', 'carrot', 'beetroot']
```

## Convert a String to an Array Using the Spread Operator

Given a string, it's easy to spread it out into separate array items:

```js
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
```

## Copy Either an Object or an Array into a Separate One

### Copying an Object

Here's how to copy an object into a completely separate object, using the spread operator:

```js
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed);
```

**Output:**

```
201 200
```

The objects are independent - changing `car1` doesn't affect `car2`.

### Copying an Array

You can copy an array into a completely separate array, also using the spread operator:

```js
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];

fruits1.pop();

console.log(fruits1, "not", fruits2);
```

**Output:**

```
['apples'] 'not' ['apples', 'pears']
```

Again, the arrays are independent - modifying `fruits1` doesn't affect `fruits2`.

## Important Note: Shallow Copy

**Note:** The spread operator only performs a **shallow copy** of the source array or object. This means:

- For primitive values (strings, numbers, booleans), a true copy is made
- For nested objects or arrays, only the reference is copied, not the nested data itself

### Example of Shallow Copy Limitation

```js
const original = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

const copy = {...original};

copy.address.city = 'Boston';

console.log(original.address.city); // 'Boston' - also changed!
```

The nested `address` object is shared between `original` and `copy`.

## Summary

The spread operator (`...`) is powerful for:

- **Concatenating arrays**: `[...arr1, ...arr2]`
- **Joining objects**: `{...obj1, ...obj2}`
- **Adding array elements**: `[...arr, newItem]`
- **Converting strings to arrays**: `[...string]`
- **Copying arrays and objects**: `{...obj}` or `[...arr]` (shallow copy)

The rest operator (`...`) is useful for:

- **Destructuring**: `const [first, ...rest] = array`
- **Function parameters**: `function func(...args)`

There are many more tricks that you can perform with the spread operator. Some of them are really useful when you start working with libraries such as React.
