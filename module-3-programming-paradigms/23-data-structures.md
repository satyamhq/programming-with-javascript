# Data Structures

## The Problem

Suppose you receive data on students' test results. Your task is to write a program that outputs an average grade from all the tests based on raw data.

Before coding this task, you need to consider two separate issues:

1. **How do you represent the data in your app?**
2. **How do you code the solution?**

## What is a Data Structure?

A **data structure** is a way to organize data.

## Different Ways to Represent Data

### Option 1: String (Inefficient)

```js
let grades = "85, 90, 78, 92, 88";
```

**Problem:** You'd need to extract the numbers from the string before performing calculations.

### Option 2: Individual Variables (Better, but not ideal)

```js
let grade1 = 85;
let grade2 = 90;
let grade3 = 78;
let grade4 = 92;
let grade5 = 88;
```

**Advantage:** No need to extract and convert strings to numbers.

**Problem:** Not the most efficient way of storing data.

### Option 3: Array (Most Efficient)

```js
let grades = [85, 90, 78, 92, 88];
```

**Advantages:**
- Less typing
- Groups related data together under a single label
- More efficient organization

## Key Concept

**How you code a solution depends on how you structure your data.**

In other words, a solution to a coding task depends on the **data structure** you use.

## Common JavaScript Data Structures

JavaScript is somewhat limited compared to languages like Java or Python, but offers these common data structures:

1. **Objects**
2. **Arrays**
3. **Maps**
4. **Sets**

## 1. Objects

### Definition

An **object** is an unordered, non-iterable collection of **key-value pairs**.

### When to Use

Use objects when you need to store and later access a value under a key.

### Example: OOP Code

```js
let student = {
    name: "Alice",
    age: 20,
    grade: 85
};

console.log(student.name);  // "Alice"
console.log(student.grade); // 85
```

### Characteristics

- **Unordered:** No specific sequence
- **Non-iterable:** Cannot directly loop over with for...of
- **Key-value pairs:** Access values using keys

## 2. Arrays

### Definition

An **array** is an ordered, iterable collection of values.

### When to Use

Use arrays when you need to store and later access a value under an index.

### Example

```js
let grades = [85, 90, 78, 92, 88];

console.log(grades[0]); // 85
console.log(grades[2]); // 78
```

### Characteristics

- **Ordered:** Values have specific positions
- **Iterable:** Can loop over with for, for...of
- **Indexed:** JavaScript automatically assigns indices
- **Index starts at 0:** First element is at index 0

### Common Use: Loops

Arrays are commonly used with loops to access and edit data.

#### Example: Calculate Average Grade

```js
let grades = [85, 90, 78, 92, 88];
let sum = 0;

// Loop to calculate total sum
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

// Calculate average
let average = sum / grades.length;
console.log(average); // 86.6
```

## 3. Maps

### Definition

A **Map** is like an array because it's iterable, but it consists of **key-value pairs**.

### Key Difference from Objects

- **Maps:** Any value can be used as a key
- **Objects:** Keys can only be strings or symbols

### Example

```js
let studentGrades = new Map();

studentGrades.set("Alice", 85);
studentGrades.set("Bob", 90);
studentGrades.set("Charlie", 78);

console.log(studentGrades.get("Alice")); // 85
console.log(studentGrades.size);         // 3
```

### Characteristics

- **Iterable:** Can loop over with for...of
- **Key-value pairs:** Similar to objects
- **Any key type:** Keys can be any data type (numbers, objects, etc.)

## 4. Sets

### Definition

A **Set** is a collection where **each item must be unique**.

### Unique Items Rule

If you try to add a non-unique item to a Set:
- The operation simply will not run
- No errors are thrown
- No updates are made to the Set

### Example

```js
let uniqueGrades = new Set();

uniqueGrades.add(85);
uniqueGrades.add(90);
uniqueGrades.add(85); // Won't be added - already exists

console.log(uniqueGrades); // Set { 85, 90 }
console.log(uniqueGrades.size); // 2
```

### Characteristics

- **Unique values:** No duplicates allowed
- **Iterable:** Can loop over values
- **Silent failure:** Duplicate additions are ignored

## Comparison Table

| Data Structure | Ordered | Iterable | Key-Value | Unique Values | Key Type |
|----------------|---------|----------|-----------|---------------|----------|
| **Object** | ❌ | ❌ | ✅ | ❌ | String/Symbol |
| **Array** | ✅ | ✅ | ❌ | ❌ | N/A (uses index) |
| **Map** | ✅ | ✅ | ✅ | ❌ | Any |
| **Set** | ❌ | ✅ | ❌ | ✅ | N/A |

## Choosing the Right Data Structure

### Use Objects When:
- You need key-value pairs
- Keys are strings or symbols
- You're writing object-oriented (OOP) code
- Order doesn't matter

### Use Arrays When:
- You need an ordered collection
- You want to access items by index
- You need to iterate over items
- You want to perform calculations (sum, average, etc.)

### Use Maps When:
- You need key-value pairs
- Keys can be any data type
- You need to iterate over entries
- You need to maintain insertion order

### Use Sets When:
- You need to ensure all values are unique
- You want to remove duplicates
- You need to check for existence of values

## Complete Example: Student Grades

```js
// Using Array
let grades = [85, 90, 78, 92, 88];
let sum = grades.reduce((acc, grade) => acc + grade, 0);
let average = sum / grades.length;
console.log(`Average: ${average}`); // Average: 86.6

// Using Object
let student = {
    name: "Alice",
    grades: [85, 90, 78, 92, 88],
    getAverage: function() {
        let sum = this.grades.reduce((acc, g) => acc + g, 0);
        return sum / this.grades.length;
    }
};
console.log(`${student.name}'s average: ${student.getAverage()}`);

// Using Map
let studentGrades = new Map();
studentGrades.set("Alice", [85, 90, 78]);
studentGrades.set("Bob", [92, 88, 95]);

for (let [name, grades] of studentGrades) {
    let avg = grades.reduce((a, b) => a + b) / grades.length;
    console.log(`${name}: ${avg}`);
}

// Using Set (remove duplicate grades)
let allGrades = [85, 90, 78, 92, 88, 85, 90];
let uniqueGrades = new Set(allGrades);
console.log(uniqueGrades); // Set { 85, 90, 78, 92, 88 }
```

## Summary

### What We Learned

1. **Data structures** are ways to organize data
2. **How you structure data** affects how you code solutions
3. JavaScript's common data structures:
   - **Objects:** Unordered key-value pairs
   - **Arrays:** Ordered, indexed collections
   - **Maps:** Iterable key-value pairs with any key type
   - **Sets:** Collections of unique values

### Key Takeaway

The data structure you choose depends on the **task at hand**.

Next time you have a coding task, think about which data structure would be most appropriate:
- Do you need key-value pairs? → **Object** or **Map**
- Do you need ordered data? → **Array**
- Do you need unique values? → **Set**
- Do you need to iterate? → **Array**, **Map**, or **Set**

### Best Practice

Before writing code:
1. **Analyze the data** you're working with
2. **Choose the appropriate data structure**
3. **Code your solution** based on that structure

Understanding data structures is fundamental to writing efficient, maintainable code!
