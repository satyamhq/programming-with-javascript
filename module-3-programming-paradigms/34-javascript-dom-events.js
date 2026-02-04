/*
========================================
Lab: DOM Manipulation & Input Events
========================================

Goal:
- Create DOM elements dynamically
- Listen for input changes
- Log user input values using event listeners
*/


// Create heading element
var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change";

// Create input element
var input = document.createElement('input');
input.setAttribute('type', 'text');

// Clear existing body content
document.body.innerText = "";

// Add elements to the DOM
document.body.appendChild(h1);
document.body.appendChild(input);

// Listen for input value changes
input.addEventListener('change', function () {
    console.log(input.value);
});
