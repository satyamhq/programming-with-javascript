# Template Literals Examples

## What are Template Literals?

**Template literals** are an alternative way of working with strings, introduced in the ES6 addition to JavaScript.

## Traditional Strings (Before ES6)

Before ES6, strings could only be delimited with single or double quotes:

```js
'Hello, World!'
"Hello, World!"
```

## Template Literals (ES6+)

ES6 introduced the use of **backtick characters** as delimiters:

```js
`Hello, World!`
```

This is called a **template string** or **template literal**.

**Note:** On most keyboards, the backtick character (`` ` ``) is located above the TAB key, to the left of the number 1 key.

## Placeholder Syntax

With template literals, expressions can be embedded in a **placeholder**.

```js
${expression}
```

**How it works:**
- Anything **within** the curly brackets `${}` is treated as **JavaScript**
- Anything **outside** the brackets is treated as a **string**

## Differences Between Template Literals and Regular Strings

### 1. Variable Interpolation

**With Template Literals (ES6):**
```js
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`);
```

**Output:**
```
Hello World!
```

**With Regular Strings (ES5):**
```js
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!");
```

**Output:**
```
Hello World!
```

**Advantages:**
- No need for the `+` operator
- No need for single or double quotes to separate variables from strings
- Cleaner, more readable code

### 2. Multi-line Strings

**With Template Literals (Works!):**
```js
`Hello,
World
!
`
```

This is perfectly valid syntax.

**With Regular Strings (Syntax Error!):**
```js
"Hello,
World"
```

This code will **throw a syntax error** when run.

**Key Point:** Template literals allow for **multi-line strings**, which is not possible with regular string literals.

### 3. Expression Evaluation

Template literals allow for **expression evaluation** inside placeholders.

**Arithmetic Operations:**
```js
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);
```

**Output:**
```
5 stars!
```

**Ternary Expressions:**
```js
let age = 18;
console.log(`You are ${age >= 18 ? 'an adult' : 'a minor'}.`);
```

**Output:**
```
You are an adult.
```

## Complete Examples

### Example 1: Basic Variable Interpolation

```js
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;

console.log(fullName); // Output: John Doe
```

### Example 2: Multi-line Strings

```js
let message = `Dear Customer,

Thank you for your purchase.

Best regards,
The Team`;

console.log(message);
```

**Output:**
```
Dear Customer,

Thank you for your purchase.

Best regards,
The Team
```

### Example 3: Expression Evaluation

```js
let price = 10;
let quantity = 5;
let total = `Total: $${price * quantity}`;

console.log(total); // Output: Total: $50
```

### Example 4: Ternary Expression

```js
let hour = 14;
let greeting = `Good ${hour < 12 ? 'morning' : 'afternoon'}!`;

console.log(greeting); // Output: Good afternoon!
```

### Example 5: Function Calls

```js
function getDiscount(price) {
    return price * 0.9;
}

let originalPrice = 100;
console.log(`Original: $${originalPrice}, Discounted: $${getDiscount(originalPrice)}`);
```

**Output:**
```
Original: $100, Discounted: $90
```

## Comparison: ES5 vs ES6

### ES5 (Concatenation)

```js
var name = "Alice";
var age = 25;
var message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message);
```

### ES6 (Template Literals)

```js
let name = "Alice";
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
```

**Both output:**
```
Hello, my name is Alice and I am 25 years old.
```

## Advanced Use Cases

While beyond the scope of this reading, template literals also support:

- **Nested template literals**
- **Tagged templates**

For more information, refer to the 'Additional Resources' reading at the end of this lesson.

## Summary

### Key Features of Template Literals

| Feature | Regular Strings | Template Literals |
|---------|----------------|-------------------|
| **Delimiter** | `'` or `"` | `` ` `` |
| **Variable interpolation** | ❌ (requires `+`) | ✅ `${variable}` |
| **Multi-line strings** | ❌ (syntax error) | ✅ |
| **Expression evaluation** | ❌ | ✅ `${expression}` |
| **Readability** | Less readable | More readable |

### When to Use Template Literals

✅ **Use template literals when:**
- Embedding variables in strings
- Creating multi-line strings
- Evaluating expressions within strings
- Building complex strings with multiple variables

❌ **Regular strings work fine for:**
- Simple, static strings
- Single-line text without variables

### Syntax Reminder

**Template Literal:**
```js
`String text ${expression} more string text`
```

**Expression Placeholder:**
```js
${variable}
${arithmetic}
${function()}
${condition ? true : false}
```

## Best Practices

1. **Use template literals** for strings with variables or expressions
2. **Keep expressions simple** within `${}` for readability
3. **Use multi-line capability** for better code organization
4. **Prefer template literals** over concatenation for cleaner code

## Quick Reference

```js
// Basic usage
`Hello, World!`

// Variable interpolation
`Hello, ${name}!`

// Multi-line
`Line 1
Line 2
Line 3`

// Expression evaluation
`Total: ${price * quantity}`

// Ternary expression
`You are ${age >= 18 ? 'adult' : 'minor'}`

// Function call
`Result: ${calculate(10, 20)}`
```

Template literals are a powerful ES6 feature that makes working with strings in JavaScript more intuitive and expressive!
