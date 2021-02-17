import { assertEquals, assertThrows } from "testing/asserts.ts";
import { throwErrorStringHasIllegalCharacter } from "../../throw-errors.ts";

/** Error **/
Deno.test("scripts/utils/throw-errors:throwErrorStringHasIllegalCharacter: Error", () => {
    const error1 = assertThrows(() => throwErrorStringHasIllegalCharacter("a", "a"));
    const error2 = assertThrows(() => throwErrorStringHasIllegalCharacter("ab", "a"));
    const error3 = assertThrows(() => throwErrorStringHasIllegalCharacter("ab", "b"));
    const error4 = assertThrows(() => throwErrorStringHasIllegalCharacter("a", "a/"));
    const error5 = assertThrows(() => throwErrorStringHasIllegalCharacter("acb", "a"));
    const error6 = assertThrows(() => throwErrorStringHasIllegalCharacter("a", "[]\\^$.|?*+()a"));
    const error7 = assertThrows(() => throwErrorStringHasIllegalCharacter("a", "a", "Custom Error Message!"));
  
    assertEquals(error1.message, "String contains illegal characters!");
    assertEquals(error2.message, "String contains illegal characters!");
    assertEquals(error3.message, "String contains illegal characters!");
    assertEquals(error4.message, "String contains illegal characters!");
    assertEquals(error5.message, "String contains illegal characters!");
    assertEquals(error6.message, "String contains illegal characters!");
    assertEquals(error7.message, "Custom Error Message!");
  });
  
  /** Success **/
  Deno.test("scripts/utils/throw-errors:throwErrorStringHasIllegalCharacter: Success", () => {
    const success1 = throwErrorStringHasIllegalCharacter("", "");
    const success2 = throwErrorStringHasIllegalCharacter("a", "");
    const success3 = throwErrorStringHasIllegalCharacter("a", "b");
    const success4 = throwErrorStringHasIllegalCharacter("a", "A");
    const success5 = throwErrorStringHasIllegalCharacter("ab", "c");
  
    assertEquals(success1, undefined);
    assertEquals(success2, undefined);
    assertEquals(success3, undefined);
    assertEquals(success4, undefined);
    assertEquals(success5, undefined);
  });
  