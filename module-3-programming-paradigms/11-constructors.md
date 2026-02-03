# Constructors

## Learning Objectives

By the end of this lesson, you'll understand:

- What constructors are and how they work in JavaScript
- How to use built-in constructors like Date and Math
- How to define and use custom constructor functions
- When to use object literals instead of constructors for better performance

## Built-in Object Types

JavaScript has many built-in object types (commonly known as "native objects"):

- Math
- Date
- Object
- Function
- Boolean
- Symbol
- Array
- Map
- Set
- Promise
- JSON
- And many more

## What are Constructor Functions?

**Constructor functions** (commonly called "constructors") are special functions that allow us to build instances of built-in native objects.

### Key Characteristics

- All constructor functions are **capitalized**
- Must be prepended with the `new` operator

### Example: Date Constructor

```js
new Date();
// Output: Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)
```

This returns the current date and time.

## Objects Without Constructors

Not all built-in objects have constructor functions.

### Example: Math Object

```js
new Math(); // Uncaught TypeError: Math is not a constructor
```

### Why Some Objects Don't Have Constructors

**Objects with constructors (like Date):**
- Need to instantiate specific instances
- Each instance has unique data
- Example: Each Date object has a different timestamp

**Objects without constructors (like Math):**
- Static objects whose properties and methods can be accessed directly
- No need to build an instance to use functionality
- No point in storing data in a specific instance

### Using Math Without a Constructor

```js
Math.pow(2, 5); // Output: 32
```

No need to build an instance - just use the built-in object directly.

## Custom Constructor Functions

You can define your own constructor functions.

### Example: Ice Cream Constructor

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
```

### Creating Instances

```js
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

kiwiIcecream;   // Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream;  // Icecream {flavor: 'apple', meltIt: ƒ}
```

You've just built two instance objects of `Icecream` type!

### Using the Instances

```js
kiwiIcecream.meltIt();  // "The kiwi icecream has melted"
appleIcecream.meltIt(); // "The apple icecream has melted"
```

## Performance and Best Practices

Using constructor functions on all built-in objects is **not always the best approach**.

### Avoid Constructors for Primitive Types

This is especially true for **String**, **Number**, and **Boolean**.

### Example: String Constructor

```js
let apple = new String("apple");
apple; // String {"apple"}
```

The `apple` variable is an **object** of type String.

### String Literal (Better Performance)

```js
let pear = "pear";
pear; // "pear"
```

The `pear` variable is a **string literal** (primitive value).

### Why Primitives are Better

**Performance:**
- Primitive values are always more performant than objects
- Objects require more memory and processing

**Comparison Issues:**
```js
new String('plum') === new String('plum'); // false
"plum" === "plum";                         // true
```

**Why false for objects?**
- Not the values being compared, but the memory location where objects are saved
- Each object in JavaScript is unique

## Alternative Patterns and Literals

### Don't Use Constructor for Plain Objects

**Bad:**
```js
new Object()
```

**Good:**
```js
{}  // Object literal syntax
```

### RegExp (Regular Expressions)

RegExp is a built-in object used to pattern-match strings.

**Using Constructor:**
```js
new RegExp()
```

**Using Pattern Literal (Better):**
```js
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```

### Recommended Literal Syntax

Instead of constructors, use literals:

| Constructor | Literal | Example |
|-------------|---------|---------|
| `new Array()` | `[]` | `let arr = [];` |
| `new Function()` | `function() {}` | `let fn = function() {};` |
| `new RegExp()` | `/pattern/` | `let pattern = /d/;` |
| `new Object()` | `{}` | `let obj = {};` |

## When to Use Constructors

You **can and should** use constructors for these built-in types:

```js
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```

**Note:** This list is not exhaustive.

## Summary Comparison

### Primitives: Literal vs Constructor

**String:**
```js
// Literal (recommended)
let fruit1 = "apple";

// Constructor (avoid)
let fruit2 = new String("apple");
```

**Number:**
```js
// Literal (recommended)
let num1 = 42;

// Constructor (avoid)
let num2 = new Number(42);
```

**Boolean:**
```js
// Literal (recommended)
let bool1 = true;

// Constructor (avoid)
let bool2 = new Boolean(true);
```

### Objects: Literal vs Constructor

**Object:**
```js
// Literal (recommended)
let obj1 = {};

// Constructor (avoid)
let obj2 = new Object();
```

**Array:**
```js
// Literal (recommended)
let arr1 = [];

// Constructor (avoid)
let arr2 = new Array();
```

## Best Practices Summary

### ✅ DO Use Constructors For:
- Date objects
- Error objects
- Map, Set, WeakMap, WeakSet
- Promise objects
- Custom constructor functions

### ❌ DON'T Use Constructors For:
- String primitives (use `"string"`)
- Number primitives (use `42`)
- Boolean primitives (use `true/false`)
- Plain objects (use `{}`)
- Arrays (use `[]`)
- Regular expressions (use `/pattern/`)

## Key Takeaways

1. **Constructor functions** create instances of built-in objects
2. **Must use `new` operator** to call constructors
3. **Not all objects have constructors** (e.g., Math)
4. **Can create custom constructors** for your own object types
5. **Primitive literals are more performant** than object constructors
6. **Object comparisons** compare memory locations, not values
7. **Use literal syntax** when possible for better performance

## Complete Example: Custom Constructor

```js
// Define constructor
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getInfo = function() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

// Create instances
let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2021);

// Use instances
console.log(car1.getInfo()); // "2020 Toyota Camry"
console.log(car2.getInfo()); // "2021 Honda Civic"
```

## Conclusion

Understanding constructors in JavaScript is crucial for building efficient and flexible code. By mastering both built-in and custom constructors, you'll be able to:

- Create dynamic objects tailored to your needs
- Improve performance by choosing the right approach
- Follow best practices
- Write clean, maintainable code

This knowledge will make you a more proficient JavaScript developer.

## Additional Resources

For more information about RegExp and regular expressions, refer to the "Additional Reading" section in the lesson materials.
