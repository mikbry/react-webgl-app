# `rollup-react-app`

Boilerplate to create a React app using Rollup.

[Rollup](https://rollupjs.org) is the right tool for bundling your javascript applications. But when you develop you still need Webpack ? [You could rely on a well known article : Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c) But it is time to change our mind, and to remove Webpack. This template is a first step in this direction.

Another point `rollup-create-app` try to follow `create-react-app`, the source code, static assets, tests and structure are the same.

## Why
- Create a minimal from scratch React app using Rollup to bundle but also to develop instead of using Webpack.
- Need for a complete boilerplate / example how to develop and bundle React app using Rollup
- Stay compatible with `create-react-app` commands (start, build, test)
- Develop using [Nollup](https://github.com/PepsRyuu/nollup) and [Hot Module replacement](https://webpack.js.org/concepts/hot-module-replacement/) (using experimental [react-refresh](https://github.com/facebook/react/tree/master/packages/react-refresh))
- Bundle 2 packages : an ESM one for (> 2018 browsers) and another one for olders, instead of  `create-react-app`
- Be compatible to good practices (Husky, Commitlint, ...)
- Experiment new stuff (Nollup, Typescript)

## TODO
- [x] Base code
- [x] Serve
- [x] Jsx support
- [x] Build for prod
- [x] Css / images
- [x] Hot reload
- [x] esm/iife scripts support
- [ ] test
- [ ] Typescript

## Inspiration
https://create-react-app.dev/

https://stackoverflow.com/questions/51291553/how-to-bundle-react-app-with-rollup

https://github.com/DianaSuvorova/rollup-react-app

https://medium.com/@tomaszmularczyk89/guide-to-building-a-react-components-library-with-rollup-and-styled-jsx-694ec66bd2

## Available Scripts

`rollup-react-app` tries to work as `create-react-app`, so commands are the same.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Youc could test it using this command:

`npx serve build -l 9000`

### `yarn test`

TODO

