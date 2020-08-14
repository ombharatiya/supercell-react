# SuperCell

This is a clone of [Supercell website](https://supercell.com/en/).

## Summary

  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Features](#features)
  - [Authors](#authors)

## Getting Started

Clone this repository
```
git clone https://github.com/ombharatiya/supercell-react.git
```

Get into project directoty
```
cd supercell-react
```

Setting up the react project 
```
npm install
```
Run the project locally
```
npm start
```

The server would be running at http://localhost:3000

Done! Now enjoy the beautiful app :)


### Prerequisites

To run the project you must have `node` installed in your machine.

    node v12.13.1

### Create Build

To deploy this application, you require to create a build
```
npm run build
```

## Built With

### The app uses following libraries/packages for development & build:

- **[React.js](https://reactjs.org/)** - An open-source JavaScript library for building user interfaces & single-page or mobile applications.
- **[Redux.js](https://redux.js.org/)** - A Predictable State Container for JS Apps
- **[Redux-Saga](https://redux-saga.js.org/)** - A Redux Middleware library to handle Asynchronous Actions such as fetching data more easily & effciently
- **[React-Router](https://www.npmjs.com/package/react-router)** - A package that provides the core routing functionality for React Router
- **[Axios](https://www.npmjs.com/package/axios)** - Promise based HTTP client for the browser and node.js. It gives out of the box client side support for protecting against XSRF
- **[TypeScript](https://github.com/Microsoft/TypeScript)** - a superset of JavaScript programming language that compiles to clean JavaScript output.


## Features

- Home page
  For Home page redirect the user to localhost:3000/home
- Games page
  For Games redirect the user to localhost:3000/games
- Hay Day Game page
  For Hay Day redirect the user to localhost:3000/games/hayday
- Navigation
- Footer
- State Management


## Project Structure

```
--- src/
-------- assets
-------- components
------------- Footer.tsx
------------- NavigationBar.tsx
-------- models
------------- Paragraph.ts
-------- modules
------------- games
------------- hayDay
------------- home
------------- constants.ts
-------- services
------------- getParagraph1
------------- getParagraph2
------------- hayDayServices
------------- urls.ts
-------- store
------------- actions
----------------- Paragraph1Actions.ts
----------------- Paragraph2Actions.ts
------------- reducers
----------------- Paragraph1Reducer.ts
----------------- Paragraph2Reducer.ts
----------------- RootReducer.ts
------------- sagas
----------------- Sagas.ts
----------------- hayDaySagas.ts
------------- state
----------------- ParagraphState.ts
------------- Store.ts
------------- storeHelper.ts
-------- styles
-------- App.tsx
--- package.json
--- tsconfig.json
```

## Author

  - **Om Bharatiya** 
    [Om Bharatiya](https://github.com/ombharatiya)
