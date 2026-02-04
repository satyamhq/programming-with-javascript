# For-of Loops and Objects

## Overview

Understanding the difference between `for-in` loops and `for-of` loops when applied to objects in JavaScript.

## Initial Setup

### Creating Objects

```js
var car = {
    engine: true,
    steering: true,
    speed: 'slow'
};

var sportsCar = Object.create(car);
sportsCar.speed = 'fast';

console.log('The sportsCar object:', sportsCar);
```

**What's happening:**
- `car` object has three properties: `engine`, `steering`, and `speed`
- `sportsCar` inherits from `car` using `Object.create()`
- `sportsCar.speed` is set to `'fast'`, overriding the inherited value

## for-in Loop

### Code

```js
console.log('for-in is unreliable');

for (prop in sportsCar) {
    console.log(prop);
}

console.log('Iterating over object AND its prototype 🤔');
```

### Output

```
for-in is unreliable
speed
engine
steering
Iterating over object AND its prototype 🤔
```

### Why This Happens

The `for-in` loop iterates over:
- Properties in the `sportsCar` object itself (`speed`)
- Properties on the `sportsCar` object's **prototype** (`engine` and `steering`)

### The Problem

Instead of just the `speed` property, the loop also includes `engine` and `steering` properties that exist on the **prototype** of `sportsCar`, not on `sportsCar` itself.

**Conclusion:** `for-in` loops are **unreliable** in this scenario because they iterate over not only the specified object but also its prototype.

## for-of Loop with Object.keys()

### Code

```js
console.log('for-of is reliable');

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ': ' + sportsCar[prop]);
}

console.log('Iterating over object\'s OWN properties only 🎯');
```

### Output

```
for-of is reliable
speed: fast
Iterating over object's OWN properties only 🎯
```

### Why This Works

A `for-of` loop with `Object.keys()` only iterates over the object's **own properties** and does not count the prototype at all.

**Result:** Only the `speed` property (the one assigned to `sportsCar` itself) is returned.

## Simplified Example

### Code

```js
var car = {
    engine: true
};

var sportsCar = Object.create(car);
sportsCar.speed = 'fast';

console.log('The sportsCar object:', sportsCar);

// for-in loop
for (prop in sportsCar) {
    console.log('🤔', prop);
}

// for-of loop
for (prop of Object.keys(sportsCar)) {
    console.log('🎯', prop);
}
```

### Output

```
The sportsCar object: {speed: 'fast'}
🤔 speed
🤔 engine
🎯 speed
```

### Explanation

**sportsCar object:**
- Only has one property: `speed: 'fast'`

**for-in loop (🤔):**
- Outputs: `speed` and `engine`
- `engine` belongs to the prototype, not the object itself

**for-of loop (🎯):**
- Outputs: Only `speed`
- Iterates over only the object's own properties

## Key Differences

| Feature | for-in Loop | for-of Loop (with Object.keys()) |
|---------|-------------|----------------------------------|
| **Iterates over** | Object + Prototype | Object only |
| **Properties returned** | Own + Inherited | Own only |
| **Reliability** | Unreliable for objects | Reliable for objects |
| **Use case** | Avoid for objects | Preferred for objects |
| **Emoji** | 🤔 | 🎯 |

## Visual Representation

```
sportsCar object
    ↓
{speed: 'fast'}
    |
    | Prototype chain
    ↓
car object (prototype)
    ↓
{engine: true, steering: true, speed: 'slow'}
```

**for-in:** Iterates over both levels ❌
**for-of (Object.keys()):** Iterates over top level only ✅

## Complete Code Example

```js
// Create base object
var car = {
    engine: true,
    steering: true,
    speed: 'slow'
};

// Create object with car as prototype
var sportsCar = Object.create(car);
sportsCar.speed = 'fast';

console.log('The sportsCar object:', sportsCar);
// Output: {speed: 'fast'}

console.log('\n--- for-in loop (unreliable) ---');
for (prop in sportsCar) {
    console.log(prop);
}
// Output:
// speed
// engine
// steering

console.log('\n--- for-of loop (reliable) ---');
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ': ' + sportsCar[prop]);
}
// Output:
// speed: fast
```

## Best Practices

### ❌ Don't Use for-in for Objects

```js
// Unreliable - includes prototype properties
for (prop in sportsCar) {
    console.log(prop);
}
```

### ✅ Use for-of with Object.keys()

```js
// Reliable - only own properties
for (prop of Object.keys(sportsCar)) {
    console.log(prop);
}
```

### Alternative: hasOwnProperty()

If you must use `for-in`, check with `hasOwnProperty()`:

```js
for (prop in sportsCar) {
    if (sportsCar.hasOwnProperty(prop)) {
        console.log(prop); // Only own properties
    }
}
```

## Summary

### What We Learned

1. **for-in loops** iterate over object properties AND prototype properties
2. **for-of loops** with `Object.keys()` iterate over object's own properties only
3. **for-in is unreliable** for objects because it includes inherited properties
4. **for-of is reliable** for objects when used with `Object.keys()`

### When to Use Each

**for-in:**
- Generally avoid for objects
- If used, combine with `hasOwnProperty()` check

**for-of with Object.keys():**
- Preferred method for iterating over object properties
- Only returns properties directly on the object
- Does not include prototype properties

## Key Takeaway

When looping over objects in JavaScript:
- **for-in loops:** Iterate over the properties of the object **and its prototype** (unreliable 🤔)
- **for-of loops:** Iterate over only the object's **own properties** (reliable 🎯)

Use `for-of` with `Object.keys()` to ensure you're only working with the object's own properties, not inherited ones from the prototype chain.
