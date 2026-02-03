# Designing an Object-Oriented Program in JavaScript

## Overview

This guide demonstrates how to create classes in JavaScript using inheritance, the `extends` keyword, and the `super` keyword to build a complete class hierarchy.

## Class Hierarchy

We'll build the following inheritance structure:

```
                       Animal
                     /        \
                  Cat          Bird
               /     \          \
         HouseCat   Tiger      Parrot


```

## Essential OOP Keywords

### `extends`
The `extends` keyword allows you to inherit from an existing class.

```js
class Animal {
    // ... class code here ...
}

class Cat extends Animal {
    // ... class code here ...
}
```

### `super`
The `super` keyword allows you to "borrow" functionality from a parent class in a subclass.

## Planning the Implementation

Before coding, consider these questions:

- What should go into the base class that all subclasses will inherit?
- What are the specific properties and methods that separate each class?
- How will the classes relate to one another?

## Implementation Plan

1. **Animal class** (base class)
   - Properties: `color`, `energy`
   - Methods: `isActive()`, `sleep()`, `getColor()`

2. **Cat class** (extends Animal)
   - Additional properties: `sound`, `canJumpHigh`, `canClimbTrees`
   - Method: `makeSound()`

3. **Bird class** (extends Animal)
   - Additional properties: `sound`, `canFly`
   - Method: `makeSound()`

4. **HouseCat class** (extends Cat)
   - Additional property: `houseCatSound`
   - Overridden `makeSound(option)` method with conditional behavior

5. **Tiger class** (extends Cat)
   - Additional property: `tigerSound`
   - Overridden `makeSound(option)` method

6. **Parrot class** (extends Bird)
   - Additional property: `canTalk`
   - Overridden `makeSound(option)` method with two conditionals

## Code Structure with Comments

Before implementing, outline the requirements as comments:

```js
class Animal {
    // constructor: color, energy
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    // sleep()
        // energy += 20
        // console.log energy
}

class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound()
        // console.log sound
}

class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    // makeSound()
        // console.log sound
}

class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
}

class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
}

class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
}
```

## Complete Implementation

### Animal Class (Base Class)

```js
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}
```

### Cat and Bird Classes

```js
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
```

**Important:** If you don't use the `super` keyword in subclasses, you'll get this error:
```
Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
```

### HouseCat, Tiger, and Parrot Classes

```js
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        console.log(this.houseCatSound); // Always prints the HouseCat sound
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        console.log(this.tigerSound); // Always prints the Tiger sound
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!"); // If canTalk is true, it talks
        }
    }
}
```

### Key Points

- The `makeSound(option)` method in `HouseCat` and `Tiger` requires a parameter to determine whether to invoke the parent class's method
- Passing `true` invokes the parent's `makeSound()` method; `false` does not
- The `Parrot` class's `makeSound()` method also takes an `option` parameter and changes behavior based on the `canTalk` property

## Usage Examples

### Creating Parrots

```js
var polly = new Parrot(true); // polly can talk
var fiji = new Parrot(false); // fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80
```

### Creating a Custom Bird

```js
var penguin = new Bird("shriek", false, "black and white", 200);
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180
```

### Creating a HouseCat

```js
var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow
```

### Creating a Tiger

```js
var cuddles = new Tiger();

cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
```

## Complete Code Example

```js
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

// Test examples
var fiji = new Parrot(false);
var polly = new Parrot(true);

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

var penguin = new Bird("shriek", false, "black and white", 200);
var leo = new HouseCat();
var cuddles = new Tiger();
```

## Key Takeaways

- Use `extends` to create inheritance relationships between classes
- Use `super()` in constructors to call the parent class constructor
- Use `super.methodName()` to call parent class methods
- Default parameters make classes more flexible and easier to instantiate
- Method overriding allows subclasses to customize inherited behavior
- This hierarchy demonstrates sharing common functionality while customizing specific traits for each class
- These concepts enable you to write scalable, maintainable, and reusable code for complex applications
