/**
 * Classic recursive fibonacci.
 */
export function fibonacci(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array using quicksort.
 */
export function quicksort<T>(arr: readonly T[]): T[] {
  if (arr.length < 2) {
    return [...arr];
  }

  const [pivot, ...rest] = arr;
  const smaller = rest.filter((value) => value < pivot);
  const greater = rest.filter((value) => value >= pivot);

  return [...quicksort(smaller), pivot, ...quicksort(greater)];
}

/**
 * `map` implemented with recursion instead of a loop.
 */
export function mapRecursive<T, R>(
  arr: readonly T[],
  fn: (value: T, index: number) => R
): R[] {
  if (arr.length === 0) {
    return [];
  }

  const [first, ...rest] = arr;
  return [fn(first, 0), ...mapRecursive(rest, (value, index) => fn(value, index + 1))];
}

/**
 * `filter` implemented with recursion instead of a loop.
 */
export function filterRecursive<T>(
  arr: readonly T[],
  fn: (value: T, index: number) => boolean
): T[] {
  if (arr.length === 0) {
    return [];
  }

  const [first, ...rest] = arr;
  const kept = filterRecursive(rest, (value, index) => fn(value, index + 1));

  if (fn(first, 0)) {
    return [first, ...kept];
  }

  return kept;
}
