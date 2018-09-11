# sm-jest-config

the sub-module of jest configuration for unit tests.

## The Sub-module path

Add this repository as the sub-module of your repository with the module path is **configs\jest**

- The code coverage report folder: **./tests/--coverage--/**
- The jest-html-reporter folder: **./tests/--reports--/**

## Recommend scripts & npm packages

### TypeScript Project

1.  Apply the Dev Dependencies as below
    Remove the `&& codecov -t <YOUR CODECOV ID>` in the `test:ci` if you are not using CODECOV.

```json
{
  "scripts": {
    "git:jest": "git submodule update --init --remote configs/jest",
    "test":
      "npm run git:jest && jest --watch --coverage --config=configs/jest/ts.jest.json",
    "test:ci":
      "npm run git:jest && jest --ci --coverage --config=configs/jest/ts.jest.json && codecov -t <YOUR CODECOV ID>"
  },
  "devDependencies": {
    "babel-cli": "latest",
    "babel-jest": "latest",
    "babel-plugin-transform-es2015-modules-commonjs": "latest",
    "env": "latest",
    "enzyme": "latest",
    "enzyme-adapter-react-16": "latest",
    "enzyme-to-json": "latest",
    "jest": "latest",
    "jest-html-reporter": "latest",
    "jsdom": "latest",
    "jsdom-global": "latest",
    "ts-jest": "latest"
  }
}
```

2.  Config the **.babelrc** file as below

```json
{
  "presets": [
    //Your presets
  ],
  "plugins": [
    //Your plugins
  ],
  "env": {
    //This for jest test
    "test": {
      "presets": ["env"],
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
}
```

### Javascript Project

1.  Apply the Dev Dependencies as below
    Remove the `&& codecov -t <YOUR CODECOV ID>` in the `test:ci` if you are not using CODECOV.

```json
{
  "scripts": {
    "git:jest": "git submodule update --init --remote configs/jest",
    "test":
      "npm-run-all git:jest && jest --watch --coverage --config=configs/jest/jest.json",
    "test:ci":
      "npm-run-all git:jest && jest --ci --coverage --config=configs/jest/jest.json && codecov -t <YOUR CODECOV ID>"
  },
  "devDependencies": {
    "babel-cli": "latest",
    "babel-core": "latest",
    "babel-eslint": "latest",
    "babel-jest": "latest",
    "babel-loader": "latest",
    "babel-plugin-module-resolver": "latest",
    "babel-preset-env": "latest",
    "babel-preset-react-latest": "latest",
    "enzyme": "latest",
    "enzyme-adapter-react-16": "latest",
    "enzyme-to-json": "latest",
    "jsdom-global": "latest",
    "jest": "latest",
    "npm-run-all": "latest"
  }
}
```

2.  Config the **.babelrc** file as below

```json
{
  "presets": [
    //Your presets
  ],
  "plugins": [
    //Your plugins
  ],
  //This for jest test
  "env": {
    "test": {
      "presets": ["env", "react-latest"],
      "plugins": ["transform-es2015-modules-commonjs"]
    }
    //Your other environments
  }
}
```
