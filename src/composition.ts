export const pipeTwo =
  <A extends unknown[], B, C>(f: (...args: A) => B, g: (x: B) => C) =>
  (...args: A): C =>
    g(f(...args));

export const pipeline = <T>(...fns: Array<(x: T) => T>): (x: T) => T =>
  fns.reduce(pipeTwo) as (x: T) => T;

export const compose = <T>(...fns: Array<(x: T) => T>): (x: T) => T =>
  pipeline(...fns.reverse());

export const tee =
  <T>(fn: (x: T) => void) =>
  (x: T): T => {
    fn(x);
    return x;
  };

export const tap =
  <T>(fn: (x: T) => void) =>
  (x: T): T => {
    fn(x);
    return x;
  };
