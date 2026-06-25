/**
 * A plain function type used by several utilities.
 */
export type AnyFn = (...args: unknown[]) => unknown;

/**
 * Reducer — the "combine step" in reduce: takes an accumulator and the next value,
 * returns the updated accumulator (e.g. append to an array).
 */
export type Reducer<V, A> = (acc: A, val: V) => A;

/**
 * Transducer — a reusable transform that sits between a data source and a reducer.
 * It changes each incoming value (map, filter, etc.) before the reducer accumulates it.
 */
export type Transducer<T, U, A> = (reducer: Reducer<U, A>) => Reducer<T, A>;

/**
 * Object path as `"a.b.c"` or `["a", "b", "c"]`.
 */
export type PathInput = string | readonly (string | number)[];
