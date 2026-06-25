export const mapAsync = <T, R>(
  arr: readonly T[],
  fn: (value: T, index: number, array: readonly T[]) => R | Promise<R>
): Promise<R[]> => Promise.all(arr.map(fn));

export const filterAsync = async <T>(
  arr: readonly T[],
  fn: (value: T, index: number, array: readonly T[]) => boolean | Promise<boolean>
): Promise<T[]> => {
  const results = await mapAsync(arr, fn);
  return arr.filter((_, i) => Boolean(results[i]));
};

const forEachAsync = async <T>(
  arr: readonly T[],
  fn: (value: T, index: number) => void | Promise<void>
): Promise<void> => {
  for (let i = 0; i < arr.length; i++) {
    await fn(arr[i], i);
  }
};

export const reduceAsync = async <T, R>(
  arr: readonly T[],
  fn: (acc: R | Promise<R>, value: T, index: number) => R | Promise<R>,
  init: R
): Promise<R> => {
  let acc: R | Promise<R> = init;
  await forEachAsync(arr, async (v, i) => {
    acc = await fn(acc, v, i);
  });
  return acc;
};

export const findAsync = async <T, R>(
  arr: readonly T[],
  fnAsync: (value: T, index: number) => R | Promise<R>,
  fnFind: (value: R, index: number) => boolean
): Promise<T | undefined> => {
  const mapped = await Promise.all(arr.map(fnAsync));
  const index = mapped.findIndex(fnFind);
  return index < 0 ? undefined : arr[index];
};
