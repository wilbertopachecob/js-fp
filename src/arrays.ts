/**
 * Same idea as `Array.map`, implemented with `reduce`.
 *
 * @example
 * myMap([1, 2, 3], (n) => n * 2); // [2, 4, 6]
 */
export function myMap<T, R>(arr: readonly T[], fn: (value: T) => R): R[] {
  const result: R[] = [];

  for (const item of arr) {
    result.push(fn(item));
  }

  return result;
}

/**
 * Flattens nested arrays into one level.
 *
 * @example
 * flatAll([1, [2, [3]], 4]); // [1, 2, 3, 4]
 */
export function flatAll<T>(arr: readonly (T | readonly T[])[]): T[] {
  const result: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatAll(item as readonly T[]));
    } else {
      result.push(item as T);
    }
  }

  return result;
}

/**
 * Creates a list of numbers from `start` up to (but not including) `end`.
 *
 * @example
 * range(1, 10, 2); // [1, 3, 5, 7, 9]
 */
export function range(start = 0, end?: number, step = 1): number[] {
  if (end === undefined) {
    return start <= 0 ? [0] : [start];
  }

  const result: number[] = [];

  for (let value = start; value < end; value += step) {
    result.push(value);
  }

  return result;
}

/**
 * Returns a new shuffled copy of the array.
 */
export function shuffle<T>(arr: readonly T[]): T[] {
  const copy = [...arr];

  for (let i = 0; i < copy.length - 1; i++) {
    const randomIndex = i + Math.floor(Math.random() * (copy.length - i));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}
