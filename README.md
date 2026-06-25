# js-fp

[![CI](https://github.com/wilbertopachecob/js-fp/actions/workflows/ci.yml/badge.svg)](https://github.com/wilbertopachecob/js-fp/actions/workflows/ci.yml)
![Archived](https://img.shields.io/badge/status-archived-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)

Functional programming utilities in **TypeScript** — a curated, tested layer on top of chapter exercises from [*Mastering JavaScript Functional Programming*](https://www.packtpub.com/product/mastering-javascript-functional-programming/9781787282633) by Federico Kereki.

> **Archived.** This repository is complete and no longer actively maintained. It remains public as a learning portfolio.

## Quick start

```bash
npm install
npm run build
npm run test:all
npm run demo -- list
npm run demo -- memoize
```

## Project structure

| Path | Purpose |
|------|---------|
| [`src/`](src/) | TypeScript source — the public API |
| [`dist/`](dist/) | Compiled JavaScript + `.d.ts` declarations |
| [`tests/`](tests/) | TypeScript unit tests (Jest + ts-jest) |
| [`examples/`](examples/) | Runnable demos |
| [`bin/js-fp.js`](bin/js-fp.js) | CLI for running demos |
| [`Chapter_*/`](Chapter_1/) | Original book exercises in JavaScript (reference) |

## Usage

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

CommonJS:

```javascript
const { memoize, compose, Maybe } = require('js-fp');
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile `src/` → `dist/` |
| `npm test` | Run tests (requires prior build) |
| `npm run test:all` | Build + test |
| `npm run demo -- <name>` | Run a CLI demo |
| `npm run docs` | Generate TypeDoc into `docs/` |

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

Exercise implementations based on *Mastering JavaScript Functional Programming* by Federico Kereki (Packt). Original chapter code preserved in `Chapter_*/`; typed API lives in `src/`.
