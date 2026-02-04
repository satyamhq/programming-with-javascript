# Node.js and npm

## A Brief History

In 1886, the first internal combustion engine-powered car was invented by Karl Benz. Soon, there were many vehicles that used the combustion engine:

- Cars
- Airplanes
- Motorbikes
- Boats

People's ingenuity led to using the combustion engine in places that the inventor might not have imagined.

**The same happened to JavaScript.**

## JavaScript Beyond the Browser

### JavaScript's Original Home

JavaScript's home is in the **browser**. That's the environment in which it was used for several years. Essentially, it was a **front-end only language**.

### The Birth of Node.js

Then in **2009**, a developer named **Ryan Dahl** decided to use Google's JavaScript V8 engine and make it work on the server.

It's not always easy being an innovator - many doubted whether it was even possible. However, the idea caught on and more people started getting on board.

**This is how Node.js was born and how JavaScript became a language for both front-end and back-end.**

## What is Node.js?

Node.js is a **separate standalone environment**.

This means that Node.js can run in multiple settings:

- On the command line
- In a desktop application
- On the back end of a web app

### Before Node.js

Before the introduction of Node.js, developers had to build backends in other technologies and languages such as:

- PHP
- Python
- C#
- Ruby
- Java

### After Node.js

After Node.js became available, it was possible to use **JavaScript on the backend or on the server-side**.

This means that today you can write **full-stack JavaScript programs**. In other words, you can write JavaScript on the client and on the server.

## What is npm?

Node.js comes with a package manager called **npm**, which stands for **Node Package Manager**.

The package manager allows you to use a large number of libraries and frameworks as Node.js modules.

### npm Modules

An **npm module** is a standalone piece of code that has been published on the npm website.

Sometimes an npm module is also referred to as an **npm package**.

## Installing Node.js and npm

Node.js and npm are either:

- Pre-installed on your machine, or
- Need to be installed

Once installed, you can interact with Node.js and npm from the **command line** (also called a **shell** or **terminal**).

## Basic Commands

### The `node` Command

You can run the `node` command inside your computer's command line.

**Purpose:** Use the `node` command to:

- Run a JavaScript file
- Directly execute JavaScript code

**Example:**

```bash
node myScript.js
```

### The `npm` Command

You can run the `npm` command in the same way.

**Purpose:** Use the `npm` command to:

- Install any node module from the npm repository

**Example:**

```bash
npm install lowercase
```

Once installed, you can import this module and use its functions to transform strings to lowercase in your code.

## Starting a New Project

### Steps to Create a New Project

1. Open a folder on your machine where you want to place your project files
2. Run the `npm init` command

```bash
npm init
```

This will create a `package.json` file.

### What is package.json?

These projects can be different shapes and sizes, but they all have at least one thing in common: the **package.json** file that gets created after you run the npm command.

The `package.json` file holds all the instructions on all the node modules that are pulled from the npm repository of open source modules.

**There are about 11 million modules in the npm repository.**

## Installing Packages

You can get thousands of hours worth of other developers' coding by running the `npm install` command and adding the package name.

### Examples of Libraries You Can Install

- React
- Webpack
- Bootstrap
- Angular Core

### Installing a Package

```bash
npm install react
npm install webpack
npm install bootstrap
```

### What Happens When You Install

The `package.json` file **updates** when you install a new package. It keeps track of everything you need to have installed in your project.

## Project Portability

The `package.json` file makes projects **easily portable**.

### Example Workflow

1. You build a project with a specific number of different node packages
2. They're all listed inside the `package.json` file
3. Share this file with your co-workers
4. They can have the exact same setup on their machines simply by running:

```bash
npm install
```

This `install` command:

- Reads the contents of the `package.json`
- Installs all the necessary packages (also referred to as **dependencies**)

### Dependencies

Sometimes dependencies also come with their own dependencies.

It often happens that when you run the `npm install` command, several hundred megabytes worth of node packages get installed into your project under the **node_modules** folder.

## Common npm Commands

### Initialize a New Project

```bash
npm init
# or
npm init -y  # Skip questions and use defaults
```

### Install a Package

```bash
npm install <package-name>
# or
npm i <package-name>  # Shorthand
```

### Install a Package as a Dev Dependency

```bash
npm install <package-name> --save-dev
# or
npm i <package-name> -D  # Shorthand
```

### Install All Dependencies from package.json

```bash
npm install
```

### Uninstall a Package

```bash
npm uninstall <package-name>
```

### Update Packages

```bash
npm update
```

### List Installed Packages

```bash
npm list
```

### Run Scripts

```bash
npm run <script-name>
```

## Project Structure

A typical Node.js project structure looks like this:

```
my-project/
├── node_modules/     # Installed packages (not committed to git)
├── package.json      # Project metadata and dependencies
├── package-lock.json # Exact dependency versions
├── index.js          # Main application file
└── .gitignore        # Files to ignore in git
```

## Example package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My awesome project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

## Key Concepts

### Full-Stack JavaScript

- **Front-end**: JavaScript in the browser
- **Back-end**: JavaScript with Node.js
- **Full-stack**: Both front-end and back-end using JavaScript

### npm Repository

- Over **11 million modules** available
- Open source community contributions
- Free to use and publish

### Dependencies

- **Dependencies**: Packages required for the application to run
- **DevDependencies**: Packages only needed during development (testing, building, etc.)

## Best Practices

1. **Always use package.json**: Track all dependencies
2. **Add node_modules to .gitignore**: Don't commit installed packages
3. **Use package-lock.json**: Ensures consistent installations across environments
4. **Keep dependencies updated**: Regularly update to get security fixes
5. **Check package sizes**: Be mindful of how many dependencies you add

## Summary

In this lesson, you learned:

- The **origins of Node.js** and how it was created by Ryan Dahl in 2009
- What **Node.js** is: A standalone JavaScript environment that runs outside the browser
- What **npm** is: Node Package Manager for installing and managing packages
- How to use basic **Node and npm commands** on the command line
- The purpose of **package.json**: Tracking project dependencies
- How to make projects **portable** using package.json
- The concept of **full-stack JavaScript development**

Node.js transformed JavaScript from a front-end only language to a full-stack language, enabling developers to use JavaScript for both client-side and server-side development.
