# Storing Data in Arrays

## Introduction: The Freight Train Analogy

Freight trains are an important means for moving cargo. They have a system that keeps things running smoothly:

- Carriages are set in a specific sequence
- Each carriage may carry different items or materials
- Carriages can be added or removed without disrupting the rest of the order

Much like a freight train, JavaScript has functionality that allows you to store and rearrange sequenced collections of items. This is called an **array**.

## The Problem: Individual Variables

Let's say you want to emulate a toy freight train using JavaScript. Each carriage has a number painted on its side, starting from 0.

### Assigning Cargo to Carriages

```js
var carriage0 = "wheat";
var carriage1 = "barley";
var carriage2 = "salt";
var carriage3 = "rocks";
var carriage4 = "coal";
```

When you inspect the contents:

```js
console.log(carriage0); // Output: wheat
```

You've just built a train with five carriages, each holding different cargo.

### The Problem with Multiple Trains

Now introduce a second train with two carriages (0 and 1). 

**Issue:** You can't use the variable names `carriage0` and `carriage1` because they're already taken!

**Workaround:** Use more descriptive names:

```js
var train2carriage0 = "apples";
var train2carriage1 = "oranges";
```

**New Problem:** 
- This feels wordy
- You need to signal that these variables belong to Train 2 as a collection
- JavaScript doesn't understand they're grouped together

## The Solution: Arrays

To make JavaScript understand that we're grouping a sequence of variables in a collection, we use **arrays**.

### Array Literal Syntax

Build an array using square brackets:

```js
[]
```

The array is currently empty, but JavaScript now understands that you'll provide a collection of items.

### Creating Train 1 Array

```js
var train1 = ["wheat", "barley", "salt", "rocks", "coal"];
```

Now we have a train!

## Array Indexing

**Question:** What happened to the carriage numbers?

**Answer:** Behind the scenes, JavaScript gives each item a number starting from **0** that corresponds to its place in the sequence.

### Index Numbers

```js
var train1 = ["wheat", "barley", "salt", "rocks", "coal"];
//            Index 0   Index 1   Index 2  Index 3  Index 4
```

### Accessing Array Items

Use the index number in square brackets to access each item:

```js
train1[0]; // "wheat"
train1[1]; // "barley"
train1[2]; // "salt"
train1[3]; // "rocks"
train1[4]; // "coal"
```

### Example

```js
var train1 = ["wheat", "barley", "salt", "rocks", "coal"];

console.log(train1[0]); // Output: wheat
console.log(train1[2]); // Output: salt
console.log(train1[4]); // Output: coal
```

## What Arrays Achieve in JavaScript

Arrays help us accomplish several things:

1. **Signal grouping:** The assigned values all belong to a collection
2. **Ordered sequence:** Values are stored in a specific order
3. **Index access:** Each item can be accessed through its index number

## Array Structure

```js
var arrayName = [item0, item1, item2, item3];
//               Index 0, Index 1, Index 2, Index 3
```

### Key Points

- Arrays use square brackets `[]`
- Items are separated by commas
- Index numbering starts at **0**, not 1
- Access items using `arrayName[index]`

## Multiple Arrays Example

```js
var train1 = ["wheat", "barley", "salt", "rocks", "coal"];
var train2 = ["apples", "oranges"];

console.log(train1[0]); // wheat
console.log(train2[0]); // apples
console.log(train1[1]); // barley
console.log(train2[1]); // oranges
```

Now each train is clearly defined as its own collection!

## Summary

### What We Learned

1. **How to build an array** using array literal syntax `[]`
2. **How JavaScript sequences array items** using index values starting from 0
3. **How to access array contents** using bracket notation `arrayName[index]`
4. **Why arrays are useful** for grouping related data in a sequence

### Array Benefits

- Group related values together
- Maintain order of items
- Easy access through index numbers
- Cleaner, more organized code than individual variables
- Can add or remove items without affecting other items

### Remember

- Array indexing starts at **0**
- Use square brackets `[]` to create arrays
- Separate items with commas
- Access items using `arrayName[index]`
