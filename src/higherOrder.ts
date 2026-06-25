/** Simple function type for wrappers like memoize and once. */
type Fn = (...args: any[]) => any;

/**
 * Stores the result of a function so repeated calls with the same
 * arguments return the cached value.
 *
 * @example
 * const slowDouble = (n: number) => n * 2;
 * const fastDouble = memoize(slowDouble);
 * fastDouble(5); // computes
 * fastDouble(5); // reads from cache
 */
export function memoize<T extends Fn>(fn: T): T {
  const cache = new Map<string, unknown>();

  const memoized = (...args: unknown[]) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };

  return memoized as T;
}

/**
 * Wraps a function so it runs only the first time it is called.
 */
export function once(fn: Fn): Fn {
  let hasRun = false;

  return (...args) => {
    if (!hasRun) {
      hasRun = true;
      fn(...args);
    }
  };
}

/**
 * Runs `first` only once. Every later call runs `next`.
 */
export function onceAndAfter(first: Fn, next: Fn): Fn {
  let hasRun = false;

  return (...args) => {
    if (!hasRun) {
      hasRun = true;
      first(...args);
      return;
    }
    next(...args);
  };
}

/**
 * Logs when a function starts, finishes, or throws an error.
 */
export function loggingWrapper<T extends Fn>(
  fn: T,
  logger: (...messages: unknown[]) => void = console.log
): T {
  const wrapped = (...args: unknown[]) => {
    logger(`calling ${fn.name}`, args);
    try {
      const result = fn(...args);
      logger(`returned from ${fn.name}`, result);
      return result;
    } catch (error) {
      logger(`error in ${fn.name}`, error);
      throw error;
    }
  };

  return wrapped as T;
}

/**
 * Turns a callback-style function into one that returns a Promise.
 *
 * @example
 * const readFilePromise = promisify(fs.readFile);
 * await readFilePromise("file.txt", "utf8");
 */
export function promisify<T>(fn: (...args: any[]) => void) {
  return (...args: unknown[]): Promise<T> =>
    new Promise((resolve, reject) => {
      fn(...args, (error: Error | null, result: T) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
}

/**
 * Logs how long a function takes to run.
 */
export function addTiming<T extends Fn>(
  fn: T,
  timer: () => number = () => performance.now(),
  logger: (message: string) => void = (message) => console.log(message)
): T {
  const wrapped = (...args: unknown[]) => {
    const start = timer();
    try {
      const result = fn(...args);
      logger(`${fn.name} took ${timer() - start}ms`);
      return result;
    } catch (error) {
      logger(`${fn.name} failed after ${timer() - start}ms`);
      throw error;
    }
  };

  return wrapped as T;
}
