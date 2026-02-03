## Object Literals and the Brackets Notation

By the end of this reading, you'll be able to:
- Explain how to build objects using the brackets notation
- Explain that with the brackets notation you can use the space character inside keys, since property keys are strings
- Explain that the keys inside the brackets notation are evaluated

## What Is Brackets Notation?

There is an alternative syntax to the dot notation called **brackets notation**.

## Creating Objects with Brackets Notation

Here's how to build an object using brackets notation:
```js
var house2 = {};
house2["rooms"] = 4;
house2['color'] = "pink";
house2["priceUSD"] = 12345;

console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
```

### How It Works

Using the brackets notation, you:
1. Wrap each property's key as a string inside either single or double quotes
2. Wrap the entire property key in opening and closing square brackets `[]`

## Combining Dot and Brackets Notation

You can access and update properties using either notation, or a combination of both:
```js
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;

console.log(car); // {color: "green", speed: 100}
```

## Advantages of Brackets Notation

### 1. Using Spaces in Property Names

With brackets notation, you can add space characters inside property names:
```js
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}
```

### 2. Using Numbers as Property Keys

You can add numbers (as the string data type) as property keys:
```js
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}
```

**Note:** This is discouraged because having a property key as a number string doesn't convey useful information.

### 3. Evaluating Expressions

The most useful feature of brackets notation is that it can **evaluate expressions**. This is not available in dot notation.

## Example: Evaluating Expressions
```js
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}

for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
```

**Output:**
```
100
200
red
```

### How It Works

Using the fact that brackets notation can evaluate expressions, we accessed the `arrOfKeys[i]` property on the `drone` object.

This value changed on each loop iteration:

**First iteration:**
- The value of `i` was `0`
- The value of `arrOfKeys[i]` was `arrOfKeys[0]`, which was `"speed"`
- Thus, `drone[arrOfKeys[i]]` was evaluated to `drone["speed"]` which equals `100`

This allowed us to loop over each of the values stored inside the `drone` object, based on each of its properties' keys.

## Summary

- **Brackets notation** is an alternative to dot notation for accessing object properties
- Property keys must be wrapped in quotes (single or double) and square brackets
- Brackets notation allows spaces in property names
- Brackets notation allows numbers as property keys (though discouraged)
- **Most importantly**: Brackets notation can evaluate expressions, making it useful for dynamic property access
