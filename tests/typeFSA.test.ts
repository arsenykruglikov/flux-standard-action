import { FSA } from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.62.0/testing/asserts.ts";

const ACTION_TYPE_1 = "ACTION_TYPE_1";
type ACTION_TYPE_1 = typeof ACTION_TYPE_1;
type FSA_ACTION_TYPE_1 = FSA<ACTION_TYPE_1>;

function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}.`);
}

function assertTypeValue(fsa: FSA_ACTION_TYPE_1): void {
  assertEquals(fsa.type, ACTION_TYPE_1);
}

Deno.test({
  name: "enables TypeScript action type enforcement",
  fn: () => {
    const fsa_strict: FSA_ACTION_TYPE_1 = { type: ACTION_TYPE_1 };
    assertTypeValue(fsa_strict);
    if (fsa_strict.type !== ACTION_TYPE_1) {
      throw assertNever(fsa_strict.type);
    }
  },
});
