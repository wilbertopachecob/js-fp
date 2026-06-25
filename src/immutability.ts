import type { PathInput } from "@/types";

/**
 * Creates a deep copy of objects and arrays.
 */
export function deepClone<T>(value: T): T {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item)) as T;
  }

  const copy: Record<string, unknown> = {};

  for (const key of Object.keys(value)) {
    copy[key] = deepClone((value as Record<string, unknown>)[key]);
  }

  return copy as T;
}

/**
 * Freezes an object and every nested object inside it.
 */
export function deepFreeze<T extends object>(obj: T): T {
  Object.freeze(obj);

  for (const value of Object.values(obj)) {
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return obj;
}

/**
 * Turns a path string or array into path segments.
 *
 * @example
 * getPath("user.name"); // ["user", "name"]
 */
export function getPath(path: PathInput): string[] {
  if (Array.isArray(path)) {
    return path.map(String);
  }

  if (typeof path === "string") {
    return path.split(".");
  }

  throw new Error("Path must be a string or an array");
}

/**
 * Reads a nested value without changing the original object.
 *
 * @example
 * getByPath(["user", "name"], { user: { name: "Ada" } }); // "Ada"
 */
export function getByPath<T = unknown>(
  path: PathInput,
  obj: Record<string, unknown>
): T | undefined {
  const segments = getPath(path);
  let current: unknown = obj;

  for (const segment of segments) {
    if (current === null || typeof current !== "object") {
      return undefined;
    }

    current = (current as Record<string, unknown>)[segment];
  }

  return deepClone(current) as T;
}

/**
 * Sets a nested value on a copy-friendly object structure.
 * Creates missing objects or arrays when needed.
 */
export function setByPath<T extends Record<string, unknown>>(
  path: PathInput,
  value: unknown,
  obj: T
): T {
  const segments = getPath(path);
  let current: Record<string, unknown> = obj;

  for (let index = 0; index < segments.length; index++) {
    const key = segments[index];
    const isLast = index === segments.length - 1;

    if (isLast) {
      current[key] = value;
      break;
    }

    if (!(key in current)) {
      const nextKey = segments[index + 1];
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }

    current = current[key] as Record<string, unknown>;
  }

  return obj;
}

/**
 * Returns a new frozen object with one nested value updated.
 */
export function updateObject<T extends Record<string, unknown>>(
  path: PathInput,
  value: unknown,
  obj: T
): T {
  const clone = deepClone(obj);
  setByPath(path, value, clone);
  return deepFreeze(clone);
}
