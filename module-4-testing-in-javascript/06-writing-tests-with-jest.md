# Writing Tests with Jest

## Overview

In this lesson, you'll learn how to install the packages needed to test your JavaScript code with the Jest framework and how to set up and run tests.

## Example Project: The addFive Function

Let's create a simple function that takes a value and adds five to it.

### Step 1: Create the Function File

Create a new file named `addFive.js`:

```js
function addFive(val) {
    return val + 5;
}

module.exports = addFive;
```

**What this code does:**
- Defines a simple function that adds 5 to any input value
- Exports the function so it can be used by other files in the project

## Prerequisites: Checking Your Installation

Before using Jest, verify that Node.js and npm are installed on your system.

### Check Node.js

```bash
node --version
```

**Example output:**
```
v16.15.0
```

### Check npm

```bash
npm --version
```

**Example output:**
```
8.5.0
```

### Check Jest

```bash
jest --version
```

**If not installed, you'll see:**
```
command jest not found
```

This means Jest is not globally installed on your machine.

## Installing Jest for Your Project

Jest needs Node.js to run and npm as a way to install Node modules into your project.

### Step 1: Initialize package.json

```bash
npm init -y
```

**What the `-y` flag does:**
- Automatically answers "yes" to all questions that the `init` command asks during installation
- Quickly creates a `package.json` file

**Result:** You now have a `package.json` file to keep track of Node modules that this project depends on.

### Step 2: Install Jest Locally

Install Jest for this specific project:

```bash
npm install --save-dev jest
```

**What happens:**
- The `package.json` file is updated with the Jest testing library
- A folder called `node_modules` is created, which stores the code for all modules in this project

### Step 3: Configure the Test Script

Update the `package.json` file to configure the test command.

In the `scripts` section, replace the test entry:

**Before:**
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

**After:**
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

**What this does:**
When you run `npm run test`, it will execute the `jest` command in this folder, which runs tests for all code in your project.

## Creating a Test File

### Naming Convention

For the `addFive.js` file, create a test file named `addFive.test.js`.

**Pattern:** `[filename].test.js`
- Add `.test` just before the `.js` extension
- This convention helps Jest automatically find test files

### Step 1: Import the Function

In `addFive.test.js`, import the exported `addFive` function:

```js
const addFive = require('./addFive');
```

**Breaking it down:**
- `require('./addFive')` - Import the function from the same folder
- `./` - Indicates the file is in the same folder as the test file
- `.js` extension is omitted - Node understands what you mean without it

### Step 2: Write the Test

```js
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
});
```

**Understanding the test syntax:**

```js
test(description, testFunction)
```

- **`test`** - Jest's testing method
- **First argument** - A string describing what the test does
  - This string is output in the command line when the test runs
  - Shows along with "pass" or "fail"
- **Second argument** - A function that checks if your expectation is correct
  - Contains `expect()` and matcher functions like `toBe()`

### Step 3: Run the Test

Execute the test:

```bash
npm run test
```

**Expected output (passing test):**
```
PASS  ./addFive.test.js
  ✓ returns the number plus 5 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

## Complete Code Example

### addFive.js
```js
function addFive(val) {
    return val + 5;
}

module.exports = addFive;
```

### addFive.test.js
```js
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
});
```

### package.json
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

## Writing Multiple Tests

You can write multiple tests in the same file:

```js
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
});

test('works with negative numbers', () => {
    expect(addFive(-5)).toBe(0);
});

test('works with zero', () => {
    expect(addFive(0)).toBe(5);
});

test('works with large numbers', () => {
    expect(addFive(100)).toBe(105);
});
```

## Jest Matchers

Jest provides various matchers to test different conditions:

| Matcher | Purpose | Example |
|---------|---------|---------|
| `.toBe()` | Exact equality | `expect(2 + 2).toBe(4)` |
| `.toEqual()` | Deep equality (objects/arrays) | `expect({a: 1}).toEqual({a: 1})` |
| `.toBeTruthy()` | Truthy value | `expect(1).toBeTruthy()` |
| `.toBeFalsy()` | Falsy value | `expect(0).toBeFalsy()` |
| `.toBeNull()` | Null value | `expect(null).toBeNull()` |
| `.toBeUndefined()` | Undefined value | `expect(undefined).toBeUndefined()` |
| `.toContain()` | Array/string contains item | `expect([1, 2, 3]).toContain(2)` |
| `.toThrow()` | Function throws error | `expect(() => func()).toThrow()` |

## Project Structure

After setup, your project should look like this:

```
my-project/
├── node_modules/
│   └── (Jest and dependencies)
├── addFive.js
├── addFive.test.js
└── package.json
```

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm init -y` | Initialize package.json |
| `npm install --save-dev jest` | Install Jest locally |
| `npm run test` | Run all tests |
| `npm test` | Shorthand for `npm run test` |
| `npm test -- --watch` | Run tests in watch mode |
| `npm test -- --coverage` | Run tests with code coverage |

## Test Output Explained

### Passing Test
```
PASS  ./addFive.test.js
  ✓ returns the number plus 5 (2 ms)
```
- **PASS** - Test suite passed
- **✓** - Individual test passed
- **(2 ms)** - Time taken to run the test

### Failing Test
```
FAIL  ./addFive.test.js
  ✕ returns the number plus 5 (5 ms)

  Expected: 6
  Received: 7
```
- **FAIL** - Test suite failed
- **✕** - Individual test failed
- Shows expected vs. received values

## Summary

In this lesson, you learned:

1. How to verify Node.js and npm installation
2. How to check if Jest is installed
3. How to initialize a project with `npm init -y`
4. How to install Jest locally with `npm install --save-dev jest`
5. How to configure the test script in `package.json`
6. How to create a test file following the naming convention
7. How to import functions using `require()`
8. How to write tests using the `test()` function and `expect()` assertions
9. How to run tests with `npm run test`
10. How to read test output to see if tests pass or fail

You're now ready to write and run tests for your JavaScript code using Jest!
