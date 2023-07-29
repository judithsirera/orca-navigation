# Orca Navigation

A demo application for route creation and marine navigation.

**Table of contents**

- [Goal](#goal)
- [Result](#result)
  - [Implemented features](#implemented-features)
  - [Notes](#notes)
  - [Tech Stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Styling](#styling)
- [Linting](#linting)
- [Test](#test)

---

## Goal

The objective of this project is to develop a demo application for marine route navigation.

## Result

Live URL: https://judithsirera.github.io/orca-navigation/

[![Orca Navigation snippet](https://i.gyazo.com/ecb02ad9f546c98420ed145c2e77fba3.gif)](https://gyazo.com/ecb02ad9f546c98420ed145c2e77fba3)

### Implemented Features

- **Route navigation**: Visualization of route based on a starting point and an end point.
- **Loading state**: Showing a loading state when the route is being calculated on the backend.
- **Error state**: If error happens when loading the route, we show a message for it.

### Notes

- This repo has been created from a template built in NextJS, Typescript and Styled Components: [boilerplate-nextjs-styled-components
  ](https://github.com/judithsirera/boilerplate-nextjs-styled-components)
- For rendering the map we've used [MapboxGL](https://docs.mapbox.com/mapbox-gl-js/guides/) library. The map component can be found here [Map](/elements/Map/index.tsx)
- For calculating the fastest route we are using Orca's demo API: https://navigation-demo.theorca.io/route
- Map data (e.g. route line) is using GeoJSON format.
- Map styles are imported from Orca styling sheet https://cdn.theorca.io/map-assets/style/v7/style.json
- The demo app is being deployed with Github Actions on: https://judithsirera.github.io/orca-navigation/

### Tech Stack

- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/) (read more [here](#styling))
- [MapboxGL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) for map rendering
- Github Actions for automated deployment
- Eslint + prettier for linting (read more [here](#linting))

---

## Getting started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/judithsirera/orca-navigation.git
```

2. Install project dependencies using npm:

```bash
npm install
```

3. Start the development server by running:

```bash
npm run dev
```

This will launch the app in your default browser at http://localhost:3000. Any changes you make to the code will be reflected live in the browser.

## Available Scripts

**`npm dev`** - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**`npm run lint`** - Checks and fixes coding styles and syntax for all `ts` and `tsx` files.

## Styling

Styled-components is the library used for styling. Each component has an `index.tsx` file, that defines its structure and layout, and the `styles.ts` file, imported in the main file, contains the different styled components used in the component.

Theme declaration and global styling util functions or constants are defined in [/styles/](/styles/) folder. For example, colors, margins and border radius are defined as enums in the folder. Together with util functions we can apply them to the different components very easily:

## Linting

This project supports linting via command line but also on pre-commit. The project uses [Husky](https://typicode.github.io/husky/#/) to define git hooks and run scripts right before commiting changes. In this project, lint-staged is triggered to check and fix all linting before commiting any changes.

Linting configuration is defined in [.eslintrc.js](/.eslintrc.js).
