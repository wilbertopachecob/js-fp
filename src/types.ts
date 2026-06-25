/** Generic function type used across utilities. */
export type AnyFn = (...args: unknown[]) => unknown;

/** Reducer used by transducers. */
export type Reducer<V, A> = (acc: A, val: V) => A;

/** Transducer transforms a reducer over inner type to a reducer over outer type. */
export type Transducer<T, U, A> = (reducer: Reducer<U, A>) => Reducer<T, A>;

/** Path segment for immutable object access. */
export type PathInput = string | readonly (string | number)[];
