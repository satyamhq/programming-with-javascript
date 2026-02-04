# Rest Operator

## Introduction

You might already know that a **spread operator** in JavaScript is used to unpack a box - for example, to unpack an array. 

The **rest operator**, on the other hand, is used to build a smaller box and pack items into it.

**Note:** The rest operator also uses **three dots** (`...`), just like the spread operator, but it serves the opposite purpose.

## The Difference

- **Spread operator**: Unpacks/expands items
- **Rest operator**: Packs/groups remaining items

## Example: Travel Itinerary

Let's explore how a rest operator can be useful with a travel itinerary.

### The Problem

I've realized that there are many things I'd love to see while in Rome during my vacation. Unfortunately, I'm pressed for time, and there's no way to really enjoy all of the attractions, even if I rush to see them all.

### Creating the Array

I can create an array of seven places I would like to visit on my holiday to Rome:

```js
const top7 = [
    "Colosseum",
    "Roman Forum",
    "Vatican",
    "Trevi Fountain",
    "Pantheon",
    "Piazza Venezia",
    "Palatine Hill"
];
```

### The Solution with Rest Operator

I decided to organize my list so that I have my top three attractions and prepare another list for a second visit.

To do this, I use the **rest operator** and a technique known as **destructuring**.

```js
const [first, second, third, ...secondVisit] = top7;
```

### How It Works

In this destructuring syntax, I simply specify what I want to get out of the `top7` array:

- `first` = `"Colosseum"`
- `second` = `"Roman Forum"`
- `third` = `"Vatican"`
- `secondVisit` = `["Trevi Fountain", "Pantheon", "Piazza Venezia", "Palatine Hill"]`

With this syntax, I extracted the contents of the `top7` array into four variables:

1. The variable `first`, with the value of `"Colosseum"`
2. The variable `second`, with the value of `"Roman Forum"`
3. The variable `third`, with the value of `"Vatican"`
4. The variable `secondVisit`, which is a sub-array of the rest of the items in the original `top7` array

### Inspecting the Result

If I inspect `secondVisit`:

```js
console.log(secondVisit);
// ["Trevi Fountain", "Pantheon", "Piazza Venezia", "Palatine Hill"]
```

An array of the four remaining attractions are all saved as string primitives.

**The rest operator gives us what is left over of the source array as a separate sub-array.**

## Using Rest Operator in Functions

The rest operator is also useful in functions. In fact, I can use a **rest parameter** to quickly work with multiple values.

### Example: Adding Tax to Prices

```js
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => item * (1 + taxRate));
}
```

### How the Function Works

In the `addTaxToPrices` parameters, the rest parameter gives me an array, so I can use array methods on `itemsBought`, such as the `map()` method.

### Calling the Function

```js
addTaxToPrices(0.1, 10, 20, 30, 40);
// Returns: [11, 22, 33, 44]
```

The `taxRate` is `0.1` (10%), and the rest of the arguments (`10, 20, 30, 40`) are collected into the `itemsBought` array.

## Important Rule: Rest Parameter Position

**CRITICAL:** The rest parameter **must be the last parameter** in the function definition.

### Correct ✓

```js
function myFunction(a, b, ...rest) {
    // This is valid
}
```

### Incorrect ✗

```js
function myFunction(...rest, a, b) {
    // This will cause an error!
}
```

Adding any other parameter to the function after the rest operator would result in an error.

## Key Differences: Spread vs Rest

| Feature | Spread Operator | Rest Operator |
|---------|----------------|---------------|
| **Purpose** | Unpacks/expands elements | Packs/groups elements |
| **Usage** | Expands arrays or objects | Collects remaining elements |
| **Common use** | Function calls, array/object copying | Function parameters, destructuring |
| **Example** | `func(...array)` | `function func(...args)` |

## Summary

The rest operator:

- Groups the remaining parameters in a list within a standard JavaScript array
- Uses three dots (`...`) syntax
- Must be the **last parameter** in function definitions
- Works with destructuring to extract remaining elements
- Enables flexible function parameters

The rest operator is the opposite of the spread operator - while spread expands, rest collects and groups.
