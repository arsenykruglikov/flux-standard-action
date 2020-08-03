import isPlainObject from "../helpers/isPlainObject.ts";
import { assert } from "https://deno.land/std@0.62.0/testing/asserts.ts";

Deno.test({
  name:
    "should return `true` if the object is created by the `Object` constructor.",
  fn: () => {
    assert(isPlainObject(Object.create({})));
    assert(isPlainObject(Object.create(Object.prototype)));
    assert(isPlainObject({ foo: "bar" }));
    assert(isPlainObject({}));
    assert(isPlainObject(Object.create(null)));
  },
});

Deno.test({
  name:
    "should return `true` if the object is created by the `Object` constructor.",
  fn: () => {
    class Foo {
      aba = {};
    }

    assert(!isPlainObject(/foo/));
    assert(!isPlainObject(function () {}));
    assert(!isPlainObject(1));
    assert(!isPlainObject(["foo", "bar"]));
    assert(!isPlainObject([]));
    assert(!isPlainObject(new Foo()));
    assert(!isPlainObject(null));
  },
});
