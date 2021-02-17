import { throwErrorStringHasTooManyOfChosenString } from "../../throw-errors.ts";
import { assertEquals, assertThrows } from "testing/asserts.ts";

/** Error **/
Deno.test("scripts/utils/throw-errors:throwErrorStringHasTooManyOfChosenString: Error", () => {
  const error1 = assertThrows(() =>
    throwErrorStringHasTooManyOfChosenString("test", "s", 0)
  );
  const error2 = assertThrows(() =>
    throwErrorStringHasTooManyOfChosenString("test", "t", 1)
  );
  const error3 = assertThrows(() =>
    throwErrorStringHasTooManyOfChosenString("many.dots.here", ".", 1)
  );
  const error4 = assertThrows(() =>
    throwErrorStringHasTooManyOfChosenString("test test test", "test", 2)
  );
  const error5 = assertThrows(() =>
    throwErrorStringHasTooManyOfChosenString(
      "test",
      "s",
      0,
      "Custom error message!",
    )
  );

  assertEquals(
    error1.message,
    "String has too many occurrences of chosen string!",
  );
  assertEquals(
    error2.message,
    "String has too many occurrences of chosen string!",
  );
  assertEquals(
    error3.message,
    "String has too many occurrences of chosen string!",
  );
  assertEquals(
    error4.message,
    "String has too many occurrences of chosen string!",
  );
  assertEquals(error5.message, "Custom error message!");
});

/** Success **/
Deno.test("scripts/utils/throw-errors:throwErrorStringHasTooManyOfChosenString: Success", () => {
  const error1 = throwErrorStringHasTooManyOfChosenString("test", "s", 1);
  const error2 = throwErrorStringHasTooManyOfChosenString("test", "t", 2);
  const error3 = throwErrorStringHasTooManyOfChosenString(
    "many.dots.here",
    ".",
    2,
  );
  const error4 = throwErrorStringHasTooManyOfChosenString(
    "test test test",
    "test",
    3,
  );
  const error5 = throwErrorStringHasTooManyOfChosenString(
    "test",
    "s",
    1,
    "Custom error message!",
  );
  const error6 = throwErrorStringHasTooManyOfChosenString("test", "s", 5);

  assertEquals(error1, undefined);
  assertEquals(error2, undefined);
  assertEquals(error3, undefined);
  assertEquals(error4, undefined);
  assertEquals(error5, undefined);
  assertEquals(error6, undefined);
});
