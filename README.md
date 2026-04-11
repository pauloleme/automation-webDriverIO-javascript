# Mobile Automation Project with WebdriverIO, Appium and Allure

## Overview

This project contains automated mobile tests built with WebdriverIO, Appium and Allure Report.

The automation was created using the Page Object Model pattern, with separation of responsibilities between test data, page objects and specs.
The goal is to keep the project organized, scalable and easy to maintain.

## Tech Stack

- WebdriverIO
- Appium
- Mocha
- Allure Report
- JavaScript
- Native mobile app testing
- Android and iOS emulator support

## Project Structure

The project follows this structure:

`test > data > pageobjects > specs`

### Folder Purpose

- `data`
  Stores static test data used by the test cases

- `pageobjects`
  Contains the screen elements and actions for each page

- `specs`
  Contains the test scenarios

This architecture helps separate:
- test data
- screen actions
- test validations

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- Java
- Android Studio
- Android SDK
  
## Installation

#### Install the project dependencies with:

`npm install`

## Running the Tests

The main command to execute the project and open the report is:

`npm run test:report`

This command will:

clear previous Allure results
run the WebdriverIO tests
open the Allure report

If you want to run only the test execution without opening the report, use:

`npm run wdio`

## Test Coverage

This project currently covers the following flows:

### Forms

#### Valid scenarios
- Type text in the input field and validate the typed value
- Turn the switch ON successfully
- Select an item from the dropdown
- Click the Active button
- Click the Inactive button

#### Forced failure scenario
- Intentionally fail after typing text in the input field and verifying the displayed value

This scenario was created to validate failure behavior and reporting in Allure.

### Login

#### Valid credentials
- Log in with valid credentials

#### Invalid credentials
- Display an error when attempting to log in without a password

### Navigation
- Navigate from Login screen to Sign Up screen
- Navigate to Home screen
- Navigate to Forms screen
- Navigate to Swipe screen
- Navigate to Drag screen

### Sign Up

#### Successful registration
- Sign up with valid data

#### Password validation
- Display an error when attempting to sign up without a password
- Display an error when signing up with a password shorter than 8 characters

#### Password confirmation validation
- Display an error when signing up with different passwords

## Test Design Pattern

This project uses the Page Object Model approach.

### Benefits of this approach
- Better code organization
- Easier maintenance
- Reusable methods
- Cleaner and more readable tests
- Separation between test logic and screen interaction logic



##  Scripts

The following scripts are available in `package.json`:

```json
"wdio": "wdio run ./wdio.android.app.conf.js",
"allure:clear": "if exist allure-results rmdir /s /q allure-results & if exist allure-report rmdir /s /q allure-report & if exist errorShots rmdir /s /q errorShots",
"allure:generate": "npx allure generate ./allure-results -o ./allure-report",
"allure:open": "npx allure open ./allure-report",
"allure:serve": "npx allure serve ./allure-results",
"test:report": "npm run allure:clear && npm run wdio & npm run allure:serve"  ´´´

