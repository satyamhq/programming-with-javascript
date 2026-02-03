# Object-Oriented Programming Principles

## Benefits of OOP

Object-Oriented Programming (OOP) provides many benefits:

- **Mimics real-world relationships:** Helps you reason about relationships between things in your software, just like in the real world
- **Effective problem-solving:** An effective approach to come up with solutions in your code
- **Modular code:** Write code in separate, independent modules
- **Flexibility:** Makes your code more adaptable to changes
- **Reusability:** Code can be reused in different parts of your program

## The Four Fundamental OOP Principles

1. **Inheritance**
2. **Encapsulation**
3. **Abstraction**
4. **Polymorphism**

## Object Hierarchical Structure

Objects exist in a **hierarchical structure**:

- The original base or super class for everything is the `Object` class
- All objects derive from this class
- This allows us to create objects using `Object.create()` or the `new` keyword

### Creating Objects: Two Methods

**Method 1: Object.create()**
```js
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal);
console.log(Animal);
```

**Method 2: new keyword (more common)**
```js
class Animal { /* ...class code here... */ }

var myDog = new Animal();
console.log(Animal);
```

When using a default or empty constructor, JavaScript implicitly calls the `Object` superclass to create the instance.

## OOP Principle 1: Inheritance

**Inheritance** is one of the foundations of object-oriented programming.

### How It Works

1. There is a **base class** of a "thing"
2. There are one or more **sub-classes** that inherit properties from the base class (also called "super-class")
3. There might be **sub-sub-classes** that inherit from the sub-classes

**Note:** Each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class if there are classes inheriting from it.

### Real-World Example

- **Base class:** Animal
- **Sub-class:** Mammal (inherits from Animal)
- **Sub-sub-class:** Elephant (inherits from Mammal)

We're modeling real-world objects by constructing relationships between Animal, Mammal, and Elephant.

### Syntax: The `extends` Keyword

Use `extends` to set up inheritance relationships:

```js
class B extends A { }
```

### Complete Example

```js
class Animal { 
    constructor(name) {
        this.name = name;
    }
}

class Mammal extends Animal { 
    constructor(name, warmBlooded) {
        super(name);
        this.warmBlooded = warmBlooded;
    }
}

class Elephant extends Mammal { 
    constructor(name, warmBlooded, trunkLength) {
        super(name, warmBlooded);
        this.trunkLength = trunkLength;
    }
}
```

## OOP Principle 2: Encapsulation

**Encapsulation** makes code implementation "hidden" from other users—they don't need to know how the code works to use it.

### Example

```js
"abc".toUpperCase();
```

You don't need to know **how** `toUpperCase()` works internally. You just want to **use** it because you know it's available.

Even if the underlying implementation changes, as long as it doesn't break your code, you don't need to worry about how it works in the background.

### Key Point

Encapsulation is about **not having access to, or not being concerned with**, how some implementation works internally.

## OOP Principle 3: Abstraction

**Abstraction** is about writing code in a way that makes it more generalized.

### Encapsulation vs Abstraction

These concepts are often misunderstood because their differences can feel blurry.

**Think of it this way:**

- **Abstraction:** Extracting the **concept** of what you're trying to do, rather than dealing with a specific manifestation
- **Encapsulation:** Not having access to, or not being concerned with, how implementation works internally

### Note

While both are important OOP concepts, they require more programming experience to fully grasp. For now, be aware of their existence.

## OOP Principle 4: Polymorphism

**Polymorphism** comes from Greek meaning "multiple forms" or "something that can take on many shapes."

### Real-Life Example: Bells

**Door Bell:**
- A door has a bell (property)
- Bell can be rung
- Purpose: Get someone to come to the door

**Bicycle Bell:**
- A bicycle has a bell (property)
- Bell can be rung
- Purpose: Warn people to watch out

Same method name, different intent and result!

### Code Example: Bells

```js
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!";
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!";
    }
}

bicycle.bell(); // "Ring, ring! Watch out, please!"
door.bell();    // "Ring, ring! Come here, please!"
```

The exact same method name has opposite intent based on the object.

### Making It Truly Polymorphic

```js
function ringTheBell(thing) {
    console.log(thing.bell());
}

ringTheBell(bicycle); // "Ring, ring! Watch out, please!"
ringTheBell(door);    // "Ring, ring! Come here, please!"
```

The same function produces different results based on context!

### Another Example: concat() Method

**With strings:**
```js
"abc".concat("def"); // 'abcdef'
```

**With arrays:**
```js
["abc"].concat(["def"]); // ['abc', 'def']
```

**Note:** Using the `+` operator with arrays behaves differently:
```js
["abc"] + ["def"]; // "abcdef" (coerces to string, not true concatenation)
```

The `concat()` method exhibits **polymorphic behavior** because it behaves differently based on data types.

## Polymorphism with Classes

### Example: Birds

```js
class Bird {
    useWings() {
        console.log("Flying!");
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();

baldEagle.useWings();   // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

### How It Works

- **Bird class:** Base class with `useWings()` method
- **Eagle class:** Extends `useWings()` by calling `super.useWings()` then adding more behavior
- **Penguin class:** Completely overrides `useWings()` with its own implementation

### The `super` Keyword

`super` calls methods from the parent class:

```js
super.useWings(); // Calls useWings() from Bird class
```

This allows the Eagle class to **extend** behavior by adding "Barely flapping!" after calling the parent method.

## Why Polymorphism is Useful

Polymorphism allows developers to:

- Build objects that **share functionality** but **override it as needed**
- Use the **same function name** that behaves differently based on context
- Override some parts or all of the shared functionality in different parts of the OOP structure

## Practice Challenge

Using the skeleton of the Bird example, try creating your own classes!

**Hint:** Think about things from everyday life, like your house.

```js
// Create your classes here

class House {
    // Your code
}

class Apartment extends House {
    // Your code
}
```

## Summary

### The Four OOP Principles

| Principle | Definition |
|-----------|------------|
| **Inheritance** | Classes inherit properties and methods from parent classes |
| **Encapsulation** | Hide implementation details from users |
| **Abstraction** | Extract concepts rather than specific implementations |
| **Polymorphism** | Same method/function behaves differently based on context |

### Key Concepts

- **Hierarchical structure:** All objects derive from the base `Object` class
- **extends keyword:** Sets up inheritance relationships
- **super keyword:** Calls methods from parent class
- **Method overriding:** Sub-classes can override parent methods
- **Shared functionality:** Objects can share methods but customize behavior

### Benefits Recap

Object-Oriented Programming simplifies code by:

- Modeling real-world relationships
- Promoting modular, reusable, and flexible code
- Making software easier to extend and maintain
- Allowing code to be organized in a logical, hierarchical structure

## Best Practices

1. Use inheritance to create class hierarchies
2. Encapsulate implementation details
3. Abstract common concepts into base classes
4. Use polymorphism to create flexible, reusable code
5. Override methods when sub-classes need different behavior
6. Use `super` to extend parent class functionality

OOP principles work together to create powerful, maintainable, and scalable software!
