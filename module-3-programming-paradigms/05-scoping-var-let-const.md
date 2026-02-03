# Scoping with var, let and const

## What is Scope?

**Scope** relates to code accessibility. It determines which parts of the code are accessible by different parts of the program.

## Types of Scope

### Global Scope

All code **outside** of functions is referred to as **global scope**.

```js
var globalVar = "I am global";

function myFunction() {
    console.log(globalVar); // Can access global variable
}
```

### Local Scope (Function Scope)

All code **inside** a function is known as **local scope**.

```js
function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible here
}

console.log(localVar); // Error: localVar is not defined
```

**Key Point:** A variable is only accessible in the function where it is declared.

**Note:** In ES5 JavaScript, only functions can build local scope.

### Block Scope (ES6)

Introduced in ES6, **block scope** states that a variable declared in a block of code is only accessible inside that block.

```js
{
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined
```

**How it works:**
- Block scope is built when you declare variables using `let` or `const`
- Variables become immediately scoped to the code block they were created in
- The scope is contained within curly braces `{}`

### Example: Same Variable Name in Different Scopes

```js
let user = "Global User";

{
    let user = "Block User";
    console.log(user); // Output: Block User
}

console.log(user); // Output: Global User
```

You can declare two separate variables with the same name if one is inside curly braces and the other is not. Each can only be accessed within its scope.

## The var Keyword (ES5)

Before ES6, the only way to declare a variable in JavaScript was to use the `var` keyword.

### Characteristics of var

The `var` keyword is very lenient:

1. **Can be used before declaration** (hoisting)
2. **Can be redeclared**
3. **Function-scoped or globally-scoped**
   - If declared inside a function, scoped to that function
   - If declared outside a function, scope is global

### Example

```js
console.log(user); // Output: undefined (not an error)
var user = "Miranda";

var user = "John"; // Can redeclare - no error
console.log(user); // Output: John
```

## The let and const Keywords (ES6)

With ES6, the suggested way to declare variables is to use `let` or `const`.

### Syntax Comparison

**ES5 with var:**
```js
var user = "Miranda";
```

**ES6 with let:**
```js
let user = "Miranda";
```

**ES6 with const:**
```js
const user = "Miranda";
```

Notice the syntax is very similar—only the keyword changes.

### Characteristics of let and const

The behavior of `let` and `const` is **more strict** than `var`:

1. **Cannot be used before declaration**
2. **Cannot be redeclared**
3. **Block-scoped** (even within if statements and loops)

### Examples

**Cannot use before declaration:**
```js
console.log(user); // Error: Cannot access 'user' before initialization
let user = "Miranda";
```

**Cannot redeclare:**
```js
let user = "Miranda";
let user = "John"; // Error: Identifier 'user' has already been declared
```

**Block-scoped in loops:**
```js
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

console.log(i); // Error: i is not defined
```

**Block-scoped in if statements:**
```js
if (true) {
    let message = "Hello";
    console.log(message); // Output: Hello
}

console.log(message); // Error: message is not defined
```

## When to Use var, let, or const

### Pro Tip

- **Use `let`** if the value might change in the future
- **Use `const`** if the value will never change
- **Avoid `var`** in modern JavaScript (ES6+)

### Examples

**Use let for values that change:**
```js
let score = 0;
score = 10; // Value can change
score = 20; // Value can change again
```

**Use const for values that don't change:**
```js
const PI = 3.14159;
const API_KEY = "abc123xyz";

PI = 3.14; // Error: Assignment to constant variable
```

## Summary Comparison

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function/Global | Block | Block |
| **Can be redeclared** | ✅ Yes | ❌ No | ❌ No |
| **Can be used before declaration** | ✅ Yes (undefined) | ❌ No | ❌ No |
| **Can be reassigned** | ✅ Yes | ✅ Yes | ❌ No |
| **Block-scoped in loops/if** | ❌ No | ✅ Yes | ✅ Yes |

## Best Practices

1. **Use `const` by default** - makes your code more predictable
2. **Use `let`** when you know the value will change
3. **Avoid `var`** in modern JavaScript - it's from ES5 and has confusing behavior

## Key Takeaways

- **Global scope:** Code outside functions
- **Local scope:** Code inside functions
- **Block scope:** Code inside curly braces (ES6 with `let`/`const`)
- **var:** Lenient, function/global scoped (ES5)
- **let:** Strict, block scoped, can be reassigned (ES6)
- **const:** Strict, block scoped, cannot be reassigned (ES6)
