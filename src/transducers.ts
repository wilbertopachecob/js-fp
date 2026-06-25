import type { Reducer, Transducer } from "./types";

export const concat = <T>(acc: T[], val: T): T[] => (acc.push(val), acc);

export const mapTransducer =
  <T, U, A>(transformFn: (val: T) => U): Transducer<T, U, A> =>
  (reducer) =>
  (acc, val) =>
    reducer(acc, transformFn(val));

export const filterTransducer =
  <T, A>(predicate: (val: T) => boolean): Transducer<T, T, A> =>
  (reducer) =>
  (acc, val) =>
    predicate(val) ? reducer(acc, val) : acc;

export const composeTransducers =
  <T, U, A>(
    transducerOne: Transducer<T, U, A>,
    transducerTwo: Transducer<U, U, A>
  ): Transducer<T, U, A> =>
  (reducingFn) =>
    transducerOne(transducerTwo(reducingFn));

export type { Reducer, Transducer };
