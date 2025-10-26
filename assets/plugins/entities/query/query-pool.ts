import { BooleanArray } from "../../collections/boolean-array/BooleanArray";

/** Pool for reusing query result objects */
export class QueryResultPool {
  #entityArrays: BooleanArray[] = [];
  #size: number;

  constructor(size: number) {
    this.#size = size;
    this.#entityArrays = [];
  }

  acquireEntityArray(): BooleanArray {
    return this.#entityArrays.pop() ?? new BooleanArray(this.#size);
  }

  releaseEntityArray(array: BooleanArray): void {
    array.clear();
    this.#entityArrays.push(array);
  }
}
