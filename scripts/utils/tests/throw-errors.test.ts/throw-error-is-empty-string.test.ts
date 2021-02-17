import { throwErrorFileExtensionNotSupported } from "../../throw-errors.ts";
import { throwErrorIsEmptyString } from "../../throw-errors.ts";
import { assertEquals, assertThrows } from "testing/asserts.ts";

/** Error **/
Deno.test("scripts/utils/throw-errors:throwErrorIsEmptyString: Error", () => {
  const error1 = assertThrows(() => throwErrorIsEmptyString(""));
  const error2 = assertThrows(() =>
    throwErrorIsEmptyString("", "This is a custom error!")
  );

  assertEquals(error1.message, "String is empty!");
  assertEquals(error2.message, "This is a custom error!");
});

/** Success **/
Deno.test("scripts/utils/throw-errors:throwErrorIsEmptyString: Success", () => {
  const success1 = throwErrorIsEmptyString("Test");
  const success2 = throwErrorIsEmptyString("Longer test");
  const success3 = throwErrorIsEmptyString("Test", "This is a custom error!");

  assertEquals(success1, undefined);
  assertEquals(success2, undefined);
  assertEquals(success3, undefined);
});
