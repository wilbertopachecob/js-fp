/**
 * Runs an async function for every item and waits for all results.
 */
export async function mapAsync<T, R>(
  arr: readonly T[],
  fn: (value: T, index: number) => R | Promise<R>
): Promise<R[]> {
  const results: R[] = [];

  for (let index = 0; index < arr.length; index++) {
    results.push(await fn(arr[index], index));
  }

  return results;
}

/**
 * Keeps items where the async test returns `true`.
 */
export async function filterAsync<T>(
  arr: readonly T[],
  fn: (value: T, index: number) => boolean | Promise<boolean>
): Promise<T[]> {
  const kept: T[] = [];

  for (let index = 0; index < arr.length; index++) {
    if (await fn(arr[index], index)) {
      kept.push(arr[index]);
    }
  }

  return kept;
}

/**
 * Reduces an array one async step at a time.
 */
export async function reduceAsync<T, R>(
  arr: readonly T[],
  fn: (acc: R, value: T, index: number) => R | Promise<R>,
  initialValue: R
): Promise<R> {
  let acc = initialValue;

  for (let index = 0; index < arr.length; index++) {
    acc = await fn(acc, arr[index], index);
  }

  return acc;
}

/**
 * Maps items asynchronously, then returns the first item whose mapped
 * value passes `isMatch`.
 */
export async function findAsync<T, R>(
  arr: readonly T[],
  mapFn: (value: T, index: number) => R | Promise<R>,
  isMatch: (mappedValue: R, index: number) => boolean
): Promise<T | undefined> {
  for (let index = 0; index < arr.length; index++) {
    const mappedValue = await mapFn(arr[index], index);
    if (isMatch(mappedValue, index)) {
      return arr[index];
    }
  }

  return undefined;
}
