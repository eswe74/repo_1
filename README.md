## Luo react app react-testing-1

    npx create-react-app react-testing-1

## Asenna js lintteri

    npm install eslint --global

## Asenna style-lintteri

    npm install stylelint stylelint-config-standard -DE

## Asenna editor-lintteri

    npm install editorconfig-checker -DE

## Asenna ls lintteri (filename ja directory)

    npm install @ls-lint/ls-lint -DE

## package.json

    "lint": "npm run lint:ls && npm run lint:editorconfig && npm run lint:css && npm run lint:js"

## Testaa lintterit

    npn run lint

## Testaa testien kattavuus    

    npm test -- --coverage

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


