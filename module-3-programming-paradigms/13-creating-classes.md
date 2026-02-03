# Creating Classes

## Learning Objectives

By the end of this reading, you should be able to explain, with examples, the concept of extending classes using basic inheritance to alter behaviors within child classes.

## Class Basics

Inheritance in JavaScript is based around the prototype object. All objects built from the prototype share the same functionality.

For more complex OOP relationships, you can use the `class` keyword with its easy-to-understand syntax.

## Defining a Class

### Basic Syntax

```js
class Train {}
```

Use:
- The `class` keyword
- Class name with first letter capitalized
- Opening and closing curly braces

### Adding a Constructor

```js
class Train {
    constructor() {
        
    }
}
```

The constructor builds properties on future object instances of the class.

### Constructor with Parameters

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
```

**Key Points:**
- No `function` keyword needed
- Use the `constructor` keyword
- Parameters work like regular functions
- `this` represents the future object instance

## Creating Object Instances

### Syntax

```js
new Train()
```

### With Values

```js
var myFirstTrain = new Train('red', false);
```

Pass values in parentheses and assign to a variable.

### Logging the Object

```js
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
```

### Multiple Instances

```js
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
```

Each instance is a separate object, even with identical properties.

## Adding Methods to Classes

Methods added to classes are shared by all future instance objects.

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    
    getSelf() {
        console.log(this);
    }
    
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
```

### Method Explanations

**toggleLights():**
- Uses logical NOT operator `!`
- Changes the value of `lightsOn` property
- `!this.lightsOn` becomes the new value

**lightsStatus():**
- Reports current status of `lightsOn` property

**getSelf():**
- Prints properties on the object instance

**getPrototype():**
- Logs the prototype of the object instance
- Uses `Object.getPrototypeOf(this)`
- Prototype holds all properties shared by all instances

## Using the Methods

```js
var train4 = new Train('red', false);

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
```

**Important:** Instance objects only return properties (data) built using `constructor()`. Methods live on the prototype, not on individual instances.

## Class Syntax Benefits

Class syntax in JavaScript clearly separates:
- **Individual object's data:** Exists on the object instance itself
- **Shared functionality (methods):** Exists on the prototype, shared by all instances

## Inheritance with Classes

You can implement polymorphism by inheriting from a base class and overriding inherited behavior.

### The extends Keyword

```js
class HighSpeedTrain extends Train {
}
```

- **Base class (super-class):** Train
- **Sub-class:** HighSpeedTrain
- **Syntax:** `class SubClass extends SuperClass`

### Constructor in Sub-Class

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```

**The super Keyword:**
- Calls the constructor of the super-class
- Initializes properties inherited from the super-class
- Must be called before using `this`

### Automatic Method Inheritance

The sub-class automatically inherits all methods from the super-class:
- `toggleLights()`
- `lightsStatus()`
- `getSelf()`
- `getPrototype()`

### Adding Sub-Class Specific Methods

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
}
```

### Overriding Inherited Methods

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
```

**How it works:**
1. `super.toggleLights()` - Inherits behavior from super-class
2. `super.lightsStatus()` - Also borrows from super-class
3. Adds custom line: `console.log('Lights are 100% operational.')`

This combines "borrowed" super-class code with custom sub-class code.

## Complete Example

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

// Create instances
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// Test behavior
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true

highSpeed1.toggleLights(); 
// Lights on? true
// Lights are 100% operational.
```

Notice how `toggleLights()` behaves differently on `HighSpeedTrain` than on `Train`.

## Understanding Prototypes

```js
train5.getPrototype(); 
// {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}

highSpeed1.getPrototype(); 
// Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
```

**Explanation:**
- `train5` prototype: Created when `Train` class was defined
- `highSpeed1` prototype: Has its own prototype, which in turn has `Train.prototype` as its prototype
- Access using: `HighSpeedTrain.prototype.__proto__`

## Using Class Instances as Constructor Properties

```js
class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.modes = modes;
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs);         // "7-22"
console.log(boxingGym.stationaryBike);  // StationaryBike {position: 'right corner', gears: 8}
console.log(boxingGym.treadmill);       // Treadmill {position: 'left corner', modes: 5}
```

**Result:**
- `openHrs` property: `"7-22"` (7am to 10pm)
- `stationaryBike` property: Object of `StationaryBike` type
- `treadmill` property: Object of `Treadmill` type

## Key Concepts Summary

### Class Definition
- Use `class` keyword
- Constructor initializes properties
- Methods are shared via prototype

### Inheritance
- Use `extends` keyword for sub-classes
- Use `super()` to call parent constructor
- Use `super.methodName()` to call parent methods

### Method Overriding
- Define same method name in sub-class
- Can combine parent behavior with custom code
- Enables polymorphism

### Composition
- Classes can contain instances of other classes
- Useful for complex object relationships
- Creates modular, reusable code

## Best Practices

1. **Class names:** Start with capital letter
2. **Constructor:** Always define to set initial properties
3. **super():** Call first in sub-class constructor
4. **Methods:** Share functionality across instances
5. **Inheritance:** Use to create specialized versions of classes
6. **Composition:** Combine multiple classes for complex objects

## Conclusion

Class syntax in JavaScript improves developer experience by making it easier to reason about relationships between classes. While prototypes can seem complex, classes provide a cleaner, more intuitive way to work with object-oriented programming in JavaScript.
