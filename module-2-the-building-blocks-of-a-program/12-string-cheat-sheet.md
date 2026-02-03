## String Cheat Sheet

This cheat sheet covers the most common and useful properties and methods available on strings in JavaScript.

---

## Example Variables

Throughout this guide, we'll use these variables:
```js
var greet = "Hello, ";
var place = "World";
```

**Note:** You can run string methods directly on strings without saving them to a variable first.

---

## String Properties

### length

Returns the total number of characters in a string.
```js
greet.length; // 7
```

The length is **7** because the string contains:
- 5 letters
- 1 comma
- 1 blank space

---

## String Methods

### charAt()

Reads the individual character at a specific index (starting from 0).
```js
var greet = "Hello, ";
greet.charAt(0); // 'H'
greet.charAt(1); // 'e'
greet.charAt(6); // ' '
```

---

### concat()

Joins two or more strings together.
```js
"Wo".concat("rl").concat("d"); // 'World'

greet.concat(place); // 'Hello, World'
```

---

### indexOf()

Returns the index of the **first** position that matches a character.
```js
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
```

---

### lastIndexOf()

Returns the index of the **last** position that matches a character. Otherwise works the same as `indexOf()`.
```js
"ho-ho-ho".lastIndexOf('h'); // 6
"ho-ho-ho".lastIndexOf('o'); // 7
"ho-ho-ho".lastIndexOf('-'); // 5
```

---

### split()

Splits a string into an array of sub-strings based on a specified separator.
```js
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

"Hello World".split(" "); // ['Hello', 'World']
```

---

### toUpperCase()

Converts all characters in a string to uppercase.
```js
greet.toUpperCase(); // "HELLO, "
place.toUpperCase(); // "WORLD"
```

---

### toLowerCase()

Converts all characters in a string to lowercase.
```js
greet.toLowerCase(); // "hello, "
place.toLowerCase(); // "world"
```

---

## Summary of Methods

- **charAt()** - Get character at specific index
- **concat()** - Join strings together
- **indexOf()** - Find first occurrence of a character
- **lastIndexOf()** - Find last occurrence of a character
- **split()** - Split string into an array
- **toUpperCase()** - Convert to uppercase
- **toLowerCase()** - Convert to lowercase

---

## Quick Reference
```js
var greet = "Hello, ";
var place = "World";

greet.length;                    // 7
greet.charAt(0);                 // 'H'
greet.concat(place);             // 'Hello, World'
"ho-ho-ho".indexOf('h');         // 0
"ho-ho-ho".lastIndexOf('h');     // 6
"ho-ho-ho".split("-");           // ['ho', 'ho', 'ho']
greet.toUpperCase();             // "HELLO, "
greet.toLowerCase();             // "hello, "
```
