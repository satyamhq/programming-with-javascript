# Data Structures Examples

## Overview

This reading covers common examples of working with **Object**, **Array**, **Map**, and **Set** data structures in JavaScript.

**Note:** This does not include advanced data structures like Queues or Linked Lists, which can be custom-coded in JavaScript but are beyond this scope.

## Working with Arrays in JavaScript

Arrays come with built-in methods that make data manipulation easier. We'll focus on three specific methods:

1. **forEach**
2. **filter**
3. **map**

### The forEach() Method

The `forEach()` method allows you to loop over each array member.

#### Basic Syntax

```js
const fruits = ['kiwi', 'mango', 'apple', 'pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);
```

**Output:**
```
0. kiwi
1. mango
2. apple
3. pear
```

#### How It Works

- `forEach()` accepts a function that will work on each array item
- **First parameter:** Current array item
- **Second parameter (optional):** Index

#### Inline Function Version

```js
const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
```

**Output:**
```
0. onion
1. garlic
2. potato
```

This makes for more compact code, but perhaps somewhat harder to read.

**Note:** Arrow functions can be used to increase readability. See additional reading for more details.

### The filter() Method

The `filter()` method filters arrays based on a specific test. Array items that pass the test are returned.

#### Example

```js
const nums = [0, 10, 20, 30, 40, 50];

const result = nums.filter(function(num) {
    return num > 20;
});

console.log(result);
```

**Output:**
```
[30, 40, 50]
```

#### How It Works

- `filter()` accepts a function
- That function performs a test on each array item
- Items that return `true` are included in the new array
- `num` represents individual array elements being checked

### The map() Method

The `map()` method is used to transform each array item into another value based on the work performed inside the function.

#### Example

```js
const result = [0, 10, 20, 30, 40, 50].map(function(num) {
    return num / 10;
});

console.log(result);
```

**Output:**
```
[0, 1, 2, 3, 4, 5]
```

#### How It Works

- `map()` creates a new array
- Each item is transformed by the function
- Returns a new array with transformed values

### Comparison of Array Methods

| Method | Purpose | Returns |
|--------|---------|---------|
| **forEach()** | Loop over items | undefined (just executes function) |
| **filter()** | Select items that pass a test | New array with filtered items |
| **map()** | Transform each item | New array with transformed items |

## Working with Objects in JavaScript

### Converting Object to Array

Here's an example of converting an object to an array:

```js
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
};

const droneKeys = Object.keys(drone);

droneKeys.forEach(function(key) {
    result.push(key, drone[key]);
});

console.log(result);
```

**Output:**
```
['speed', 100, 'color', 'yellow']
```

### Important Note

While this is possible and works, having to do something like this might mean you haven't chosen the correct data structure to work with.

**Reality Check:** Sometimes you don't get to pick the data structure. Data might come from a third-party provider, and you must code your program to consume it.

**Coming Up:** You'll learn more about data interchange on the web with **JSON (JavaScript Object Notation)**.

## Working with Maps in JavaScript

### Creating a Map

Use the `Map` constructor:

```js
new Map();
```

### Map vs Object

A Map is similar to an object in JavaScript, but:
- **No inheritance**
- **No prototypes**
- This makes it useful as clean data storage

### Example

```js
let bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
```

**Output:**
```
Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
```

### Getting Values

Use the `get()` method:

```js
bestBoxers.get(1); // 'The Champion'
```

### Map Methods

```js
let map = new Map();

// Set values
map.set('key1', 'value1');
map.set('key2', 'value2');

// Get value
map.get('key1'); // 'value1'

// Check if key exists
map.has('key1'); // true

// Delete entry
map.delete('key1');

// Get size
map.size; // 1

// Clear all
map.clear();
```

## Working with Sets in JavaScript

### What is a Set?

A **Set** is a collection of **unique values**.

### Creating a Set

Use the `Set` constructor:

```js
new Set();
```

### Removing Duplicates from Array

The Set constructor can accept an array, making it useful for filtering unique members:

```js
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);

console.log(uniqueFruits);
```

**Output:**
```
Set(3) {'apple', 'pear', 'plum'}
```

### Set Methods

```js
let set = new Set();

// Add values
set.add('apple');
set.add('pear');
set.add('apple'); // Won't be added - duplicate

// Check if value exists
set.has('apple'); // true

// Delete value
set.delete('apple');

// Get size
set.size; // 1

// Clear all
set.clear();

// Convert to array
let arr = [...set]; // or Array.from(set)
```

## Complete Examples

### Example 1: forEach with Arrow Function

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));
```

**Output:**
```
2
4
6
8
10
```

### Example 2: Chaining filter and map

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num > 5)
    .map(num => num * 2);

console.log(result);
```

**Output:**
```
[12, 14, 16, 18, 20]
```

### Example 3: Map for Data Storage

```js
let userRoles = new Map();

userRoles.set('alice', 'admin');
userRoles.set('bob', 'editor');
userRoles.set('charlie', 'viewer');

console.log(userRoles.get('alice')); // 'admin'
console.log(userRoles.size);         // 3
```

### Example 4: Set for Unique Values

```js
const ids = [101, 102, 103, 101, 104, 102, 105];
const uniqueIds = new Set(ids);

console.log(uniqueIds);           // Set(5) {101, 102, 103, 104, 105}
console.log(uniqueIds.size);      // 5
console.log([...uniqueIds]);      // [101, 102, 103, 104, 105]
```

## Other Data Structures in JavaScript

Besides built-in data structures, it's possible to build **non-native, custom data structures**. These come built-in natively in some other programming languages.

### Advanced Data Structures (Not Covered)

- **Queues**
- **Linked Lists** (singly-linked and doubly-linked)
- **Trees**
- **Graphs**

For resources on building these data structures, refer to the additional resources reading at the end of this lesson.

## Summary Table

| Data Structure | Ordered | Unique Values | Key-Value | Best For |
|----------------|---------|---------------|-----------|----------|
| **Array** | ✅ | ❌ | ❌ | Ordered collections, iteration |
| **Object** | ❌ | ❌ | ✅ | Key-value storage (string keys) |
| **Map** | ✅ | ❌ | ✅ | Key-value storage (any key type) |
| **Set** | ❌ | ✅ | ❌ | Unique value collections |

## Key Array Methods Summary

### forEach()
- **Purpose:** Execute function for each element
- **Returns:** undefined
- **Use case:** Side effects (logging, modifying external variables)

```js
array.forEach(item => console.log(item));
```

### filter()
- **Purpose:** Create new array with elements that pass test
- **Returns:** New array
- **Use case:** Selecting specific items

```js
const filtered = array.filter(item => item > 10);
```

### map()
- **Purpose:** Transform each element
- **Returns:** New array with transformed values
- **Use case:** Converting/transforming data

```js
const doubled = array.map(item => item * 2);
```

## Best Practices

1. **Choose the right data structure** for your task
2. **Use forEach** for simple iteration with side effects
3. **Use filter** to select items that meet criteria
4. **Use map** to transform data
5. **Chain methods** for complex operations
6. **Use Map** instead of objects for clean data storage
7. **Use Set** to ensure uniqueness

## Conclusion

JavaScript offers essential data structures like **Objects**, **Arrays**, **Maps**, and **Sets**, each serving different purposes. By mastering methods like `forEach`, `filter`, and `map`, you can efficiently manage and manipulate data.

While advanced structures like Queues and Linked Lists exist, this reading focused on the basics to provide a strong foundation for your coding journey.

### Key Takeaways

- **Arrays** have powerful built-in methods for iteration and transformation
- **Objects** are great for key-value pairs with string keys
- **Maps** offer key-value storage without prototype inheritance
- **Sets** automatically ensure value uniqueness
- Choosing the right data structure affects the code you can write
- Built-in functionality makes certain tasks easier or harder
