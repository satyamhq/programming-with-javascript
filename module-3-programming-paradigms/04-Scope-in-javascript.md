# Scope in JavaScript

## Introduction

Scope is all about **code accessibility**. It determines which parts of the code are accessible and which parts are inaccessible. For example, what variables can a function access within code?

This lesson explores the concept of scope and how the scope chain works within JavaScript, including different scope types such as global and local.

## The Two-Way Mirror Analogy

A nice way to think about how scope works in JavaScript is a **two-way mirror glass** - a piece of glass where only one side is transparent.

For example, if a restaurant uses two-way glass:

- People **outside** the restaurant **can't see** what's happening inside
- People **inside** the restaurant **can see** what is happening outside

This process is similar to how scope works in JavaScript.

## Global Scope vs Local Scope

### Global Scope

Code that exists **outside of a function** is referred to as **global scope**.

### Local Scope (Function Scope)

All the code **inside of a function** is known as **local scope** or **function scope**.

If a variable is defined within a function, then you can say it's **scoped to that function**.

### Example

```js
function myFunction() {
    let localVar = "I'm local!";
    // localVar is scoped to myFunction
}
```

In this example, `localVar` is scoped to the function in which it was created. This variable is only accessible within `myFunction`.

## The Scope Chain

Each function keeps a reference to its **parent scope**. This chain of scope references is referred to as the **scope chain**.

### How It Works

- Inner functions can access variables from outer scopes
- Outer scopes cannot access variables from inner scopes
- JavaScript looks up the scope chain to find variable references

### Example

```js
let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm outer";
    
    function innerFunction() {
        let innerVar = "I'm inner";
        
        // Can access all three variables:
        console.log(innerVar);   // "I'm inner"
        console.log(outerVar);   // "I'm outer"
        console.log(globalVar);  // "I'm global"
    }
    
    // Can access global and outer, but NOT inner:
    console.log(outerVar);   // "I'm outer"
    console.log(globalVar);  // "I'm global"
    // console.log(innerVar); // Error! Not accessible
}

// Can only access global:
console.log(globalVar);  // "I'm global"
// console.log(outerVar); // Error! Not accessible
// console.log(innerVar); // Error! Not accessible
```

## Key Takeaways

- **Scope** determines which parts of code are accessible
- **Global scope**: Code outside of any function
- **Local scope** (Function scope): Code inside a function
- Variables are **scoped to** the function in which they are created
- The **scope chain** is the chain of references from inner scopes to outer scopes
- Inner scopes can access outer scopes (like seeing outside through two-way glass)
- Outer scopes cannot access inner scopes (like not being able to see inside through two-way glass)

## Conclusion

You're now familiar with scope and how the scope chain works in JavaScript. You can identify how different types of scope work, including:

- **Global scope**: Accessible everywhere
- **Local scope** (also known as **function scope**): Accessible only within the function where it's defined
