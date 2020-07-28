import { isFSA } from "../mod.ts";
import { assert } from "https://deno.land/std@0.62.0/testing/asserts.ts";

const type = "ACTION_TYPE";

Deno.test({
  name: "requires a type",
  fn: () => {
    assert(isFSA({ type }) === true);
    assert(isFSA(undefined) === false);
    assert(isFSA({}) === false);
    assert(isFSA({ type: undefined }) === false);
  },
});

Deno.test({
  name: "only accepts plain objects",
  fn: () => {
    const action1 = () => {};
    action1.type = type;
    assert(isFSA(action1) === false);

    const action2 = new String();
    Object.assign(action2, { type });
    assert(isFSA(action2) === false);
  },
});

Deno.test({
  name: "only returns true if type is a string",
  fn: () => {
    assert(isFSA({ type: true }) === false);
    assert(isFSA({ type: 123 }) === false);
  },
});

Deno.test({
  name: "returns false if there are invalid keys",
  fn: () => {
    assert(isFSA({ type, payload: "foobar" }) === true);
    assert(isFSA({ type, meta: "foobar" }) === true);
    assert(isFSA({ type, error: new Error() }) === true);
    assert(isFSA({ type, extra: "foobar" }) === false);
  },
});
