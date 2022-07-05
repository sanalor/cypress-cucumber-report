# Cypress Cucumber proof of concept

Cypress is a purely JavaScript-based front-end testing tool built for the modern web. It aims to address the pain points developers or QA engineers face while testing an application. Cypress is a more developer-friendly tool that uses a unique DOM manipulation technique and operates directly in the browser.

Cucumber is a tool that supports Behaviour-Driven Development(BDD). Cucumber reads executable specifications written in plain text and validates that the software does what those specifications say. The specifications consists of multiple examples, or scenarios.

## Pre-requisites
Before you use this project you only need to have Node Js installed in your computer.

[NodeJS - https://nodejs.org/es/download/](https://nodejs.org/es/download/)

## Installation

Use the nodeJS manager to install all dependencies

```bash
npm install
```

## Usage
You can open cypress and manually run the tests by typing in the console the following command
```bash
npm run cypress
```
You can run the tests automatically by observing the execution in the console by executing the following command
```bash
npm run test
```
You can run the tests automatically by observing the execution in the console and in a chrome window by executing the following command
```bash
npm run test:debug
```
This run, as you can see in package.json, has the necessary tags to run the proof of concept tests. I make an extract of the code so that you can see it directly.
```json
"scripts": {
    "cypress": "cypress open",
    "test": "cypress run --browser chrome",
    "test:debug": "cypress run --headed --browser chrome -e TAGS=\"@orange-proof-pass or @orange-proof-fail\""
  }
```
With each run, several report folders will be created. The first one is for the screenshots, located in cypress/screenshots. The second one is for the video of each run, located in cypress/videos. The third folder is the run summary in json format. It is used to generate the reports in html format (readable by everyone). The run summary in json format can be found in the following path: cypress/cucumber-json.

Once we have the execution reports in JSON format, we can generate the reports in html format by executing the following command in the console:
```bash
node cucumber-html-report.js
```
You can view the reports generated by opening with the browser the file located at the following location: reports/cucumber/index.html

## Project structure
Inside the cypress/integration path we find the google.feature file. This contains all the gherkin language (cucumber) of the two example tests. The code that executes each of these statements is found under the path cypress/integration/google/*.js