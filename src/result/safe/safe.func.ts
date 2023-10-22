import type { MaybePromise } from "#/typing/promise";

export async function safe<T>(fn: (...params: unknown[]) => MaybePromise<T>): Promise<void> {
  try {
    await fn();
  } catch {
    // empty
  }
}