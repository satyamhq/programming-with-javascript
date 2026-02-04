# Installing Node.js and NPM

## Overview

This guide walks you through verifying existing installations and installing Node.js and npm on Windows, macOS, and Ubuntu (Linux).

## Verifying Existing Installation

Before installing Node.js and npm, check if they're already installed on your machine.

### On Windows

1. Press `WINKEY + R` to open the Run window
2. Type `cmd` and press Enter to open Command Prompt
3. Check Node.js version:
   ```bash
   node --version
   ```
   
   **Example output:**
   ```
   v16.14.2
   ```

4. Check npm version:
   ```bash
   npm --version
   ```
   
   **Example output:**
   ```
   8.5.0
   ```

### On Ubuntu (Linux)

1. Press `CTRL + ALT + T` to open a terminal window
2. Check both Node.js and npm versions at once:
   ```bash
   node --version && npm --version
   ```
   
   Both version numbers should appear in the terminal.

## Installation Instructions

### Installing on Windows

1. Navigate to the official Node.js website: **https://nodejs.org**
2. Locate the big download button listing the **LTS version**
3. As of May 2022, the LTS version available is `16.15.0`
4. Download and run the installer
5. Follow the installation wizard

### Installing on macOS

Installing Node.js on macOS requires XCode and Homebrew.

#### Step 1: Install XCode

Homebrew requires a compiler, which is provided by XCode:

1. Open a terminal
2. Run the following command:
   ```bash
   xcode-select --install
   ```
3. A popup will appear asking you to confirm the installation
4. Click the **Install** button
5. Agree to the license agreement

#### Step 2: Install Homebrew

Macs don't come with package managers like most Linux distributions. Homebrew fills this gap.

1. Visit the official Homebrew website: **https://brew.sh/**
2. Copy the installation command provided
3. Open a terminal and run:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

#### Step 3: Install Node.js with Homebrew

1. Once Homebrew is installed, run:
   ```bash
   brew install node
   ```
2. Homebrew will download and install Node.js and its dependencies

#### Step 4: Verify Installation

1. Check Node.js version:
   ```bash
   node -v
   ```
   This will display the Node.js version.

2. Check npm version:
   ```bash
   npm -v
   ```
   This will display the npm version number.

### Installing on Ubuntu

1. Press `CTRL + ALT + T` to open a terminal
2. Update package list:
   ```bash
   sudo apt update
   ```
3. Install Node.js:
   ```bash
   sudo apt install nodejs
   ```
4. Install npm (if not included):
   ```bash
   sudo apt install npm
   ```

That's it! You should be all set.

## Quick Reference

### Verification Commands

| Operating System | Command |
|-----------------|---------|
| Windows | `node --version` and `npm --version` |
| macOS | `node -v` and `npm -v` |
| Ubuntu/Linux | `node --version && npm --version` |

### Installation Methods

| Operating System | Method |
|-----------------|--------|
| Windows | Download installer from nodejs.org |
| macOS | Use Homebrew package manager |
| Ubuntu/Linux | Use apt package manager |

## Important Notes

- **LTS Version**: Always prefer the LTS (Long Term Support) version for stability
- **XCode on macOS**: Required for Homebrew to work correctly
- **Permissions on Linux**: You may need `sudo` privileges for installation
- **Updates**: Regularly update Node.js and npm to get the latest features and security patches

## Troubleshooting

For advanced setup and troubleshooting, refer to:
- Official Node.js documentation: https://nodejs.org/en/docs/
- npm documentation: https://docs.npmjs.com/
- Homebrew troubleshooting: https://docs.brew.sh/Troubleshooting

## Next Steps

After successful installation:
1. Verify both Node.js and npm are working
2. Consider updating npm to the latest version: `npm install -g npm@latest`
3. Start building your first Node.js project!
