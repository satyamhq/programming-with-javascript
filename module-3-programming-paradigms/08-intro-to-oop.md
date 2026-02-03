# Introduction to Object-Oriented Programming

## Programming Paradigms

A **programming paradigm** is a classification, style, or general way to write code.

### Two Popular Paradigms

1. **Functional Programming (FP)**
2. **Object-Oriented Programming (OOP)**

## What is Object-Oriented Programming?

**OOP** revolves around the idea of organizing programs using **objects** to group related data and functionality.

This is in contrast to **functional programming**, where data used in the app is kept separate from functions that operate on that data.

## Example: Calculating Shoe Purchase Cost

Task: Calculate the total cost of buying a pair of shoes (price × tax).

### Functional Programming Approach

**Clearly separate** program's data from functions that work on that data.

```js
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay); // Output: 120
```

**Key Points:**
- Data (variables) is separate
- Functions operate on data passed as parameters
- Data and functions are independent

### Object-Oriented Programming Approach

**Create an object** and store all related data including variables, functions, and output statements.

```js
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
};

purchase1.totalPrice(); // Output: Total price: 120
```

**Key Points:**
- Data and functions are grouped together in an object
- Functions inside objects are called **methods**
- Access data using dot notation: `purchase1.shoes`, `purchase1.stateTax`

## Accessing Object Data

You can access any data that the object has using **dot notation**:

```js
console.log(purchase1.shoes);     // 100
console.log(purchase1.stateTax);  // 1.2
purchase1.totalPrice();           // Total price: 120
```

## Advantage: Building Multiple Objects

You can build as many objects as you need:

```js
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
};

purchase2.totalPrice(); // Output: Total price: 60
```

## The Problem: Code Duplication

Notice that the `totalPrice` method is almost identical in both objects. The only difference is the object name (`purchase1` vs `purchase2`).

This is wasteful and inefficient.

## The Solution: The `this` Keyword

The `this` keyword essentially means **"this object"** (the current object).

### Updated Code with `this`

```js
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
};

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
};

purchase1.totalPrice(); // Output: Total price: 120
purchase2.totalPrice(); // Output: Total price: 60
```

### Why `this` is Better

Instead of hardcoding the object name (`purchase1.shoes`), we use an alias (`this.shoes`):

- **Before:** `purchase1.shoes * purchase1.stateTax`
- **After:** `this.shoes * this.stateTax`

Now the `totalPrice` method is **identical** in both objects and can be reused!

## Still a Problem: Repeating Methods

Although we're reusing code with `this`, we're still **repeating the same method** on each new object.

```js
// Same method repeated in both objects
totalPrice: function() {
    var calculation = this.shoes * this.stateTax;
    console.log('Total price:', calculation);
}
```

This is wasteful. Programs need to be efficient.

## The Ultimate Solution: Classes (Templates)

The solution is to code objects using a **template**.

In JavaScript, one of the most elegant ways to efficiently build new objects is by using **classes** (covered in the next lesson).

## Comparison: Functional vs OOP

### Functional Programming

```js
// Data
var shoes = 100;
var stateTax = 1.2;

// Function (separate from data)
function totalPrice(shoes, tax) {
    return shoes * tax;
}

// Usage
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);
```

**Characteristics:**
- Data and functions are separate
- Functions operate on data passed as parameters
- Clear separation of concerns

### Object-Oriented Programming

```js
// Data and methods grouped together
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
};

// Usage
purchase1.totalPrice();
```

**Characteristics:**
- Data and methods are grouped in objects
- Methods operate on the object's own data
- Uses `this` to reference the current object

## Key Concepts

### Methods

Functions inside objects are called **methods**.

```js
var myObject = {
    myMethod: function() {
        // This is a method
    }
};
```

### Dot Notation

Access object properties and methods using a dot (`.`):

```js
objectName.propertyName
objectName.methodName()
```

### The `this` Keyword

Refers to the current object:

```js
var car = {
    brand: "Toyota",
    showBrand: function() {
        console.log(this.brand); // "this" refers to the car object
    }
};
```

## Summary

### What We Learned

1. **Programming paradigms** are different styles of writing code
2. **OOP** groups related data and functionality in objects
3. **Functional programming** keeps data separate from functions
4. **Methods** are functions inside objects
5. **Dot notation** accesses object properties and methods
6. **`this` keyword** refers to the current object
7. **Classes** provide templates for creating objects efficiently (next lesson)

### Advantages of OOP

- **Group related data and functionality** together
- **Reuse code** with the `this` keyword
- **Create multiple objects** easily
- **More efficient** when using classes (templates)

### Why OOP Matters

With the object-oriented approach, you can code more efficiently by reusing existing code instead of duplicating it.

## Next Steps

In the next lesson, you'll learn how to create object templates using **classes** to avoid repeating methods and write even more efficient code.
