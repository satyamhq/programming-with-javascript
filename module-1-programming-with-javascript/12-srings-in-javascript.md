# Strings in JavaScript

## Overview

Strings are one of the most common data types in JavaScript. They are used to represent and work with **text** and **sequences of characters**.

---

## What Is a String?

* A string is a collection of characters
* It must be enclosed in **single (' ')** or **double (" ") quotes**
* Strings are a **primitive data type** in JavaScript

---

## Creating Strings

### Empty String

An empty string contains no characters.

```javascript
''
""
```

* Empty strings are valid
* Often used as placeholders or initial values

---

### Non-Empty String

```javascript
'hello there!'
"hello there!"
```

* Can contain letters, punctuation, numbers, and symbols

---

## Characters Allowed in Strings

Strings can include:

* Letters
* Numbers
* Punctuation
* Special symbols

```javascript
'hello there! 123 #$%'
```

This is still a valid string.

---

## Strings Cannot Span Multiple Lines

Strings defined with single or double quotes **cannot break onto a new line**.

### Invalid Example

```javascript
'hello
there'
```

* This causes an error
* The same applies to double-quoted strings

---

## String Delimiters

* Single (`'`) and double (`"`) quotes are called **delimiters**
* They mark the beginning and end of a string

---

## Apostrophes and Quotes Problem

Using apostrophes inside single-quoted strings can cause errors.

### Invalid Example

```javascript
'it's a lovely day'
```

* JavaScript thinks the string ends at `it'`

---

## Fixing Quote Conflicts

### Use Double Quotes Outside

```javascript
"it's a lovely day"
```

This allows the apostrophe to be part of the string.

---

## Best Practice

* Choose **single quotes or double quotes** and be consistent
* Avoid mixing quote styles unnecessarily

---

## Key Takeaways

* Strings represent text in JavaScript
* Must be enclosed in single or double quotes
* Empty strings are valid
* Strings cannot span multiple lines
* Apostrophes require careful use of quotes
* Consistency improves readability

Strings are essential for working with text in JavaScript. Practice creating and experimenting with strings to become comfortable using them.
