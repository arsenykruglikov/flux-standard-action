import { FSAAuto } from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.62.0/testing/asserts.ts";

// Usage of FSAAuto (automatically infer required properties)
Deno.test({
  name: "must specify payload property even when using a union with undefined",
  fn: () => {
    const fsa_with_payload = { type: "TEST", payload: undefined };
    expectOptionalPayload(fsa_with_payload);

    const fsa_without_payload = { type: "TEST" };
    // Not possible to cast!!!
    // expectOptionalPayload(fsa_without_payload);

    function expectOptionalPayload(fsa: FSAAuto<string, string | undefined>) {
      assertEquals(fsa.payload, undefined, "");
    }
  },
});
