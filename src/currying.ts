/** Simple function type for currying and wrappers. */
type Fn = (...args: any[]) => any;

/**
 * Currying turns a multi-argument function into one you call one argument at a time.
 * Each call returns a new function until all arguments are filled — handy for
 * pre-filling some args and reusing the rest later.
 *
 * Builds a curried version of a function using `bind`.
 *
 * @example
 * const sum3 = (a: number, b: number, c: number) => a + b + c;
 * curryBind(sum3)(1)(2)(3); // 6
 */
export function curryBind(fn: Fn): Fn {
  if (fn.length === 0) {
    return fn() as Fn;
  }
  return ((arg: unknown) => curryBind(fn.bind(null, arg))) as Fn;
}

/**
 * Partial application — supply some arguments now, get back a function waiting for the rest.
 * Similar to currying but you can pass several args at once.
 *
 * @example
 * const sum3 = (a: number, b: number, c: number) => a + b + c;
 * partialCurrying(sum3)(1)(2)(3); // 6
 */
export function partialCurrying(fn: Fn): Fn {
  if (fn.length === 0) {
    return fn() as Fn;
  }
  return ((...args: unknown[]) => partialCurrying(fn.bind(null, ...args))) as Fn;
}

/**
 * Partial application via closures — fixed args are remembered; missing ones
 * can be filled in on later calls.
 */
export function partialByClosure(fn: Fn, ...fixedArgs: unknown[]): Fn {
  function applyMore(...newArgs: unknown[]): unknown {
    const allArgs = [...fixedArgs, ...newArgs];

    if (allArgs.length < fn.length || allArgs.includes(undefined)) {
      return partialByClosure(fn, ...allArgs);
    }

    return fn(...allArgs);
  }

  return applyMore;
}

/**
 * Swaps the first two arguments of a function.
 *
 * @example
 * const subtract = (a: number, b: number) => a - b;
 * flip(subtract)(10, 3); // 3 - 10 = -7
 */
export function flip<A, B, R>(fn: (a: A, b: B) => R): (a: A, b: B) => R {
  return (a, b) => (fn as unknown as (first: B, second: A) => R)(b, a);
}

/**
 * Rotates the first three arguments: calls `fn(c, a, b)`.
 */
export function flip3<A, B, C, R>(
  fn: (a: A, b: B, c: C) => R
): (a: A, b: B, c: C) => R {
  return (a, b, c) => (fn as unknown as (first: C, second: A, third: B) => R)(c, a, b);
}
