import type { PathInput } from "./types";

export const deepClone = <T>(obj: T): T => {
  if (obj !== null && typeof obj === "object") {
    const copy = new ((obj as object).constructor as new () => T)();
    for (const prop of Object.getOwnPropertyNames(obj)) {
      (copy as Record<string, unknown>)[prop] = deepClone(
        (obj as Record<string, unknown>)[prop]
      );
    }
    return copy;
  }
  return obj;
};

export const deepFreeze = <T extends object>(obj: T): T => {
  if (obj && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    for (const prop of Object.getOwnPropertyNames(obj)) {
      const value = (obj as Record<string, unknown>)[prop];
      if (value && typeof value === "object") {
        deepFreeze(value as object);
      }
    }
  }
  return obj;
};

export const getPath = (path: PathInput): (string | number)[] => {
  if (!(Array.isArray(path) || typeof path === "string")) {
    throw new Error("invalid type for path. Accepted types: Array | String");
  }
  return Array.isArray(path) ? [...path] : path.split(".");
};

export const getByPath = <T = unknown>(
  path: PathInput,
  obj: Record<string, unknown>
): T | undefined => {
  const segments = getPath(path);
  const loop = (arr: (string | number)[], current: Record<string, unknown>): T | undefined => {
    const key = String(arr[0]);
    if (key in current) {
      return arr.length > 1
        ? loop(arr.slice(1), current[key] as Record<string, unknown>)
        : deepClone(current[key]) as T;
    }
    return undefined;
  };
  return loop(segments, obj);
};

export const setByPath = <T extends Record<string, unknown>>(
  path: PathInput,
  value: unknown,
  obj: T
): T => {
  const segments = getPath(path);
  const key = String(segments[0]);
  if (!(key in obj)) {
    (obj as Record<string, unknown>)[key] =
      segments.length === 1 ? null : Number.isInteger(segments[1]) ? [] : {};
  }
  if (segments.length > 1) {
    return setByPath(
      segments.slice(1),
      value,
      (obj as Record<string, unknown>)[key] as T
    );
  }
  (obj as Record<string, unknown>)[key] = value;
  return obj;
};

export const updateObject = <T extends Record<string, unknown>>(
  path: PathInput,
  value: unknown,
  obj: T
): T => {
  const newObject = deepClone(obj);
  setByPath(path, value, newObject);
  return deepFreeze(newObject);
};
