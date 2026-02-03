# Classes

## What are Classes?

In programming, there are situations where you need to build many objects that have a specific set of properties and methods.

**Example:** Building hundreds of car objects for a car racing game.

To code this efficiently, you can use **classes**. They are essentially a **blueprint** that you can repeatedly use to build new objects of a certain kind, as many times as you like.

## Class Syntax

In JavaScript, any class is built using:

1. The `class` keyword
2. The name of the class (starting with a **capital letter**)
3. A pair of curly braces `{}`

### Basic Structure

```js
class ClassName {
    constructor(parameters) {
        // Assign parameters to object properties
    }
    
    method1() {
        // Method code
    }
    
    method2() {
        // Method code
    }
}
```

## The Constructor Function

Inside the curly braces, you have the **constructor function** which:

- Accepts as many parameters as needed
- Assigns the passed-in parameters to the future object's properties
- Is used when **instantiating** (creating) new objects

### Example: Car Class

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
}
```

## Adding Methods

After the constructor is defined, you can add as many methods as you want.

**Important:** You don't use the `function` keyword here. Just the method name is needed.

### Example: Car Class with Methods

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    
    turboOn() {
        console.log("Turbo is on!");
    }
    
    turboOff() {
        console.log("Turbo is off!");
    }
}
```

## Creating Objects (Instantiation)

Once the class definition is ready, you can start building objects using the `new` keyword.

### Syntax

```js
var objectName = new ClassName(arguments);
```

### Example

```js
var car1 = new Car("red", 120);
```

Now you have **instantiated** the `Car` class and saved the instance as `car1`.

## Accessing Properties and Methods

Once you have an object instance, you have access to its methods and properties using **dot notation**.

### Accessing Methods

```js
car1.turboOn(); // Output: Turbo is on!
```

**Breakdown:**
1. `car1` - name of the object
2. `.` - dot notation
3. `turboOn` - name of the method
4. `()` - parentheses to invoke the method

### Accessing Properties

```js
console.log(car1.color); // Output: red
console.log(car1.speed); // Output: 120
```

## Methods Working with Object Data

When invoked, methods will work with the available data in the object to produce output.

### Example

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    
    turboOn() {
        console.log("Turbo is on!");
    }
    
    showInfo() {
        console.log(`Car color: ${this.color}, Speed: ${this.speed}`);
    }
}

var car1 = new Car("red", 120);
car1.showInfo(); // Output: Car color: red, Speed: 120
```

## Passing Parameters to Methods

Like with regular functions, you can pass parameters to class methods.

### Example

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    
    turboOn() {
        console.log("Turbo is on!");
    }
    
    increaseSpeed(amount) {
        this.speed += amount;
        console.log(`New speed: ${this.speed}`);
    }
}

var car1 = new Car("red", 120);
car1.increaseSpeed(20); // Output: New speed: 140
```

## Creating Multiple Objects

The power of classes is that you can create as many objects as you need from the same blueprint.

### Example: Multiple Cars

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    
    turboOn() {
        console.log(`${this.color} car: Turbo is on!`);
    }
}

var car1 = new Car("red", 120);
var car2 = new Car("blue", 150);
var car3 = new Car("green", 100);

car1.turboOn(); // Output: red car: Turbo is on!
car2.turboOn(); // Output: blue car: Turbo is on!
car3.turboOn(); // Output: green car: Turbo is on!
```

## Complete Example: Car Racing Game

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
        this.fuel = 100;
    }
    
    turboOn() {
        console.log("Turbo is on!");
        this.speed += 50;
    }
    
    turboOff() {
        console.log("Turbo is off!");
        this.speed -= 50;
    }
    
    useFuel(amount) {
        this.fuel -= amount;
        console.log(`Fuel remaining: ${this.fuel}%`);
    }
    
    showStatus() {
        console.log(`Color: ${this.color}, Speed: ${this.speed}, Fuel: ${this.fuel}%`);
    }
}

// Create car instances
var car1 = new Car("red", 120);
var car2 = new Car("blue", 150);

// Use the car objects
car1.showStatus();    // Color: red, Speed: 120, Fuel: 100%
car1.turboOn();       // Turbo is on!
car1.showStatus();    // Color: red, Speed: 170, Fuel: 100%
car1.useFuel(25);     // Fuel remaining: 75%
```

## Key Concepts

### Class Definition

```js
class ClassName {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }
    
    methodName() {
        // Method code
    }
}
```

### Object Instantiation

```js
var objectName = new ClassName(arg1, arg2);
```

### Accessing Members

```js
objectName.propertyName    // Access property
objectName.methodName()    // Call method
```

## Important Rules

1. **Class names** start with a capital letter
2. Use the `class` keyword to define a class
3. Use the `constructor` function to initialize properties
4. **Don't use** the `function` keyword when defining methods
5. Use the `new` keyword to create object instances
6. Use `this` keyword inside the class to refer to the current object

## Benefits of Classes

- **Blueprint for objects:** Create multiple objects with the same structure
- **Code reusability:** Write once, use many times
- **Organized code:** Group related properties and methods together
- **Efficiency:** Build hundreds or thousands of objects easily
- **Maintainability:** Update the class once, all objects inherit changes

## Summary

### What We Learned

1. **Classes** are blueprints for creating objects
2. **Constructor function** initializes object properties
3. **Methods** are defined without the `function` keyword
4. **Instantiation** creates new objects using the `new` keyword
5. **Dot notation** accesses properties and methods
6. **Parameters** can be passed to methods like regular functions

### Pattern to Remember

```js
// 1. Define the class
class MyClass {
    constructor(param) {
        this.property = param;
    }
    
    myMethod() {
        console.log(this.property);
    }
}

// 2. Create instances
var obj1 = new MyClass("value1");
var obj2 = new MyClass("value2");

// 3. Use the instances
obj1.myMethod();
obj2.myMethod();
```

Classes allow you to build multiple object instances with specific properties and methods efficiently!
