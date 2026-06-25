# js-fp

[![CI](https://github.com/wilbertopachecob/js-fp/actions/workflows/ci.yml/badge.svg)](https://github.com/wilbertopachecob/js-fp/actions/workflows/ci.yml)
![Archived](https://img.shields.io/badge/status-archived-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)

Functional programming utilities in **TypeScript** and **vanilla JavaScript** — a curated, tested layer on top of chapter exercises from [*Mastering JavaScript Functional Programming*](https://www.packtpub.com/product/mastering-javascript-functional-programming/9781787282633) by Federico Kereki.

> **Archived.** This repository is complete and no longer actively maintained. It remains public as a learning portfolio.

## Quick start

```bash
npm install          # install dependencies
npm run build        # compile TypeScript from src/ to dist/
npm run test:all     # build, then run all 259 unit tests
npm run test:chapters # run 212 chapter JavaScript tests only
npm run test:ts      # build, then run 47 TypeScript tests only
npm run demo -- list # show available CLI demos
npm run demo -- memoize  # run the memoize demo
```

## Two flavors

| Flavor | Path | For |
|--------|------|-----|
| **TypeScript** | [`src/`](src/) → [`dist/`](dist/) | npm package consumers, typed APIs, IDE autocomplete |
| **Vanilla JS** | [`Chapter_*/`](Chapter_1/) | Book-aligned reference code with JSDoc and co-located tests |

Chapter files use CommonJS (`require` / `module.exports`), JSDoc comments, and sibling `*.test.js` files. The TypeScript layer in `src/` mirrors the same concepts with types and a single published entry point.

## Project structure

| Path | Purpose |
|------|---------|
| [`src/`](src/) | TypeScript source — the public npm API |
| [`dist/`](dist/) | Compiled JavaScript + `.d.ts` declarations |
| [`tests/`](tests/) | TypeScript unit tests grouped by topic (47 tests) |
| [`Chapter_*/`](Chapter_1/) | Book chapter code in vanilla JS with JSDoc + `*.test.js` (212 tests) |
| [`examples/`](examples/) | Runnable demos |
| [`bin/js-fp.js`](bin/js-fp.js) | CLI for running demos |

## Usage

### TypeScript (npm package)

```typescript
import { memoize, compose, Maybe } from 'js-fp';

const fib = memoize((n: number): number =>
  n <= 1 ? n : fib(n - 1) + fib(n - 2)
);
console.log(fib(10)); // 55

const shout = compose(
  (s: string) => `${s}!`,
  (s: string) => s.toUpperCase()
);
console.log(shout('hello')); // HELLO!

console.log(Maybe.of(5).map((x) => x * 2).toString()); // Just(10)
```

### Vanilla JavaScript (chapter modules)

Each chapter file is self-contained with JSDoc and a matching test file:

```javascript
const memoize = require('./Chapter_6/memoize');
const compose = require('./Chapter_8/compose');

const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
console.log(fib(10)); // 55

const shout = compose(
  (s) => `${s}!`,
  (s) => s.toUpperCase()
);
console.log(shout('hello')); // HELLO!
```

Run chapter tests:

```bash
npm run test:chapters
```

CommonJS:

```javascript
const { memoize, compose, Maybe } = require('js-fp');
```

## Path aliases

Imports use the `@/` alias instead of long relative paths:

```typescript
import { memoize } from "@/higherOrder";
import { Maybe } from "@/algebraic/maybe";
```

Configured in:
- [`tsconfig.json`](tsconfig.json) — TypeScript path mapping
- [`webpack.config.js`](webpack.config.js) — Webpack `resolve.alias`
- [`jest.config.js`](jest.config.js) — Jest `moduleNameMapper`

The build runs `tsc-alias` so compiled `dist/` files use relative paths at runtime.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile `src/` → `dist/` (rewrites `@/` aliases) |
| `npm run build:webpack` | Bundle with Webpack using `@` → `src` alias |
| `npm test` | Run all tests (TypeScript + chapter JS) |
| `npm run test:all` | Build + run 259 unit tests |
| `npm run test:ts` | Build + run 47 TypeScript tests |
| `npm run test:chapters` | Run 212 chapter JavaScript tests |
| `npm run demo -- <name>` | Run a CLI demo |
| `npm run docs` | Generate TypeDoc into `docs/` |
| `npm run lint` | Run ESLint on `src/`, `tests/`, and config files |
| `npm run lint:fix` | Auto-fix ESLint issues where possible |

## API catalog

| Utility | Category | Description |
|---------|----------|-------------|
| `compose` | Composition | Compose functions right-to-left |
| `pipeline` | Composition | Pipe functions left-to-right |
| `pipeTwo` | Composition | Pipe two functions |
| `tee` / `tap` | Composition | Side-effect helpers that pass values through |
| `curryBind` | Currying | Curry via `Function.prototype.bind` |
| `partialCurrying` | Currying | Partial application via currying |
| `partialByClosure` | Currying | Partial application via closure |
| `flip` | Currying | Flip first two arguments |
| `memoize` | Higher-order | Cache function results |
| `once` | Higher-order | Execute at most once |
| `onceAndAfter` | Higher-order | First call once, then another fn |
| `loggingWrapper` | Higher-order | Log calls and return values |
| `promisify` | Higher-order | Callback → Promise |
| `addTiming` | Higher-order | Log execution time |
| `myMap` | Arrays | Map via reduce |
| `flatAll` | Arrays | Deep flatten |
| `range` | Arrays | Numeric range generator |
| `shuffle` | Arrays | Fisher–Yates shuffle |
| `mapAsync` | Async | Async map |
| `filterAsync` | Async | Async filter |
| `reduceAsync` | Async | Async reduce |
| `findAsync` | Async | Async find |
| `deepClone` | Immutability | Deep clone objects |
| `deepFreeze` | Immutability | Recursive freeze |
| `getByPath` | Immutability | Get nested value by path |
| `setByPath` | Immutability | Set nested value immutably |
| `updateObject` | Immutability | Update object field immutably |
| `Maybe` | Algebraic | Maybe monad |
| `Either` | Algebraic | Either monad |
| `Try` | Algebraic | Exception → Either |
| `Functor` | Algebraic | Base functor class |
| `fibonacci` | Recursion | Classic fibonacci |
| `quicksort` | Recursion | Divide-and-conquer sort |
| `mapRecursive` | Recursion | Recursive map |
| `filterRecursive` | Recursion | Recursive filter |
| `mapTransducer` | Transducers | Map transducer |
| `filterTransducer` | Transducers | Filter transducer |
| `composeTransducers` | Transducers | Compose transducers |

## Requirements

- Node.js 18+
- TypeScript 5.8 (dev dependency)

## License

GPL-3.0 — see [LICENSE](LICENSE).

## Attributions

Exercise implementations based on *Mastering JavaScript Functional Programming* by Federico Kereki (Packt). Chapter code lives in `Chapter_*/` with JSDoc and tests; the typed npm API lives in `src/`.
