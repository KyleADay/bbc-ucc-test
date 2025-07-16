# About the project
This project is an example of API testing on a single endpoint using Playwright and Cucumber

# Getting started

## Clone the repository
In a new terminal, clone the project into your chosen directory:
`git clone https://github.com/https://github.com/KyleADay/bbc-ucc-test.git`

## Install dependencies
Navigate to the project diretory: 

`cd bbc-ucc-test`

and install dependencies: 

`npm install`

## VS Code setup
When using VS Code, install the "Cucumber for Visual Studio Code" extension for ease of use.

In order for the feature file to find the steps, you may need to update your settings. In your VS Code `settings.json` file, add the following:
```
"cucumber.features": [
    "src/tests/features/*.feature",
],
"cucumber.glue": [
    "src/tests/steps/*.ts"
]
```
Make sure to restart VS Code to apply the settings changes.

# Run tests
In the terminal, run the test suite with command: 

`npm run test`

You can also run individual tests by using tags:

`npm run test -- --tags @scenario1`

Additional config can be found in `config/cucumber.json`