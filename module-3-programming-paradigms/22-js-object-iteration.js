/*
========================================
Lab: Iterating Over Arrays and Objects
========================================

This lab demonstrates how to iterate over:
1. Arrays using for...of
2. Object own properties using for...of with Object.keys()
3. Object own + prototype properties using for...in
*/


/* ======================================
   Task 1: Iterate Over an Array
   ====================================== */

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const item of dairy) {
        console.log(item);
    }
}

logDairy();


/* ======================================
   Task 2: Iterate Over an Object's Own Properties
   ====================================== */

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(key + ": " + bird[key]);
    }
}

birdCan();


/* ======================================
   Task 3: Iterate Over an Object and Its Prototype Properties
   ====================================== */

function animalCan() {
    for (const key in bird) {
        console.log(key + ": " + bird[key]);
    }
}

animalCan();
