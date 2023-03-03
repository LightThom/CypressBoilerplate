
# CypressBoilerplate

  

CypressBoilerplate

  

A starter repo for writing E2E tests with cypress using TypeScript

  

## What's inside

  

- Cypress/TypeScript inital setup

- How to run tests within Cypress/VSCode

- Working with Page Objects

- Working with

- Reporting

  

## Set Up

  

### Install Visual Studio Code

  

[Install VSCode](https://code.visualstudio.com/download)

  

### Install NPM Node js

  

[Install node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

  

### Install Node modules

  

In order to run our tests we need to install the required node modules.

  

`npm install` will install all required node modules)

  

### Run Cypress

  

`npx cypress open` opens cypress

  

## Usage

  

### Working with Page Objects

  

A page object represents a part of your web application. A web application might have a home page, a listings page and a about page. Each of them can be represented by page object models.

  

Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place and create reusable code to avoid repetition.

  

### Working with Indexes

  

An index represents a collection of pages/classes within the framework in a single file.

  

Index's can be imported to reduce the number of imports across files, reducing maintainability, reducing code and simplifying the code.

  

### Utils - Constants & Helpers

  

TBC

  

### Test Structure

  

TBC

  

### How to set up Api request

  

TBC

  

### How to run your tests

  

In order to run our tests we need to run them in the terminal

  

`npm run test` runs our tests and generates a report

  
  

### Reporting

  

To generate reports we are using Mochawesome

  

`npm run test` opens cypress

  

Cypress executes each spec in isolation and hence a separate test report is generated for each spec. This is a problem because we need one single report for the complete run (which include multiple specs).

**Solution:** mochawesome-merge can be used to merge these reports and then generate one HTML report for all your cypress tests. [Read More Here](https://dev.to/bushraalam/using-mochawesome-reporter-with-cypress-54pf)

  

We will be needing the following npm packages:

  

**cypress-multi-reporters**

> Generate multiple mocha reports in a single mocha execution.

  

**mochawesome**

> Mochawesome is a custom reporter for use with the Javascript testing framework, mocha. It runs on Node.js (>=8) and works in conjunction with mochawesome-report-generator to generate a standalone HTML/CSS report to help visualize your test runs.

  

**mochawesome-merge**

> Merge several Mochawesome JSON reports.

  

**mochawesome-report-generator (marge)**
> marge (moch*awesome-report-ge*nerator) is the counterpart to mochawesome, a custom reporter for use with the Javascript testing framework, mocha. Marge takes the JSON output from mochawesome and generates a full fledged HTML/CSS report that helps visualize your test suites.