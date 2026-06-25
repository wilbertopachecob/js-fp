export const fibonacci = (num: number): number => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

export const quicksort = <T>(arr: readonly T[]): T[] => {
  if (arr.length < 2) {
    return [...arr];
  }
  const pivot = arr[0];
  const smaller = arr.slice(1).filter((x) => x < pivot);
  const greater = arr.slice(1).filter((x) => x >= pivot);
  return [...quicksort(smaller), pivot, ...quicksort(greater)];
};

export const mapRecursive = <T, R>(
  orig: readonly T[],
  cb: (value: T, index: number, array: readonly T[]) => R
): R[] => {
  const mapLoop = (arr: readonly T[], i: number): R[] => {
    if (arr.length === 0) {
      return [];
    }
    if (!(0 in arr)) {
      return [, ...mapLoop(arr.slice(1), i + 1)] as R[];
    }
    return [cb(arr[0], i, orig), ...mapLoop(arr.slice(1), i + 1)];
  };
  return mapLoop(orig, 0);
};

export const filterRecursive = <T>(
  orig: readonly T[],
  cb: (value: T, index: number, array: readonly T[]) => boolean
): T[] => {
  const filterLoop = (arr: readonly T[], i: number): T[] => {
    if (arr.length === 0) {
      return [];
    }
    if (!(0 in arr)) {
      return filterLoop(arr.slice(1), i + 1);
    }
    if (cb(arr[0], i, orig)) {
      return [arr[0], ...filterLoop(arr.slice(1), i + 1)];
    }
    return filterLoop(arr.slice(1), i + 1);
  };
  return filterLoop(orig, 0);
};
