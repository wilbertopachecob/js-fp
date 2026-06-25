// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;

export const curryBind = (fn: Fn): Fn => {
  if (fn.length === 0) {
    return fn();
  }
  return (p: unknown) => curryBind(fn.bind(null, p));
};

export const partialCurrying = (fn: Fn): Fn => {
  if (fn.length === 0) {
    return fn();
  }
  return (...pp: unknown[]) => partialCurrying(fn.bind(null, ...pp));
};

export const partialByClosure = (fn: Fn, ...args: unknown[]): Fn => {
  const partialize =
    (...args1: unknown[]) =>
    (...args2: unknown[]) => {
      const bound = [...args1];
      for (let i = 0; i < bound.length && args2.length; i++) {
        if (bound[i] === undefined) {
          bound[i] = args2.shift();
        }
      }
      const allParams = [...bound, ...args2];
      if (allParams.includes(undefined) || allParams.length < fn.length) {
        return partialize(...allParams);
      }
      return fn(...allParams);
    };
  return partialize(...args);
};

export const flip = <A, B, R>(fn: (a: A, b: B) => R) => (a: A, b: B): R =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (fn as any)(b, a);

export const flip3 = <R>(
  fn: (a: never, b: never, c: never) => R
): ((a: never, b: never, c: never) => R) =>
  ((a, b, c) => (fn as (x: never, y: never, z: never) => R)(c, a, b));
