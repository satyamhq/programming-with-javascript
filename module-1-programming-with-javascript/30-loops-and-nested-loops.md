# Loops and Nested Loops

## Use Case: Custom Multiplication Table

Nested loops are perfect for creating multiplication and division tables. The outer loop's counter variable acts as the first number, and the inner loop's counter variable acts as the second number.

## Building the Multiplication Table

### Step 1: Create the Outer Loop

First, create a loop that will serve as the first number to be multiplied:

```js
// Single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}
```

**Output:**
```
0
1
```

This loop starts at 0 and stops after 1.

### Step 2: Create What Will Be the Inner Loop

Next, create the loop that will serve as the second number in the multiplication:

```js
// Single loop
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}
```

**Output:**
```
0
1
2
3
4
5
6
7
8
9
```

### Step 3: Combine Into Nested Loops

Now nest the second loop inside the first one and log both counter variables:

```js
// Nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
```

**Output:**
```
0, 0
0, 1
0, 2
0, 3
0, 4
0, 5
0, 6
0, 7
0, 8
0, 9
1, 0
1, 1
1, 2
1, 3
1, 4
1, 5
1, 6
1, 7
1, 8
1, 9
```

### Step 4: Add the Multiplication

Now that you have all the number combinations, perform the actual multiplication:

```js
// Nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}
```

**Output:**
```
0 times 0 equals 0
0 times 1 equals 0
0 times 2 equals 0
0 times 3 equals 0
0 times 4 equals 0
0 times 5 equals 0
0 times 6 equals 0
0 times 7 equals 0
0 times 8 equals 0
0 times 9 equals 0
1 times 0 equals 0
1 times 1 equals 1
1 times 2 equals 2
1 times 3 equals 3
1 times 4 equals 4
1 times 5 equals 5
1 times 6 equals 6
1 times 7 equals 7
1 times 8 equals 8
1 times 9 equals 9
```

## Custom Division Table

You can create interesting combinations by modifying the loop counters and operations. Here's a custom division table with decremental loops:

```js
// Nested loops - one inside another
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}
```

**Output:**
```
100 divided by 10 equals 10
100 divided by 5 equals 20
90 divided by 10 equals 9
90 divided by 5 equals 18
80 divided by 10 equals 8
80 divided by 5 equals 16
70 divided by 10 equals 7
70 divided by 5 equals 14
60 divided by 10 equals 6
60 divided by 5 equals 12
50 divided by 10 equals 5
50 divided by 5 equals 10
40 divided by 10 equals 4
40 divided by 5 equals 8
30 divided by 10 equals 3
30 divided by 5 equals 6
20 divided by 10 equals 2
20 divided by 5 equals 4
```

### How It Works

- **Outer loop:** Starts at 100, decreases by 10 each iteration, stops when `i <= 10`
- **Inner loop:** Starts at 10, decreases by 5 each iteration, stops when `j <= 4`
- For each value of `i`, the inner loop runs completely with values of `j`

## Key Concepts

### Execution Flow

1. **Outer loop executes once**
2. **Inner loop executes completely**
3. **Outer loop increments/decrements**
4. **Inner loop executes completely again**
5. **Process repeats** until outer loop condition is false

### Customization Options

You can modify:
- **Starting values:** Any number
- **Ending conditions:** Any comparison
- **Increment/decrement values:** Any step size
- **Operations:** Addition, subtraction, multiplication, division, etc.

## Practice Ideas

Try out some other combinations:

### Addition Table
```js
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log(i + " + " + j + " = " + (i + j));
    }
}
```

### Exponentiation Table
```js
for (var base = 2; base <= 4; base++) {
    for (var exp = 1; exp <= 3; exp++) {
        console.log(base + " to the power of " + exp + " equals " + Math.pow(base, exp));
    }
}
```

### Custom Pattern
```js
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= i; j++) {
        console.log("*".repeat(j));
    }
}
```

## Summary

- Nested loops are ideal for creating tables and combinations
- The outer loop controls the first variable
- The inner loop runs completely for each outer loop iteration
- You can customize starting values, conditions, and step sizes
- Mathematical operations can be performed on the counter variables
- Experiment with different combinations to see various outputs

Feel free to try out different combinations of nested loop iterations and see what kind of output you'll get!
