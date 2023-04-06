# Statscore Matches

Simple app that map and filter data on initialization

## Example

It changes object:

```javascript
{
  sport: 'soccer',
  participant1: 'Chelsea',
  participant2: 'Arsenal',
  score: '2:1',
};
```

into:

```javascript
{
  name: "Chelsea - Arsenal",
  score: "2:1"
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
