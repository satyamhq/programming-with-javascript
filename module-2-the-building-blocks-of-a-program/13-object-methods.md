## Object Methods

In this lesson, you'll learn how to design objects as combinations of data and functionality.

---

## What are Objects?

An object consists of **key-value pairs**, known as **properties**.

You can add new key-value pairs to existing objects using **dot notation** and the **assignment operator**.
```js
var car = {};
car.color = "red"; // update the value of a property of the car object
```

---

## Properties vs Methods

### Properties

Properties can take many data types, including functions.
```js
var car = {};
car.color = "red";
```

### Methods

If a function is a property of an object, it is referred to as a **method**.

A method is a function that can be accessed only through the JavaScript object that it is a member of.
```js
var car = {};
car.color = "red";

// add a method to the car object so that it can be called as car.turnKey()
car.turnKey = function() { 
  console.log('engine running'); 
}
```

**Example:** The `log` method belongs to the `console` object and can only be accessed through it:
```js
console.log('Hello world');
```

---

## Building an Object Step-by-Step

### Step 1: Create an Empty Object
```js
var car = {};
```

### Step 2: Add Properties
```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
// Output: { mileage: 98765, color: 'red' }
```

### Step 3: Add a Method

A method is just another property where the value is a function.
```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);

car.turnTheKey = function() {
    console.log("The engine is running");
}

console.log(car);
// Output: { mileage: 98765, color: 'red', turnTheKey: [Function] }
```

### Step 4: Add Another Method
```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);

car.turnTheKey = function() {
    console.log("The engine is running");
}

car.lightsOn = function() {
    console.log("The lights are on.");
}

console.log(car);
// Output: { mileage: 98765, color: 'red', turnTheKey: [Function], lightsOn: [Function] }
```

---

## Calling Methods

To execute a method, you must:

1. Access it through the object using dot notation
2. Add parentheses `()` to invoke it

### Example: Calling turnTheKey()
```js
car.turnTheKey();
// Output: The engine is running
```

### Example: Calling lightsOn()
```js
car.lightsOn();
// Output: The lights are on.
```

---

## How Methods Work

When the JavaScript engine runs `car.lightsOn()`:

1. It locates the `car` object in memory
2. It finds the `lightsOn` method on the `car` object
3. It reads the function declaration saved on this property
4. It runs the function line by line

---

## Complete Example
```js
// Create an empty object
var car = {};

// Add properties
car.mileage = 98765;
car.color = "red";

// Add methods
car.turnTheKey = function() {
    console.log("The engine is running");
}

car.lightsOn = function() {
    console.log("The lights are on.");
}

// Access properties
console.log(car.mileage); // 98765
console.log(car.color);   // red

// Call methods
car.turnTheKey(); // The engine is running
car.lightsOn();   // The lights are on.
```

---

## Key Takeaways

- All **key-value pairs** in an object are called **properties**
- When a property's value is a function, it's called a **method**
- Methods can only be accessed through their parent object
- Use **dot notation** to access properties and methods
- Add **parentheses** `()` to invoke methods
