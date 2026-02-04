# Test-Driven Development (TDD)

## Overview

Test-Driven Development (TDD) is a streamlined process of writing code that satisfies requirements by writing tests **before** writing the actual implementation code.

## What is TDD?

Every piece of software is built according to formal or informal requirements. Requirements explain, in human language, the intricacies of what the software does. TDD ties requirements directly to the development process through a systematic approach.

## How TDD Works: A Real-Life Analogy

### Traditional Approach (Without TDD)

1. You leave your house to drive to work
2. You walk to your car
3. You discover you don't have your car keys
4. You remember they're in the cabinet
5. You go back to get them

**Problem:** You only checked for your keys after you needed them.

### TDD Approach

1. **First:** Check (test) if you have your keys with you
2. **Test fails:** You don't have them - they're in the cabinet
3. **Perform action:** Get your keys from the cabinet
4. **Check again (test):** You now have your keys
5. **Test passes:** You can proceed to your car

**Key insight:** You check (test) **before** taking action.

## The TDD Process in Code

### Step 1: Write a Failing Test First

Even before writing any implementation, write the test:

```js
// Test: Check if a function named statusOfKeys exists
test('statusOfKeys function exists', () => {
    expect(typeof statusOfKeys).toBe('function');
});
```

**Result:** The test **fails** because there's no `statusOfKeys` function declared yet.

### Step 2: Write Minimum Code to Pass

Write just enough code to make the test pass:

```js
// Source code
function statusOfKeys() {
    // Empty function - just enough to exist
}
```

**Result:** The test now **passes** because the function exists.

### Step 3: Add New Requirements

**New requirement:** 
- Accept a `keys` variable (set to `true`)
- Console log the `keys` variable

### Step 4: Write Another Failing Test

```js
test('statusOfKeys logs the keys variable', () => {
    const mockLog = jest.spyOn(console, 'log');
    statusOfKeys(true);
    expect(mockLog).toHaveBeenCalledWith(true);
});
```

**Result:** Test **fails** - function doesn't accept parameters or log anything yet.

### Step 5: Update Implementation

```js
function statusOfKeys(keys) {
    console.log(keys);
}
```

**Result:** Test now **passes**.

### Step 6: Refactor

Clean up your code:

```js
// Before refactoring (messy)
function statusOfKeys(keys) {
    // Comment: This logs the keys
    console.log(keys); // Another comment
}

// After refactoring (clean)
function statusOfKeys(keys) {
    console.log(keys);
}
```

Run tests again to confirm nothing broke during refactoring. Test still **passes**.

## The TDD Workflow

### Daily Development Process

As a member of the development team:

1. **Read the requirement** (passed by project manager)
2. **Write a failing test** (Red)
3. **Update source code** to resolve the requirement (Green)
4. **Run test** - it passes
5. **Refactor** implementation for cleaner code
6. **Run test again** to confirm refactoring didn't break anything

## The Red-Green-Refactor Cycle

TDD is often summarized in three words:

### 🔴 Red (Failing Test)
- Write a test that fails
- Test defines what you want to build
- No implementation exists yet

### 🟢 Green (Passing Test)
- Write minimum code to make the test pass
- Focus on functionality, not perfection
- Test now succeeds

### 🔵 Refactor (Clean Code)
- Improve code quality without changing behavior
- Optimize performance
- Improve readability
- Remove duplication
- Tests still pass after changes

### The Cycle Repeats

```
Red → Green → Refactor → Red → Green → Refactor → ...
```

## Key TDD Rules

### Rule 1: Write the Test First
Always write the test before writing implementation code.

### Rule 2: Write Minimum Code
Write only enough code to make the test pass - no more, no less.

### Rule 3: Refactor Without Changing Behavior
Improve code structure while ensuring tests still pass.

## Advantages of TDD

### 1. Minimize Regressions
- Prevents accidental bugs in old code when adding new features
- Catches breaking changes immediately

### 2. Proof of Non-Breaking Changes
- Confirms new implementations don't break other parts of the app
- Provides confidence when making changes

### 3. Easy Automation
- Tests can be automated and run repeatedly
- Continuous verification that the system works as expected

### 4. Comprehensive Testing
- Test implementations with various inputs
- Cover edge cases systematically

### 5. Living Documentation
- Tests serve as documentation for new team members
- Clearly show how code should behave
- Demonstrate usage examples

### 6. Better Design
- Writing tests first encourages better code architecture
- Forces you to think about requirements clearly

### 7. Confidence in Changes
- Make changes fearlessly knowing tests will catch issues
- Refactor with confidence

## TDD Benefits for Organizations

When implemented correctly, TDD brings huge benefits:

- **Automated testing** across all platforms
- **Scalability** as projects grow bigger and more complex
- **Strong signal** that current and previous requirements are met
- **Verification** that nothing is breaking
- **Reduced debugging time** by catching issues early
- **Higher code quality** through continuous refactoring

## TDD Example: Complete Workflow

### Requirement 1: Function Should Exist

**Test (Red):**
```js
test('concatStrings function exists', () => {
    expect(typeof concatStrings).toBe('function');
});
// ❌ FAIL: concatStrings is not defined
```

**Implementation (Green):**
```js
function concatStrings() {}
// ✅ PASS: Function exists
```

### Requirement 2: Concatenate Two Strings

**Test (Red):**
```js
test('concatenates two strings', () => {
    expect(concatStrings('abc', 'def')).toBe('abcdef');
});
// ❌ FAIL: Expected 'abcdef', received undefined
```

**Implementation (Green):**
```js
function concatStrings(a, b) {
    return a + b;
}
// ✅ PASS: Returns 'abcdef'
```

### Requirement 3: Handle Numbers as Strings

**Test (Red):**
```js
test('converts numbers to strings before concatenating', () => {
    expect(concatStrings(1, 2)).toBe('12');
});
// ❌ FAIL: Expected '12', received 3
```

**Implementation (Green):**
```js
function concatStrings(a, b) {
    return String(a) + String(b);
}
// ✅ PASS: Returns '12'
```

**Refactor (still Green):**
```js
function concatStrings(a, b) {
    return `${a}${b}`;
}
// ✅ PASS: Cleaner implementation using template literals
```

## Common TDD Pitfalls to Avoid

- Writing too much code at once before running tests
- Skipping the refactor step
- Writing tests after implementation (not TDD!)
- Not running tests frequently enough
- Testing implementation details instead of behavior
- Writing tests that are too coupled to the implementation

## TDD vs Traditional Development

| Aspect | Traditional | TDD |
|--------|-------------|-----|
| **Order** | Code first, then test | Test first, then code |
| **Focus** | Implementation | Requirements and behavior |
| **Bugs** | Found later | Caught immediately |
| **Refactoring** | Risky | Safe with test coverage |
| **Documentation** | Separate | Tests serve as docs |
| **Confidence** | Lower | Higher |

## Summary

In this lesson, you learned:

1. **What TDD is**: A streamlined process of writing tests before implementation
2. **The TDD workflow**: Read requirements → Write failing test → Implement → Pass test → Refactor
3. **Red-Green-Refactor cycle**: The core pattern of TDD
   - 🔴 **Red**: Write a failing test
   - 🟢 **Green**: Make it pass with minimum code
   - 🔵 **Refactor**: Improve code without changing behavior
4. **Advantages**: Minimizes regressions, enables automation, provides documentation, improves design
5. **Benefits**: Leads to better code quality, catches bugs early, and provides confidence in changes

TDD is a powerful approach that, when implemented correctly, brings huge benefits to organizations through automated testing, reduced bugs, and maintainable code that scales as projects grow in complexity.
