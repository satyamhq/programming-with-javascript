## Undefined, Null and Empty Values

In this lesson, you'll learn about three types of empty values in JavaScript: the **null** datatype, the **undefined** datatype, and **empty strings**.

---

## 1. Null

**Null** represents the **intentional absence of any object value**.

### Characteristics

- Explicitly assigned to indicate "no value"
- Also a return value of some built-in JavaScript methods

### Example: Using the match() Method
```js
const letters = "abc";

// Search for letter 'a'
letters.match("a");
// Returns an array confirming 'a' was found

// Search for letter 'd'
letters.match("d");
// Returns null (letter not found, array can't be built)
```

When the `match()` method cannot find the letter, it returns `null` to indicate the **absence of an object**.

---

## 2. Undefined

**Undefined** indicates that a variable has been declared but has **not been assigned a value**.

### Characteristics

- Can only hold one value: `undefined`
- Automatically assigned by JavaScript when no value is given
- Acts like a placeholder for a value that should exist

### Common Scenarios

#### Scenario 1: Functions Return undefined by Default
```js
function greet() {
  console.log("Hello");
}

greet();
// Output:
// Hello
// undefined
```

The `undefined` appears because `console.log()` is a function that doesn't return a specific value.

#### Scenario 2: Variables Declared Without Assignment
```js
let noise;
console.log(noise); // undefined

noise = "thunder";
console.log(noise); // thunder
```

JavaScript automatically assigns `undefined` to variables that are declared but not assigned.

#### Scenario 3: Using Variables Before Declaration
```js
console.log(noise); // undefined (if declared later with var)
var noise = "thunder";
console.log(noise); // thunder
```

Even if a declaration assigns a value, any uses of the variable **before** the declaration will return `undefined`.

**Best Practice:** Always assign values when you declare variables.

---

### Undefined vs ReferenceError
```js
let myVar;
console.log(myVar); // undefined

console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined
```

**Key Difference:**
- **Undefined**: Variable is declared but not assigned
- **ReferenceError**: Variable hasn't been declared at all

---

### Scenario 4: Accessing Non-Existent Object Properties
```js
const game = {
  score: 1000
};

console.log(game.score); // 1000
console.log(game.Score); // undefined (property doesn't exist)
```

JavaScript returns `undefined` when you try to access a property that doesn't exist.

---

## 3. Empty Strings

An **empty string** is a string with **no characters** inside it.

### Creating Empty Strings
```js
let emptyString1 = "";
let emptyString2 = '';
let emptyString3 = ``;
```

All three methods create an empty string using:
- Single quotes `''`
- Double quotes `""`
- Template literals ` `` `

---

## Comparison: Null vs Undefined vs Empty String

| Value | Type | Meaning | When Used |
|-------|------|---------|-----------|
| `null` | Object | Intentional absence of value | Explicitly assigned to indicate "no object" |
| `undefined` | Undefined | Variable declared but not assigned | Automatic placeholder by JavaScript |
| `""` | String | Empty text | String with zero characters |

---

## Examples Comparing the Three
```js
let a = null;
let b;
let c = "";

console.log(a); // null
console.log(b); // undefined
console.log(c); // "" (empty string)

console.log(typeof a); // object
console.log(typeof b); // undefined
console.log(typeof c); // string
```

---

## Common Use Cases

### Null
- Intentionally clearing an object reference
- Method returns indicating "not found"
- Resetting a variable to "no value"

### Undefined
- Variables declared but not initialized
- Function parameters not provided
- Missing object properties
- Functions without explicit return statements

### Empty String
- User hasn't entered text yet
- Clearing text input
- Placeholder for string values

---

## Best Practices

### ✅ DO
- Assign values when declaring variables
- Use `null` to intentionally indicate "no value"
- Check for `undefined` before using variables

### ❌ DON'T
- Rely on `undefined` for intentional "empty" states
- Confuse `null` with `undefined`
- Use variables before declaring them

---

## Complete Example
```js
// Null - intentional absence
let result = "abc".match("d");
console.log(result); // null

// Undefined - not assigned
let myVar;
console.log(myVar); // undefined

// Empty string - zero characters
let emptyText = "";
console.log(emptyText); // ""

// Object property that doesn't exist
const person = { name: "Alice" };
console.log(person.age); // undefined

// Function without return
function doSomething() {
  console.log("doing something");
}
console.log(doSomething()); // undefined
```

---

## Summary

- **Null**: Intentional absence of an object value (explicitly assigned)
- **Undefined**: Variable declared but not assigned (automatic placeholder)
- **Empty String**: String with no characters (`""`, `''`, or ` `` `)
- `undefined` acts as a placeholder for values that should exist but haven't been specified
- Always assign values to variables when declaring them for best practice
- Use `null` when you intentionally want to indicate "no value"

Understanding these empty values helps you write clearer, more predictable JavaScript code!
