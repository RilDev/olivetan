import { throwErrorArrayLengthIsZero } from "../../throw-errors.ts";
import { assertEquals, assertThrows } from "testing/asserts.ts";

/** Error **/
Deno.test("scripts/utils/throw-errors:throwErrorArrayLengthIsZero: Error", () => {
  const error1 = assertThrows(() => throwErrorArrayLengthIsZero([]));
  const error2 = assertThrows(() =>
    throwErrorArrayLengthIsZero([], "This is a test error!")
  );

  assertEquals(error1.message, "Array should has at least one element!");
  assertEquals(error2.message, "This is a test error!");
});

/** Success **/
Deno.test("scripts/utils/throw-errors:throwErrorArrayLengthIsZero: Success", () => {
  const success1 = throwErrorArrayLengthIsZero(["test"]);
  const success2 = throwErrorArrayLengthIsZero([1]);
  const success3 = throwErrorArrayLengthIsZero([true]);
  const success4 = throwErrorArrayLengthIsZero(["test", 1, true]);

  assertEquals(success1, undefined);
  assertEquals(success2, undefined);
  assertEquals(success3, undefined);
  assertEquals(success4, undefined);
});
