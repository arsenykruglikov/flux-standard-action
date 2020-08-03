import { isError } from "../mod.ts";
import { assert } from "https://deno.land/std@0.62.0/testing/asserts.ts";

const type = "ACTION_TYPE";

Deno.test({
  name: "returns true if action.error is strictly true",
  fn: () => {
    assert(isError({ type, error: true }) === true);
    assert(isError({ type, error: "true" }) === false);
    assert(isError({ type }) === false);
  },
});
