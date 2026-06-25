import type { Reducer, Transducer } from "@/types";

/**
 * Adds one value to an array accumulator.
 */
export function concat<T>(acc: T[], value: T): T[] {
  acc.push(value);
  return acc;
}

/**
 * Transducer that maps each value before it reaches the reducer.
 */
export function mapTransducer<T, U, A>(
  mapFn: (value: T) => U
): Transducer<T, U, A> {
  return (reducer) => (acc, value) => reducer(acc, mapFn(value));
}

/**
 * Transducer that keeps only values that pass the test.
 */
export function filterTransducer<T, A>(
  test: (value: T) => boolean
): Transducer<T, T, A> {
  return (reducer) => (acc, value) => {
    if (!test(value)) {
      return acc;
    }
    return reducer(acc, value);
  };
}

/**
 * Combines two transducers into one pipeline.
 */
export function composeTransducers<T, U, A>(
  first: Transducer<T, U, A>,
  second: Transducer<U, U, A>
): Transducer<T, U, A> {
  return (reducer) => first(second(reducer));
}

export type { Reducer, Transducer };
