/**
 * Runs two functions in order: first `f`, then `g`.
 *
 * @example
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * pipeTwo(addOne, double)(3); // 8
 */
export function pipeTwo<A extends unknown[], B, C>(
  f: (...args: A) => B,
  g: (x: B) => C
): (...args: A) => C {
  return (...args) => g(f(...args));
}

/**
 * Runs functions left to right and passes the result to the next one.
 *
 * @example
 * pipeline((x) => x * 2, (x) => x + 1)(3); // 7
 */
export function pipeline<T>(...fns: Array<(value: T) => T>): (value: T) => T {
  return (value) => {
    let result = value;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}

/**
 * Runs functions right to left (last function runs first).
 *
 * @example
 * compose((x) => x + 1, (x) => x * 2)(3); // 7
 */
export function compose<T>(...fns: Array<(value: T) => T>): (value: T) => T {
  return pipeline(...[...fns].reverse());
}

/**
 * Runs a side effect, then returns the same value.
 *
 * @example
 * tee(console.log)(5); // logs 5, returns 5
 */
export function tee<T>(fn: (value: T) => void): (value: T) => T {
  return (value) => {
    fn(value);
    return value;
  };
}

/** Alias for {@link tee}. */
export const tap = tee;
