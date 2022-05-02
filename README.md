[![Netlify Status](https://api.netlify.com/api/v1/badges/a85b9a22-32b1-479a-a00a-26277493613b/deploy-status)](https://app.netlify.com/sites/react-ts-redux-realworld-example-app/deploys)
![Pipeline](https://github.com/angelguzmaning/ts-redux-react-realworld-example-app/actions/workflows/pipeline.yml/badge.svg)

> ### React codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://react-ts-redux-realworld-example-app.netlify.app/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with React, Typescript, and Redux Toolkit including CRUD operations, authentication, routing, pagination, and more.

For more information on how this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


# How it works
The root of the application is the `src/components/App` component. The App component uses react-router's HashRouter to display the different pages. Each page is represented by a [function component](https://reactjs.org/docs/components-and-props.html). 

Some components include a `.slice` file that contains the definition of its state and reducers, which might also be used by other components. These slice files follow the [Redux Toolkit](https://redux-toolkit.js.org/) guidelines. Components connect to the state by using [custom hooks](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook).

This application is built following (as much as practicable) functional programming principles:
* Immutable Data
* No classes
* No let or var
* Use of monads (Option, Result)
* No side effects

The code avoids runtime type-related errors by using Typescript and decoders for data coming from the API.

Some components include a `.test` file that contains unit tests. This project enforces a 100% code coverage.

This project uses prettier and eslint to enforce a consistent code syntax.

## Folder structure
* `src/components` Contains all the functional components.
* `src/components/Pages` Contains the components used by the router as pages.
* `src/state` Contains redux related code.
* `src/services` Contains the code that interacts with external systems (API requests).
* `src/types` Contains type definitions alongside the code related to those types.
* `src/config` Contains configuration files.

# Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

Note: This project will run the app even if linting fails.

### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

----------------------------
Readme changes:  5/2/22 by Michael Robinson
To see the Selenium tests execute, be sure to launch 'npm start' first to get the webserver running.  Then launch 'npm test' to
see the "test_setup.test.tsx" tests execute.  

The code I wrote for the tests lives in: test_setup.test.tsx located in the /src directory.

There are no "id" or "name" attributes to reference on the DOM, so I'm using xpath as the selection method for most of this.  Using xpath is NOT OPTIMAL--I would instead ask for ids on all clickable nodes to provide for more durable tests, and then "id" selectors can be referenced directly.

The same also applies to using "linkText" as a selector...this will be troublesome if later localization is done then any tests pointing to the text on the page can/will break.

I added sleep routines in some places to allow pages time to load.  In a production test environment, sleep calls will want to be used only when absolutely necessary to increase speed of batch test runs.  I'm out of time to create a more elegant solution (waits for page loads), but the sleep calls I added should suffice for this demonstration.

Another issue with the test I wrote is that using "Username-<random number>" will over time cause issues as new "create user" calls bump against the same number that was already used--so this is definitely not optimal.  Normally we would want to delete the user out or increment the user or reset the data on set intervals to avoid unstable tests.

I put everything in one test for this quick demonstration but obviously you would want to break up a bunch of tests separately for each piece you are testing.

Other tests I would write if given more time:
-Editing a user's profile
-Logging out a user
-Test that only allowed characters for user, email, and password work for each respective field
-Test that email string only submits for well-formed email (something@somewhere.place)
-Testing adding a username that already exists
-Testing adding an email that already exists
-Editing an article
-Deleting an article
-Testing tags
-On all text fields:
  -Test with large amounts of text
  -Test with a variety of odd characters, i.e. !@#$%^&*()[]\|
  -Test SQL injection
----------------------------

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

