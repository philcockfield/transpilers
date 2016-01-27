# js-babel-dev
[![Build Status](https://travis-ci.org/philcockfield/js-babel-dev.svg)](https://travis-ci.org/philcockfield/js-babel-dev)

Consolidated [Babel](https://babeljs.io/) (ES6+) development dependencies. For the core language libraries see [`js-babel`](https://github.com/philcockfield/js-babel).

The development tools comprise of:
- Linting tools.
- [Babel CLI](https://babeljs.io/docs/usage/cli/) (for building).


#### IMPORTANT
Do not reference this library unless you are happy staying in lock-step with the babel transpiler plugins used by my [modules](https://github.com/philcockfield/modules) and other idiomatic decisions that I make.

## Install
A single dependency will bring all the standard babel development dependencies:

    npm install --D js-babel js-babel-dev

Typically you'll want to keep `js-babel` within the `devDependencies`, however the core Babel language libs are kept separate from the development tools enabling you to distribute the core language libraries with a module and avoid the extra weight of the linting and CLI tools.

## Configuration

##### Example: package.json
```json
{
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha --recursive --compilers js:babel-register",
    "tdd": "./node_modules/mocha/bin/mocha --recursive --compilers js:babel-register --watch",
    "lint": "eslint ./src",
    "build": "babel src --out-dir lib --source-maps",
    "build:watch": "npm run build -- --watch",
    "prepublish": "npm test && npm run lint && npm run build"
  },
  "devDependencies": {
    "js-babel": "^6.0.0",
    "js-babel-dev": "^6.0.0"
  }
}

```

##### Example: .babelrc

```json
{
  "presets": ["es2015", "stage-0"],
  "plugins": ["transform-class-properties"]
}
```


#### Example: .eslint

```json
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "no-multiple-empty-lines": 0,
    "no-param-reassign": 0,
    "padded-blocks": 0    
  }
}
```



**Note:** The `babel-preset-react` is not included.  Reference the [UIHarness](http://uiharness.com) for a compact and complete set of UI centric Babel presets.



## Building ES6 =>ES5

    npm run build
    npm run build:watch



## Linting

    npm run lint

Linting uses the [AirBnB style guide](https://github.com/airbnb/javascript) and corresponding [Eslint](http://eslint.org/) based linter.


##### Why the AirBnB style guide?
When evaluating a [number of JS styleguides](http://noeticforce.com/best-javascript-style-guide-for-maintainable-code) the AirBnB guide was at the top of the list with respect to popularity.  This was echoed in the number of stars on the Github repository (~29K at time or writing) compared to the second most popular style guide ([ideomatic.js](https://github.com/rwaldron/idiomatic.js/)) which sat at ~10k.  

Given styleguides are largely about attempting to standardize to the common norms ("code should look like it was authored by one person") unless the most popular option is flat-out insane, I feel the popularist decision has the most payoff.

Furthermore the AirBnB styleguide seemed to have the most up-to-date support for babel plugins to [Eslint](http://eslint.org/).



## Tests
    npm install
    npm test


---
### License: MIT
