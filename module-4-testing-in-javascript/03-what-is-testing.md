# What is Testing?

## Overview

Testing is the process of verifying that your code works as expected before launching it. Just like you test anything you build to make sure it works, web developers test their JavaScript code to ensure it behaves correctly.

## Learning Objectives

By the end of this lesson, you'll be able to:

- Identify various reasons why developers test their code
- Explain how the red-green-refactor cycle relates to testing
- Differentiate between manual and automated testing
- Demonstrate an understanding of unit testing

## Example: Testing a Custom Function

Let's explore testing by creating a `concatStrings` function that joins two strings together.

### The Function

```js
function concatStrings(a, b) {
    return a + b;
}
```

### Expected Behavior

```js
concatStrings("abc", "def"); // Expected: "abcdef"
concatStrings("123", "456"); // Expected: "123456"
```

### Unexpected Behavior

```js
concatStrings(1, 2); // Returns: 3 (not "12")
```

When the function receives numbers 1 and 2, it returns 3 (a number) instead of "12" (a string), because the `+` operator performs mathematical addition on numbers.

## The Problem with Comments

You might document expected behavior using comments:

```js
// This function should join string A and string B
// concatStrings("abc", "def") should return "abcdef"
// concatStrings(1, 2) should return "12" as a string
function concatStrings(a, b) {
    return a + b;
}
```

### Downsides of Comments

- **Ambiguity**: You can write anything you like with no limits on clarity
- **No structure**: Comments don't need to follow any set format
- **Not executable**: You can't run comments to verify behavior
- **Not enforceable**: Comments can become outdated without warning

## Testing Frameworks: A Better Solution

Testing frameworks like **Jest** provide a better alternative to comments because:

- Test syntax itself becomes documentation of expectations
- Tests are **callable** (executable) to check if expectations are met
- Tests provide structure and clarity

### Writing Tests with Jest

Instead of comments, you can write executable tests:

```js
expect(concatStrings("abc", "def")).toBe("abcdef");
expect(concatStrings("123", "456")).toBe("123456");
```

This syntax states: "I expect that calling `concatStrings` with 'abc' and 'def' will return the value 'abcdef'."

## Benefits of Testing Code

Testing ensures three key qualities:

### 1. Conciseness
- Straightforward and to the point
- Only two function calls to explain the expected result

### 2. Clarity
- You know exactly what arguments you're providing
- You know exactly what result you expect

### 3. Repeatability
- You can run tests again and again with the same arguments
- Consistent results every time

## Passing and Failing Tests

### Passing Tests (Green)

When expectations are met, tests **pass** (are "green"):

```js
expect(concatStrings("abc", "def")).toBe("abcdef"); // ✅ PASS
expect(concatStrings("123", "456")).toBe("123456"); // ✅ PASS
```

### Failing Tests (Red)

When expectations are not met, tests **fail** (are "red"):

```js
expect(concatStrings(1, 2)).toBe("12"); // ❌ FAIL (returns 3, not "12")
```

This test fails because the `+` operator performs addition on numbers instead of concatenation.

## The Red-Green-Refactor Cycle

The red-green-refactor cycle is the foundation of **Test-Driven Development (TDD)**:

### 1. 🔴 Red: Write a Failing Test
- Write a test that describes what you want your code to do
- The test will fail because the functionality doesn't exist yet

### 2. 🟢 Green: Make the Test Pass
- Write the minimum code necessary to make the test pass
- Focus on making it work, not making it perfect

### 3. 🔵 Refactor: Improve the Code
- Optimize and clean up your code
- Improve efficiency and readability
- Do NOT change the behavior or results
- All tests should still pass after refactoring

### The Cycle Continues

This becomes a cyclical activity:
1. Red test guides you on what needs to be fixed
2. Write code to turn red tests green
3. Refactor to improve code quality
4. Repeat with the next feature or improvement

## Test-Driven Development (TDD)

TDD is a programming approach that follows the red-green-refactor cycle:

1. **Write a failing test first** (before writing any code)
2. **Write source code** to make the test pass
3. **Refactor** to optimize without changing results

## Manual vs. Automated Testing

### Manual Testing
- Running code manually to check results
- Time-consuming and error-prone
- Difficult to repeat consistently

### Automated Testing
- Tests run automatically
- Fast and repeatable
- Can be run as many times as needed
- Minimal cost in time or effort after initial setup

## Advantages of Automated Testing

- **Repeatability**: Run tests as many times as you want
- **Automation**: Tests can run automatically without human intervention
- **Speed**: Tests execute quickly and consistently
- **Cost-effective**: Minimal time and effort after initial test creation
- **Confidence**: Know immediately when changes break existing functionality
- **Documentation**: Tests serve as living documentation of code behavior

## Summary

Testing is how you verify the expectations you have regarding the behavior of your code. Key takeaways:

- Tests are better than comments for documenting expected behavior
- Tests are executable and can verify that code meets expectations
- The red-green-refactor cycle is the foundation of TDD
- Red tests (failing) guide you on what needs to be fixed
- Green tests (passing) confirm code works as expected
- Refactoring improves code without changing its behavior
- Automated testing provides repeatability, speed, and confidence

By writing tests, you ensure your code is concise, clear, and reliable.
