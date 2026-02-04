# Working with Template Literals

## Strings in ES5

In JavaScript ES5, strings are built using **single quotes** or **double quotes**.

### Example: ES5 String Concatenation

```js
let noMultiLine = 'No multi-line strings in ES5';
console.log('Did you know? ' + noMultiLine);
```

**Output:**
```
Did you know? No multi-line strings in ES5
```

This uses the `+` operator for concatenation.

## The Problem with ES5 Multi-line Strings

### Attempting Multi-line (Causes Error)

```js
let noMultiLine = 'No multi-line
strings in ES5';
```

**Error:**
```
Unterminated string literal
```

**Why?** JavaScript tells us that our single-line string is not coded correctly—it's missing the expected closing quotation symbol.

**Key Point:** Using ES5 methods, you can only create strings using single or double quotations, and this method **does not support multi-line strings**.

## Template Literals in ES6

ES6 introduces **template literals** using **backtick characters** (`` ` ``).

### Syntax

```js
let multiLine = `Multi-line
strings are now
possible in ES6`;
```

**Location:** The backtick symbol (`` ` ``) is usually located above the TAB key, to the left of the number 1 key on your keyboard.

### Multi-line Example

```js
let multiLine = `This is line 1
This is line 2
This is line 3`;

console.log(multiLine);
```

**Output:**
```
This is line 1
This is line 2
This is line 3
```

Using template literals, you can add **as many lines as you want** without causing errors!

## Template Literals with Quotes

### No Conflict with Quotes

```js
let first = `He said, "Hello there!"`;
let second = `She replied, 'Hi!'`;

console.log(first);
console.log(second);
```

**Output:**
```
He said, "Hello there!"
She replied, 'Hi!'
```

**Key Point:** By using template literals, JavaScript does **not** consider quotes as string delimiters—they are just regular characters.

## Variable Interpolation

Instead of using the `+` operator for concatenation, you can use **variable interpolation**.

### Syntax

```js
${variableName}
```

- Enclose the variable name within **curly braces** `{}`
- Preceded by a **dollar symbol** `$`

### Example

```js
let first = `He said, "Hello there!"`;
let second = `She replied, 'Hi!'`;

console.log(`${first} ${second}`);
```

**Output:**
```
He said, "Hello there!" She replied, 'Hi!'
```

JavaScript combines everything and outputs the full string!

## Complete Examples

### Example 1: Multi-line String

**ES5 (Doesn't Work):**
```js
let message = 'This is line 1
This is line 2';  // Error!
```

**ES6 (Works!):**
```js
let message = `This is line 1
This is line 2`;

console.log(message);
```

**Output:**
```
This is line 1
This is line 2
```

### Example 2: Variable Interpolation

**ES5 (Concatenation):**
```js
var name = 'Alice';
var age = 25;
console.log('My name is ' + name + ' and I am ' + age + ' years old.');
```

**ES6 (Template Literals):**
```js
let name = 'Alice';
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
```

**Both Output:**
```
My name is Alice and I am 25 years old.
```

### Example 3: Quotes Inside Template Literals

```js
let first = `He said, "What's up?"`;
let second = `She replied, 'Nothing much!'`;

let conversation = `${first} ${second}`;
console.log(conversation);
```

**Output:**
```
He said, "What's up?" She replied, 'Nothing much!'
```

### Example 4: Multi-line with Variables

```js
let product = 'Laptop';
let price = 999;

let message = `Product: ${product}
Price: $${price}
Status: Available`;

console.log(message);
```

**Output:**
```
Product: Laptop
Price: $999
Status: Available
```

## Benefits of Template Literals

### 1. Multi-line Strings

✅ **Template Literals:**
```js
`Line 1
Line 2
Line 3`
```

❌ **Regular Strings:**
```js
'Line 1
Line 2'  // Syntax Error!
```

### 2. No Concatenation Needed

**Before (ES5):**
```js
console.log('Hello ' + name + ', you are ' + age + ' years old.');
```

**After (ES6):**
```js
console.log(`Hello ${name}, you are ${age} years old.`);
```

### 3. Quotes Don't Conflict

**Regular Strings:**
```js
let msg = 'He said, "Hello"';  // Need to escape or mix quotes
```

**Template Literals:**
```js
let msg = `He said, "Hello"`;  // No problem!
```

## Comparison Table

| Feature | Regular Strings | Template Literals |
|---------|----------------|-------------------|
| **Delimiter** | `'` or `"` | `` ` `` |
| **Multi-line** | ❌ Error | ✅ Works |
| **Variable interpolation** | ❌ Need `+` | ✅ `${var}` |
| **Quotes inside** | ⚠️ Must escape | ✅ No issue |
| **Readability** | Less readable | More readable |

## Key Syntax

### Backticks

```js
`This is a template literal`
```

### Variable Interpolation

```js
`Hello, ${name}!`
```

### Multi-line

```js
`Line 1
Line 2
Line 3`
```

### Quotes Inside

```js
`He said, "Hello" and she said, 'Hi'`
```

## Best Practices

1. **Use template literals** for strings with variables
2. **Use template literals** for multi-line strings
3. **Use backticks** instead of mixing quotes
4. **Keep interpolation simple** for readability
5. **Use template literals** for better coding experience

## Common Use Cases

### HTML Generation

```js
let name = 'Alice';
let html = `
  <div>
    <h1>Welcome, ${name}!</h1>
    <p>Glad to have you here.</p>
  </div>
`;
```

### SQL Queries

```js
let userId = 123;
let query = `
  SELECT * FROM users
  WHERE id = ${userId}
  AND active = true
`;
```

### API Messages

```js
let username = 'john_doe';
let message = `
  Dear ${username},
  
  Your account has been successfully created.
  
  Best regards,
  The Team
`;
```

## Summary

### What We Learned

1. **ES5 limitations:** No multi-line strings with quotes
2. **Template literals:** Use backticks (`` ` ``) for flexible strings
3. **Multi-line support:** Add as many lines as needed
4. **Variable interpolation:** Use `${variable}` instead of `+` concatenation
5. **No quote conflicts:** Quotes are regular characters in template literals

### Key Takeaways

- **Backticks** enable template literals
- **Multi-line** strings are possible
- **Variable interpolation** with `${}`
- **Quotes** don't cause conflicts
- **Better coding experience** overall

### Pattern to Remember

```js
// ES5
var message = 'Hello, ' + name + '!';

// ES6
let message = `Hello, ${name}!`;
```

With template literals, you don't need to worry about the limitations of using single and double quotes. This makes for a much better coding experience—just use backticks and variable interpolation!
