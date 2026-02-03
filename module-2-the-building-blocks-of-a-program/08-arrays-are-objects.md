## Arrays are Objects

By the end of this reading, you'll be able to:
- Explain that arrays are objects, with their own built-in properties and methods
- Outline the common way to extend arrays using the `push()` method
- Explain how to trim the last member of an array using the `pop()` method

## Arrays are Objects in JavaScript

In JavaScript, **arrays are objects**. That means arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the `push()` and `pop()` methods.

## The `push()` Method

To add new items to an array, you can use the `push()` method:
```js
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
```

## The `pop()` Method

To remove the last item from an array, you can use the `pop()` method:
```js
fruits.pop();
console.log(fruits); // ['apple']
```

## Building Arrays with Functions

You can build a function that takes all its arguments and pushes them into an array:
```js
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
```

You can now call the `arrayBuilder()` function like this:
```js
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
```

## Using the `return` Keyword

Instead of console logging the newly built array, you can use the `return` keyword to send the array back to wherever the function was called:
```js
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
```

### Benefits of Using `return`

The `return` keyword allows the function to hand the built array back to a variable. You can use it however you like—for example:
- Passing it to another function
- Printing it
- Manipulating it further

## Saving the Function Result

You can save the function call to a variable:
```js
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
```

Now you can console log the values stored in `simpleArr`:
```js
console.log(simpleArr); // ['apple', 'pear', 'plum']
```

## Summary

- Arrays are objects with built-in properties and methods
- `push()` adds items to the end of an array
- `pop()` removes the last item from an array
- Functions can build and return arrays using the `return` keyword
- You can save returned arrays to variables for further use
