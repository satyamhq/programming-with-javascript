# Event Handling

## Introduction

Let's say you are using a webpage on your computer and you click a button, or you tap the like icon on a friend's picture on your phone. In JavaScript, the button click and the like icon tap are examples of **user-triggered events**.

Events are happening all the time. You can use JavaScript code to **listen** for these events. You can even choose the parts of the page on which you are listening for events.

## Example: Shopping Cart

You might want to listen for a click event on an **Add to Cart** button.

### How It Works

1. Once you capture such an event, you might want to run some JavaScript code
2. For example, add a circle with the number `1` on it next to the shopping cart icon to indicate that there is now one item in the shopping cart
3. If the same event gets triggered or **fired** again, the event handling code then handles the event by updating the count in the circle
4. The circle then displays the number `2` to indicate that there are two items in the cart

In JavaScript, the **function that handles captured events is known as the event handler**.

## Method 1: Using addEventListener()

One of the easiest ways to listen for an event is to use the `addEventListener()` method on a given HTML element.

### Step 1: Get a Reference to the Element

First, you need to get a reference to the element where you want to listen to the event.

```js
const target = document.querySelector('body');
```

This assigns the body object to the `target` variable. We've named this variable `target` because it's the target of our click event.

### Step 2: Create an Event Handler Function

Now create a function that would be run when the target is clicked.

```js
function handleClick() {
    console.log('Clicked the body');
}
```

### Step 3: Add the Event Listener

Run the `addEventListener` method on the target element.

```js
target.addEventListener('click', handleClick);
```

**Inside the parentheses, pass two arguments:**

1. The event type (`'click'`) as a string value
2. The handler function (`handleClick`)

### Testing the Code

When you click the webpage, the text "Clicked the body" is output to the console. Success!

### Complete Example

```js
// Step 1: Get element reference
const target = document.querySelector('body');

// Step 2: Create handler function
function handleClick() {
    console.log('Clicked the body');
}

// Step 3: Add event listener
target.addEventListener('click', handleClick);
```

## Method 2: Using HTML Event Attributes

An alternative way to listen for events is by using **HTML event attributes**.

### Step 1: Create the Handler Function

```js
function handleClick2() {
    console.log('Clicked the heading');
}
```

### Step 2: Add the Attribute in HTML

Open the Elements panel of the developer tools and add the `onclick` attribute to the HTML element:

```html
<h1 onclick="handleClick2()">Example Heading</h1>
```

### How to Add via DevTools

1. Right-click the `<h1>` element in the Elements panel
2. Click "Edit as HTML"
3. After the `h1` tag name, add: `onclick="handleClick2()"`
4. Click outside the element to save the change

### Testing

When you click on the heading in the webpage:

- Both "Clicked the heading" and "Clicked the body" are output to the console
- This single click has triggered **two different event listeners**

When you click outside the heading:

- It only triggers the event listener that listens for clicks on the entire body element

## Common Event Types

| Event Type | Description | Example Use Case |
|------------|-------------|------------------|
| `click` | Element is clicked | Button clicks, menu items |
| `dblclick` | Element is double-clicked | Opening files |
| `mouseover` | Mouse pointer moves over element | Tooltips, hover effects |
| `mouseout` | Mouse pointer leaves element | Hiding tooltips |
| `keydown` | Key is pressed down | Keyboard shortcuts |
| `keyup` | Key is released | Form validation |
| `submit` | Form is submitted | Form validation |
| `change` | Input value changes | Form fields |
| `focus` | Element gains focus | Input fields |
| `blur` | Element loses focus | Input validation |

## addEventListener() Syntax

```js
element.addEventListener(eventType, handlerFunction, options);
```

### Parameters

1. **eventType** (string): The type of event to listen for (e.g., `'click'`, `'keydown'`)
2. **handlerFunction** (function): The function to call when the event occurs
3. **options** (optional): Additional options like `once`, `capture`, etc.

## Event Handler Examples

### Example 1: Button Click

```js
const button = document.querySelector('#myButton');

function handleButtonClick() {
    alert('Button was clicked!');
}

button.addEventListener('click', handleButtonClick);
```

### Example 2: Using Anonymous Functions

```js
const button = document.querySelector('#myButton');

button.addEventListener('click', function() {
    alert('Button was clicked!');
});
```

### Example 3: Using Arrow Functions

```js
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    alert('Button was clicked!');
});
```

### Example 4: Form Submission

```js
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted!');
});
```

### Example 5: Keyboard Events

```js
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});
```

## Event Object

When an event occurs, an **event object** is automatically passed to the handler function containing information about the event.

```js
button.addEventListener('click', (event) => {
    console.log(event.target); // The element that was clicked
    console.log(event.type);   // The event type (e.g., 'click')
    console.log(event.clientX); // Mouse X coordinate
    console.log(event.clientY); // Mouse Y coordinate
});
```

## Removing Event Listeners

You can remove an event listener using `removeEventListener()`:

```js
function handleClick() {
    console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener
button.removeEventListener('click', handleClick);
```

**Note:** You must pass the **same function reference** to remove it. Anonymous functions cannot be removed this way.

## Event Bubbling and Capturing

When an event occurs on an element, it can **bubble up** through its parent elements.

```js
// Event bubbling example
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', () => {
    console.log('Parent clicked');
});

child.addEventListener('click', () => {
    console.log('Child clicked');
});

// Clicking the child will log:
// "Child clicked"
// "Parent clicked"
```

### Stopping Event Propagation

```js
child.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Child clicked');
});
// Now clicking child will only log "Child clicked"
```

## Best Practices

1. **Use addEventListener()** instead of HTML event attributes for better separation of concerns
2. **Remove event listeners** when they're no longer needed to prevent memory leaks
3. **Use event delegation** for dynamically created elements
4. **Prevent default behavior** when needed with `event.preventDefault()`
5. **Name your handler functions** descriptively for better code readability

## Conclusion

You've learned how to write an event listener using:

1. The `addEventListener()` method
2. HTML event attributes (by writing a function directly as an HTML attribute)

Event handling is fundamental to creating interactive web pages. By listening for and responding to user actions, you can create dynamic, engaging web experiences.
