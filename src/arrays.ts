export const myMap = <T, R>(arr: readonly T[], fn: (value: T) => R): R[] =>
  arr.reduce<R[]>((acc, next) => {
    acc.push(fn(next));
    return acc;
  }, []);

export const flatAll = <T>(arr: readonly (T | readonly T[])[]): T[] =>
  arr.reduce<T[]>(
    (acc, next) =>
      acc.concat(Array.isArray(next) ? flatAll(next as readonly T[]) : [next as T]),
    []
  );

export const range = (
  start = 0,
  end?: number,
  step = 1
): number[] => {
  if (start <= 0 && end === undefined) {
    return [0];
  }
  if (end === undefined) {
    return [start];
  }
  return new Array(Math.floor(end / step))
    .fill(0)
    .reduce<number[]>(
      (acc, _, i) =>
        i === 0
          ? [start]
          : acc[acc.length - 1] + step === end
            ? acc
            : acc.concat(acc[acc.length - 1] + step),
      []
    );
};

export const shuffle = <T>(arr: T[]): T[] => {
  const copy = [...arr];
  const len = copy.length;
  for (let i = 0; i < len - 1; i++) {
    const r = Math.floor(Math.random() * (len - i));
    [copy[i], copy[i + r]] = [copy[i + r], copy[i]];
  }
  return copy;
};
