# Statscore Matches

Simple app that map and filter data on initialization

## Example

It changes object:

```javascript
{
  sport: 'volleyball',
  participant1: 'Germany',
  participant2: 'France',
  score: '3:0,25:23,25:19,25:21',
};
```

into:

```javascript
{
  name: 'Germany - France',
  score: 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
