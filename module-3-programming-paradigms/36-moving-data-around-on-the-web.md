# Moving Data Around on the Web

## Introduction

The modern web consists of millions and millions of web pages, connected services, and databases. There are websites communicating with other websites, getting data from data feeds and data providers, both paid and free.

All of these data flows must be facilitated with some kind of **data format**.

## The Birth of JSON

Around 2001, **Douglas Crockford** came up with a data interchange format based on JavaScript objects. The name given to this format was **JSON**, which stands for **JavaScript Object Notation**.

### Before JSON: XML

Before JSON, the most common data interchange file format was **XML (Extensible Markup Language)**.

However, XML had drawbacks:

- Due to XML's syntax, it required **more characters** to describe the data that was sent
- Since it was a specific stand-alone language, it wasn't as easily inter-operable with JavaScript

## Why JSON Became Dominant

The two major reasons for the JSON format becoming the dominant data interchange format are:

1. **Very lightweight**: Syntax very similar to "a stringified JavaScript object"
2. **Easier to handle in JavaScript code**: JSON, after all, is just JavaScript

## JSON and JavaScript

It is often said that **JSON is a subset of JavaScript**, meaning:

- It adheres to syntax rules of the JavaScript language
- It's even more strict in how proper JSON code should be formatted
- **All JSON code is JavaScript, but not all JavaScript code is JSON**

## JSON as a File Format

Besides being a data interchange format, JSON is also a **file format**. It's not uncommon to access third-party data from a third-party website into our own code in the form of a JSON file.

### Example: Stock Prices

If you had a website with data on stock price movements, you might want to get the data of current stock prices from a data vendor. They might offer their data service by giving you access to a file named, say `stockPrices.json`, that you could access from their servers.

### The Workflow

1. Download the stringified JSON data into your own code
2. Convert that data to a plain JavaScript object
3. Use your web application's code to "dig into" the third-party data
4. Obtain specific information based on a given set of criteria

### Example Structure

```js
const currencyInfo = {
    USD: {
        // ...
    },
    GBP: {
        // ...
    },
    EUR: {
        // ...
    }
};
```

JSON data, once parsed into a JavaScript object, would be structured as a standard object with key-value pairs.

You could then access only the data on the `USD` property, if that's what was needed by your app at a given point in time.

## The JSON Workflow

1. Get stringified JSON data from a server
2. Convert ("parse") that data into JS objects in your own code
3. Work with the converted data in your own code
4. Optionally stringify the result back into JSON
5. Send the data back to a server after your code has processed it locally

## JSON Syntax Rules

### Key Requirements

- **Double-quoted strings are required for all keys**
- Properties are comma-separated in JSON objects and arrays, just like in JavaScript
- String properties must be surrounded in double quotes (e.g., `"fruits"`, `"vegetables"`)

### JSON is Just a String

JSON is a string, but it must be a **properly-formatted string**. In other words, it must adhere to specific rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

## Supported Data Types in JSON

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

### Primitive Values

- **Strings**: Must be in double quotes
- **Numbers**: Regular JavaScript number syntax (e.g., `5`, `10`, `1.2`)
- **Booleans**: `true` and `false`
- **Null**: Just `null`

### Complex Values

- **Objects**: Allowed (no functions!)
- **Arrays**: Allowed

### Syntax Rules Summary

- Objects have **double-quoted strings for all keys**
- Properties are **comma-delimited** in both JSON objects and JSON arrays
- **String properties** must be surrounded in double quotes: `"fruits"`, `"vegetables"`
- **Number properties**: `5`, `10`, `1.2`
- **Boolean properties**: `true` and `false`
- **Null**: `null`
- You can use object literals and array literals, as long as you follow the above rules

## Unsupported Data Types

What happens if you try to stringify a data type that is not accepted in JSON syntax?

### Functions

If you try to stringify a function, **the operation will silently fail**.

```js
JSON.stringify({ func: function() {} });
// Result: "{}" - function is omitted
```

### BigInt

If you try to stringify a BigInt number, such as `123n`, you'd get an error:

```
Uncaught TypeError: Do not know how to serialize a BigInt
```

### Other Unsupported Types

- `undefined`
- `Symbol`
- Functions
- BigInt

## Examples of JSON Strings

### Single Key-Value Pair

```json
'{"color":"red"}'
```

### Nested Object

```json
'{"color":"red", "nestedObject": { "color": "blue" }}'
```

This JSON object encodes two properties:

- `"color":"red"`
- `"nestedObject": { "color": "blue" }`

### Array of Strings

```json
'["one", "two", "three"]'
```

This encodes an array with three string values.

### Array of Objects

```json
'[{ "color": "blue" }, { "color": "red" }]'
```

This encodes an array containing two objects, where each object has a single key-value pair with string values.

## Working with JSON in JavaScript

### JSON.stringify()

Converts a JavaScript object to a JSON string.

```js
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);
// '{"name":"John","age":30,"city":"New York"}'
```

### JSON.parse()

Converts a JSON string to a JavaScript object.

```js
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // "John"
console.log(obj.age);  // 30
```

### Pretty Printing JSON

You can format JSON with indentation for better readability:

```js
const obj = { name: "John", age: 30 };
const prettyJSON = JSON.stringify(obj, null, 2);
console.log(prettyJSON);
// {
//   "name": "John",
//   "age": 30
// }
```

## Common Pitfalls

### Single Quotes vs Double Quotes

```js
// Invalid JSON - uses single quotes
'{'color':'red'}'

// Valid JSON - uses double quotes
'{"color":"red"}'
```

### Trailing Commas

```js
// Invalid JSON - has trailing comma
'{"color":"red",}'

// Valid JSON - no trailing comma
'{"color":"red"}'
```

### Undefined Values

```js
const obj = { name: "John", age: undefined };
JSON.stringify(obj);
// '{"name":"John"}' - undefined is omitted
```

## Summary

### What is JSON?

- **J**ava**S**cript **O**bject **N**otation
- A lightweight data interchange format
- A subset of JavaScript with stricter formatting rules
- Both a data format and a file format

### Why Use JSON?

- Lightweight and easy to read
- Native JavaScript support
- Universal web standard
- Easy to parse and generate

### Key Rules

- All keys must be in **double quotes**
- String values must be in **double quotes**
- No trailing commas
- Only specific data types are supported (strings, numbers, booleans, null, objects, arrays)
- No functions, undefined, BigInt, or Symbol

### Main Methods

- `JSON.stringify()`: Convert JavaScript object to JSON string
- `JSON.parse()`: Convert JSON string to JavaScript object

JSON is fundamental to modern web development, enabling seamless data exchange between servers and clients across the internet.
