# JavaScript Object Notation - JSON

## Introduction

This lesson will help you learn to convert a JSON string to a regular JavaScript object and vice versa.

## What is JSON?

If you type a piece of JSON code into your browser's console, it should not produce any errors.

### Example

A JSON string with one property named `greeting` that contains the value of the string `"hello"`:

```js
'{"greeting":"hello"}'
```

If you run this code, you get back the same result.

**It's worth remembering that JSON is basically just an object represented in the form of a string.** It has some specific formatting, but it's a string nonetheless.

## Converting JSON to JavaScript Objects

To work with JSON, it is common to convert it back to a JavaScript object to work with its properties and methods.

To do this, you need to use the **global built-in JSON object** and its `parse` method.

### Step 1: Store the JSON String

First, assign the JSON string to a variable using the `const` keyword:

```js
const JSONstr = '{"greeting":"hello"}';
```

### Step 2: Parse the JSON String

Run the `JSON.parse()` method on this variable:

```js
JSON.parse(JSONstr);
```

This returns a regular JavaScript object.

### Step 3: Save as a Variable

Save this object as a variable:

```js
const aPlainObj = JSON.parse(JSONstr);
```

### Step 4: Manipulate the Object

Now that the JSON string is stored in a regular JavaScript object, you can manipulate it just like any other JavaScript object.

#### Example: Reassigning a Property Value

```js
aPlainObj.greeting = "hi";
```

This outputs `"hi"`.

You can confirm this by inspecting the object - notice that its structure has been updated.

### Complete Example

```js
// Step 1: Create JSON string
const JSONstr = '{"greeting":"hello"}';

// Step 2: Parse to JavaScript object
const aPlainObj = JSON.parse(JSONstr);

// Step 3: Manipulate the object
aPlainObj.greeting = "hi";

// Step 4: Verify
console.log(aPlainObj.greeting); // "hi"
console.log(aPlainObj); // { greeting: "hi" }
```

## Converting JavaScript Objects to JSON Strings

You can also go the other way and convert a regular object to a JSON string using the **`stringify()` method** of the JSON object.

### Step 1: Create a JavaScript Object

```js
const data = {
    name: "John",
    age: 30,
    city: "New York"
};
```

### Step 2: Stringify the Object

To run the `JSON.stringify()` method on this object:

```js
JSON.stringify(data);
```

### Result

The result is a JSON string:

```js
'{"name":"John","age":30,"city":"New York"}'
```

**Notice that both the object's keys and its values are double-quoted strings in the JSON syntax.**

### Complete Example

```js
// Create object
const data = {
    name: "John",
    age: 30,
    city: "New York"
};

// Convert to JSON string
const jsonString = JSON.stringify(data);

console.log(jsonString);
// '{"name":"John","age":30,"city":"New York"}'
```

## Important Limitations of JSON

### 1. No Functions

It's important to remember that while plain JavaScript objects can hold functions, **JSON strings cannot**.

```js
const obj = {
    name: "John",
    greet: function() {
        console.log("Hello");
    }
};

JSON.stringify(obj);
// '{"name":"John"}' - the function is excluded!
```

When you stringify a JavaScript object containing a method, that **method will be excluded** from the stringify operation.

### 2. No Comments

Valid JSON doesn't allow the use of JavaScript comments.

```js
// This is INVALID JSON
'{
    // This is a comment
    "name": "John"
}'

// This is VALID JSON
'{
    "name": "John"
}'
```

### 3. Other Excluded Data Types

When stringifying, these are also excluded or cause errors:

- `undefined` - excluded
- `Symbol` - excluded
- `BigInt` - throws error
- Functions - excluded

```js
const obj = {
    name: "John",
    age: undefined,
    greet: function() {}
};

JSON.stringify(obj);
// '{"name":"John"}' - undefined and function are excluded
```

## The Two Main JSON Methods

### JSON.parse()

Converts a JSON string to a JavaScript object.

**Syntax:**

```js
JSON.parse(jsonString)
```

**Example:**

```js
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John"
```

### JSON.stringify()

Converts a JavaScript object to a JSON string.

**Syntax:**

```js
JSON.stringify(object)
```

**Example:**

```js
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30}'
```

## Pretty Printing JSON

You can format JSON with indentation for better readability:

```js
const obj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

const prettyJSON = JSON.stringify(obj, null, 2);
console.log(prettyJSON);
```

**Output:**

```json
{
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  }
}
```

## Working with APIs

If you work with retrieving data from APIs, converting JSON strings to JavaScript objects will be a **standard workflow**.

### Typical API Workflow

```js
// 1. Fetch data from API (returns JSON string)
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        // 2. Work with JavaScript object
        console.log(data.name);
        console.log(data.age);
    });
```

You can then easily access the object's properties programmatically.

## Practical Examples

### Example 1: Storing Data in localStorage

```js
// Save object to localStorage as JSON string
const user = { name: "John", age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse back to object
const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // "John"
```

### Example 2: Sending Data to Server

```js
const userData = {
    username: "john_doe",
    email: "john@example.com"
};

fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData) // Convert to JSON string
});
```

### Example 3: Deep Cloning Objects

```js
const original = {
    name: "John",
    address: { city: "New York" }
};

// Deep clone using JSON
const clone = JSON.parse(JSON.stringify(original));

clone.address.city = "Boston";

console.log(original.address.city); // "New York" - unchanged
console.log(clone.address.city);    // "Boston"
```

**Note:** This method has limitations - it won't work with functions, dates, or circular references.

## Summary

### Key Takeaways

- **JSON.parse()**: Converts a JSON string to a JavaScript object
- **JSON.stringify()**: Converts a JavaScript object to a JSON string
- JSON is just a string with specific formatting rules
- JSON cannot contain functions or comments
- When stringifying, methods and certain data types are excluded
- This is a vital tool when working with APIs

### Common Use Cases

- Retrieving data from APIs
- Storing data in localStorage
- Sending data to servers
- Deep cloning simple objects
- Data serialization and deserialization

## Conclusion

You've learned how to:

1. Convert a JSON string to a JavaScript object with the `parse` method
2. Convert a JavaScript object to a JSON string using the `stringify` method

This is a vital tool in your toolbelt, and it's encouraged to practice this, especially when working with APIs and data exchange.
