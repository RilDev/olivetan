import { assertEquals, assertThrows } from "testing/asserts.ts";
import { throwErrorFilenameHasNoExtension } from "../../throw-errors.ts";

/** Error **/
Deno.test("scripts/utils/throw-errors:throwErrorFilenameHasNoExtension: Error", () => {
    const error1 = assertThrows(() => throwErrorFilenameHasNoExtension("filename"));
    const error2 = assertThrows(() => throwErrorFilenameHasNoExtension("filename", "Custom Error Message!"));
  
    assertEquals(error1.message, "Filename has no extension!");
    assertEquals(error2.message, "Custom Error Message!");
  });
  
  /** Success **/
  Deno.test("scripts/utils/throw-errors:throwErrorFilenameHasNoExtension: Success", () => {
    const success1 = throwErrorFilenameHasNoExtension("filename.txt");
    const success2 = throwErrorFilenameHasNoExtension("filename.png");
    const success3 = throwErrorFilenameHasNoExtension("filename.test.ts");
    const success4 = throwErrorFilenameHasNoExtension("filename.txt", "Custom Error Message!");
  
    assertEquals(success1, undefined);
    assertEquals(success2, undefined);
    assertEquals(success3, undefined);
    assertEquals(success4, undefined);
  });
  