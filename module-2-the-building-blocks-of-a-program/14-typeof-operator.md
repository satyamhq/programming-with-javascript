## The typeof Operator

In this lesson, you'll learn how to use the `typeof` operator to identify the data type of elements in JavaScript.

---

## What is typeof?

The `typeof` operator accepts and evaluates a parameter and returns the **name of the data type** represented as a **string**.

### Syntax
```js
typeof(parameter)
```

---

## Using typeof with Different Data Types

### Strings
```js
var test = typeof("Hello");
console.log(test);
// Output: string
```

### Numbers
```js
var test = typeof(42);
console.log(test);
// Output: number
```

### Decimal Numbers
```js
var test = typeof(3.14);
console.log(test);
// Output: number
```

**Note:** Both integers and decimals return `number` as the data type.

---

### Booleans
```js
var test = typeof(true);
console.log(test);
// Output: boolean

var test = typeof(false);
console.log(test);
// Output: boolean
```

---

### Comparisons

You can pass comparisons as parameters since they evaluate to a single value.
```js
var test = typeof(1 < 2);
console.log(test);
// Output: boolean
```

The comparison `1 < 2` evaluates to `true`, which is a boolean value.

---

### Arrays
```js
var test = typeof([1, 2, 3]);
console.log(test);
// Output: object
```

**Important:** Arrays in JavaScript are actually **objects**, so `typeof` returns `object`.

---

### Objects
```js
var test = typeof({name: "John", age: 30});
console.log(test);
// Output: object
```

---

### Functions
```js
var test = typeof(function() {});
console.log(test);
// Output: function
```

---

## Complete Example
```js
// String
var test = typeof("Hello");
console.log(test); // string

// Number
var test = typeof(42);
console.log(test); // number

// Decimal
var test = typeof(3.14);
console.log(test); // number

// Boolean
var test = typeof(true);
console.log(test); // boolean

var test = typeof(false);
console.log(test); // boolean

// Comparison
var test = typeof(1 < 2);
console.log(test); // boolean

// Array
var test = typeof([1, 2, 3]);
console.log(test); // object

// Object
var test = typeof({key: "value"});
console.log(test); // object

// Function
var test = typeof(function() {});
console.log(test); // function
```

---

## Summary of Data Types

| Value | typeof Result |
|-------|---------------|
| `"Hello"` | `string` |
| `42` | `number` |
| `3.14` | `number` |
| `true` / `false` | `boolean` |
| `1 < 2` | `boolean` |
| `[1, 2, 3]` | `object` |
| `{key: "value"}` | `object` |
| `function() {}` | `function` |

---

## Key Takeaways

- `typeof` returns the **data type name** as a **string**
- Numbers (integers and decimals) both return `number`
- Comparisons return `boolean` because they evaluate to `true` or `false`
- **Arrays are objects** in JavaScript, so `typeof` returns `object`
- Functions have their own type: `function`

Try using `typeof` in your own code to check data types!
