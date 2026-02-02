# Conditional Statements in JavaScript

## Overview

Conditional statements allow you to execute code based on whether a condition evaluates to `true` or `false`. This lesson covers `if...else` statements, `else if` chains, and `switch` statements.

## Basic If...Else Statement

The `if...else` statement executes different code blocks based on a condition.

### Example

```js
var result = 50;

if (result > 40) {
  console.log("You pass the test");
} else {
  console.log("You did not pass the test");
}
```

**Output:** `You pass the test`

### How It Works

- The condition `result > 40` evaluates to `true` (50 > 40)
- The code inside the `if` block executes
- If we change `result` to `30`, the condition becomes `false`
- The `else` block executes instead, outputting: `You did not pass the test`

## Multiple Conditions with Else If

When you need to check multiple conditions (not just binary true/false), use `else if` statements.

### Example

```js
var place = "first";

if (place === "first") {
  console.log("Gold");
} else if (place === "second") {
  console.log("Silver");
} else if (place === "third") {
  console.log("Bronze");
} else {
  console.log("No medal");
}
```

**Output:** `Gold`

### Key Points

- Each condition is checked in order
- The first `true` condition executes its code block
- The final `else` block is a catch-all for unmatched conditions
- This approach works but can become unmanageable with many conditions

## Switch Statements

The `switch` statement provides a cleaner alternative when evaluating multiple conditions against a single value.

### Example

```js
var place = "first";

switch (place) {
  case "first":
    console.log("Gold");
    break;
  case "second":
    console.log("Silver");
    break;
  case "third":
    console.log("Bronze");
    break;
  default:
    console.log("No medal");
}
```

**Output:** `Gold`

### Comparison: Else If vs Switch

Both approaches produce the same results:

- **Else If:** Better for complex conditions or ranges
- **Switch:** Cleaner syntax when checking a single variable against multiple values

If you change `place` to `"fourth"` in either example, the output will be: `No medal`

## Summary

- Use `if...else` for binary conditions (true/false)
- Use `else if` chains for multiple related conditions
- Use `switch` statements to streamline code when checking one variable against many possible values
- Always include a final `else` or `default` case as a catch-all

## Additional Resources

For more information about conditional statements and operators, refer to the additional reading linked at the end of this lesson.
