/**
 * A plain function type used by several utilities.
 */
export type AnyFn = (...args: unknown[]) => unknown;

/**
 * Accumulator function used when reducing a list (for example with transducers).
 */
export type Reducer<V, A> = (acc: A, val: V) => A;

/**
 * A transducer changes how values flow into a reducer.
 */
export type Transducer<T, U, A> = (reducer: Reducer<U, A>) => Reducer<T, A>;

/**
 * Object path as `"a.b.c"` or `["a", "b", "c"]`.
 */
export type PathInput = string | readonly (string | number)[];
