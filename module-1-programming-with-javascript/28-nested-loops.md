# Nested Loops

## Overview

What if you need your code to perform more than one task at the same time? For example:
- Processing data set A while also processing data set B
- Looping through weeks and days simultaneously
- Displaying months across multiple years

In cases like this, you can use **nested loops** - loops within other loops that allow multiple tasks to be performed at once.

## What are Nested Loops?

A nested loop is a loop inside another loop. JavaScript allows you to nest loops within other loops, and there can be multiple levels of nesting.

### Structure

```js
for (outer loop) {
    for (inner loop) {
        // Code executes for each combination
    }
}
```

## Practical Example: Two-Week Plan

Suppose you're creating a two-week plan for Monday to Friday. You need to output each day number and the week it's associated with:
- Week 1: Days 1-5
- Week 2: Days 1-5

### Code

```js
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log("Week " + i + ", Day " + j);
    }
}
```

### Output

```
Week 1, Day 1
Week 1, Day 2
Week 1, Day 3
Week 1, Day 4
Week 1, Day 5
Week 2, Day 1
Week 2, Day 2
Week 2, Day 3
Week 2, Day 4
Week 2, Day 5
```

### Breaking It Down

- **Outer loop:** Loops over the weeks (variable `i`)
  - Counter: `i` starts at 1, runs while `i <= 2`, increments by 1
- **Inner loop:** Loops over the days (variable `j`)
  - Counter: `j` starts at 1, runs while `j <= 5`, increments by 1
- **Output:** Displays the values of `i` and `j` for each combination

## How Nested Loops Execute

### Step-by-Step Execution

1. **Outer loop runs once** (i = 1)
2. **Inner loop runs completely** (j = 1, 2, 3, 4, 5)
3. **Outer loop runs again** (i = 2)
4. **Inner loop runs completely again** (j = 1, 2, 3, 4, 5)
5. **Outer loop exits** (i = 3, condition fails)

For each iteration of the outer loop, the inner loop runs its **entire cycle**.

## Example: Summer Months Over Two Years

Display the summer months (June, July, August) for 2023 and 2024.

### Code

```js
for (let year = 2023; year < 2025; year++) {
    console.log(year);
    for (let month = 6; month < 9; month++) {
        console.log("---" + month);
    }
}
```

### Output

```
2023
---6
---7
---8
2024
---6
---7
---8
```

### Execution Flow

1. **Outer loop (year = 2023):**
   - Logs: `2023`
   - Enters inner loop
   - Inner loop runs 3 times (months 6, 7, 8)
   - Logs: `---6`, `---7`, `---8`
   - Inner loop exits

2. **Outer loop (year = 2024):**
   - Logs: `2024`
   - Enters inner loop
   - Inner loop runs 3 times (months 6, 7, 8)
   - Logs: `---6`, `---7`, `---8`
   - Inner loop exits

3. **Outer loop exits** (year = 2025, condition `2025 < 2025` is false)

## Variable Naming Convention

### Descriptive Names

```js
for (let year = 2023; year < 2025; year++) {
    for (let month = 6; month < 9; month++) {
        console.log(year + "-" + month);
    }
}
```

### Standard Practice (i, j, k)

```js
for (let i = 2023; i < 2025; i++) {
    for (let j = 6; j < 9; j++) {
        console.log(i + "-" + j);
    }
}
```

Using `i`, `j`, `k` for loop counters is **standard practice** in the development community and considered a **best practice**. While it may seem less descriptive, developers universally recognize these as loop counters.

## Performance Considerations

⚠️ **Important:** Nested loops can be **resource-intensive** and impact performance.

### Why?

The more nested loops you have, the slower your code will run because:
- The inner loop runs completely for **each** iteration of the outer loop
- Time complexity increases exponentially with nesting levels

### Example: Computational Cost

```js
// Outer loop: 10 iterations
// Inner loop: 10 iterations per outer loop iteration
// Total: 10 × 10 = 100 operations

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}
```

If you add a third level of nesting with 10 iterations, you'd have 10 × 10 × 10 = 1,000 operations!

### Best Practice

- Use nested loops when necessary, but don't overdo it
- Multiple levels of nested loops are not very performant
- A good developer writes code efficiently to maximize resources

## When to Use Nested Loops

Nested loops are useful for:
- Working with multi-dimensional data (grids, tables, matrices)
- Sorting numbers from highest to lowest
- Automated repetition of code with multiple parameters
- Generating combinations or patterns
- Processing data that has hierarchical relationships

## Summary

- **Nested loops** are loops within other loops
- The **outer loop** controls the primary iteration
- The **inner loop** runs completely for each outer loop iteration
- Use standard variable names: `i` for outer loop, `j` for inner loop, `k` for third level
- Be mindful of performance - nested loops can be resource-intensive
- Use nested loops when you need to work with multiple dimensions or combinations

## Practice Challenge

Try creating your own nested loop! Remember: while nested loops are powerful, efficient code maximizes resources. You're on your way to becoming a good developer!
