// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;

export const memoize = <T extends Fn>(fn: T): T => {
  const cache: Record<string, unknown> = {};
  const primitives = new Set(["number", "string", "boolean"]);

  return ((...args: unknown[]) => {
    const key =
      args.length === 1 && primitives.has(typeof args[0])
        ? String(args[0])
        : JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }) as T;
};

export const once = (fn: Fn): Fn => {
  let done = false;
  return (...args: unknown[]) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

export const onceAndAfter = (fn: Fn, g: Fn): Fn => {
  let done = false;
  return (...args: unknown[]) => {
    if (!done) {
      done = true;
      fn(...args);
    } else {
      g(...args);
    }
  };
};

export const loggingWrapper = <T extends Fn>(
  fn: T,
  logger: (...args: unknown[]) => void = console.log
): T =>
  ((...args: unknown[]) => {
    logger(`starting logging for function ${fn.name} with arguments ${args}`);
    try {
      const result = fn(...args);
      logger(
        `ending logging for function ${fn.name} with return value ${result}`
      );
      return result;
    } catch (error) {
      logger(`ending logging for function ${fn.name}: threw error ${error}`);
      throw error;
    }
  }) as T;

type CallbackFn<T> = (
  ...args: [...unknown[], (err: Error | null, data: T) => void]
) => void;

export const promisify =
  <T>(fn: CallbackFn<T>) =>
  (...args: unknown[]): Promise<T> =>
    new Promise((resolve, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );

export const addTiming = <T extends Fn>(
  fn: T,
  timer: () => number = () => performance.now(),
  logger: (text: string, fnName: string, start: number, end: number) => void = (
    text,
    fnName,
    start,
    end
  ) => console.log(`${fnName} - ${text} - ${end - start}`)
): T =>
  ((...args: unknown[]) => {
    const start = timer();
    try {
      const result = fn(...args);
      logger("normal exit", fn.name, start, timer());
      return result;
    } catch (error) {
      logger("exception thrown", fn.name, start, timer());
      throw error;
    }
  }) as T;
