# Introduction to Jest

## Overview

JavaScript has no built-in testing functionality, so developers rely on testing frameworks. **Jest** is a popular JavaScript testing framework that provides comprehensive testing capabilities for modern JavaScript applications.

## Why Testing Frameworks Are Needed

JavaScript doesn't have built-in objects or methods for writing tests. Therefore, many different libraries have been built to tackle testing challenges.

### Popular JavaScript Testing Libraries

- Jasmine
- Mocha
- Karma
- qUnit
- **Jest** (focus of this lesson)

## What is Jest?

Jest is a JavaScript testing framework often used for testing:

- Plain JavaScript
- React (a JavaScript library maintained by Meta)
- Babel
- TypeScript
- Node.js
- Angular
- Vue
- Various other frameworks

Jest is maintained by Meta (Facebook) and a community of individual developers and companies.

## Key Features of Jest

### 1. Code Coverage

**Code coverage** is a measure of what percentage of your code is covered by tests.

#### Understanding Code Coverage

- **80% code coverage** = Only one-fifth (20%) of your entire codebase is not covered by tests
- **100% code coverage** = Every line of code has some expectations tested

#### Important Notes

- 100% code coverage doesn't mean you've tested for every conceivable expectation
- It just means there are some expectations tested for each line of code
- Code coverage is a handy tool to gauge how much of your codebase is included in tests

#### Benefits of High Code Coverage

- **Lower chance of unidentified bugs**: More code is verified through tests
- **Less time to write new tests**: As a rule, higher code coverage percentages mean less time needed for new tests
- **Better confidence**: More of your code is verified to work as expected

**Note:** This depends on whether there are incomplete software requirements pending or if you will receive more requirements in the future.

### 2. Mocking

**Mocking** allows you to separate the code you are testing from its related dependencies.

#### What Mocking Does

- Makes sure your unit testing is stand-alone
- Allows you to test code independently of external systems
- Simulates data and functionality without actual implementation

#### Practical Example: Front-End Testing

You can test the front-end functionality of your web app by mocking data as if it came from a server, when in fact it came from the client.

#### Real-World Scenario: Address Book Feature

**The Problem:**
A team is building a new feature that lists users' address books on the front end. The actual user data comes from the server, but the back-end developer is delayed in developing their part.

**Without Mocking:**
The front-end developer is stuck waiting for the back-end developer to complete their work.

**With Mocking:**
- Front-end developers can pretend that users already exist
- The needed data comes from the mock rather than from the backend
- Front-end developers can finish their side of the feature independently
- Features can be shipped faster

#### Mocking in Jest

- Jest includes built-in **mock functions** - no additional installations required
- Other libraries like Sinon focus specifically on mocking
- Jest makes mocking simple and accessible without extra setup

#### Benefits of Mocking

- Avoid bottlenecks in team development
- Enable parallel development (front-end and back-end teams work simultaneously)
- Ship features faster
- Test components in isolation
- Create reliable, predictable tests

### 3. Asynchronous Testing

Jest makes it easy to test asynchronous code:

- **No difficult setups** required
- **Easy to code** tests, even for newcomers to the framework
- Built-in support for promises, async/await, and callbacks

### 4. Snapshot Testing

**Snapshot testing** is used to verify that there are no regressions in the DOM of your apps after changes to the codebase are made.

#### How Snapshot Testing Works

1. Jest takes a "snapshot" of your component's output
2. Future test runs compare new output against the saved snapshot
3. If the output changes, the test fails
4. You can review changes and update snapshots if the changes are intentional

#### Benefits

- Catch unexpected UI changes
- Verify components render consistently
- Detect unintended regressions
- Quick way to test component output

## Why Choose Jest?

Jest offers several advantages over other testing frameworks:

| Feature | Benefit |
|---------|---------|
| **All-in-one** | Built-in mocking, code coverage, and snapshot testing |
| **Easy setup** | Minimal configuration required |
| **Fast** | Runs tests in parallel for speed |
| **Developer-friendly** | Clear error messages and simple syntax |
| **Widely supported** | Works with most JavaScript frameworks |
| **No extra dependencies** | Mock functions included out of the box |

## Getting Started with Jest

### Installation

```bash
npm install --save-dev jest
```

### Basic Test Example

```js
// sum.js
function sum(a, b) {
    return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

### Running Tests

```bash
npm test
```

## Key Concepts Summary

### Code Coverage
- Measures what percentage of code is tested
- Higher coverage = fewer unidentified bugs
- Doesn't guarantee all scenarios are tested

### Mocking
- Separates code from dependencies
- Enables stand-alone unit testing
- Allows parallel team development
- Built into Jest - no extra libraries needed

### Asynchronous Testing
- Easy to test promises and async/await
- Simple setup with minimal configuration
- Beginner-friendly syntax

### Snapshot Testing
- Verifies no regressions in DOM after code changes
- Catches unexpected UI changes
- Quick way to test component rendering

## Summary

You are now familiar with testing JavaScript code using the Jest testing framework. Jest provides:

- **Code coverage** to measure test completeness
- **Mocking** to test code in isolation and avoid development bottlenecks
- **Easy asynchronous testing** with minimal setup
- **Snapshot testing** to detect UI regressions

Jest is a comprehensive, developer-friendly testing framework that makes it easy to write reliable tests for JavaScript applications, whether you're testing plain JavaScript, React, or other modern frameworks.
