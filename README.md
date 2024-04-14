![intro](https://user-images.githubusercontent.com/35484292/95024275-f04b0a00-06bc-11eb-9fb0-2d7404c36353.jpg)

## Introduction
This template employs the following techniques

- ES6
  - Rollup
  - TypeScript
- EJS
- SCSS

## Quick Start
This project file uses `pnpm`<br>
First, run `pnpm` to install the `node_module`
## First, install pnpm
```
brew install pnpm
```
## Package installation
```
pnpm install
```

After installing `node_module`, type

```
npx gulp(nodeは18以上)
```

or

if you're using VSCode, run `gulp` in the npm script

## Usage

There are four commands available.

### Build

This is the same file structure as in production and allows you to run gulp without starting browsersync.

The same file structure as in production is what

- Javascript compression
- Deleting Javascript sourcemap
- SCSS files compression
- Deleting SCSS sourcemap


#### Usage

```
npx gulp:build
```
or

if you're using VSCode, run `gulp:build` in the npm script

### Production Mode

This is one of the production builds and allows you to develop with the same file structure as in production while running browsersync.


#### Usage

```
npx gulp:production
```
or

if you're using VSCode, run `gulp:production` in the npm script