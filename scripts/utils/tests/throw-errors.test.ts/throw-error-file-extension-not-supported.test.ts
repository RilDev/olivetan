import { throwErrorFileExtensionNotSupported } from "../../throw-errors.ts";
import { assertEquals, assertThrows } from "testing/asserts.ts";

/** Error **/
Deno.test("scripts/utils/throw-errors:throwErrorArrayLengthIsZero: Error", () => {
  const error1 = assertThrows(() =>
    throwErrorFileExtensionNotSupported("test.txt", ["md"])
  );
  const error2 = assertThrows(() =>
    throwErrorFileExtensionNotSupported("test.txt", ["md", "pdf"])
  );
  const error3 = assertThrows(() =>
    throwErrorFileExtensionNotSupported(
      "test.txt",
      ["md", "pdf", "png"],
      "File has an unsupported extension! Supported extensions are: md, pdf, png",
    )
  );

  assertEquals(error1.message, "File extension not supported!");
  assertEquals(error2.message, "File extension not supported!");
  assertEquals(
    error3.message,
    "File has an unsupported extension! Supported extensions are: md, pdf, png",
  );
});

/** Success **/
Deno.test("scripts/utils/throw-errors:throwErrorArrayLengthIsZero: Success", () => {
  const success1 = throwErrorFileExtensionNotSupported("test.txt", ["txt"]);
  const success2 = throwErrorFileExtensionNotSupported("test.txt", [
    "txt",
    "pdf",
  ]);
  const success3 = throwErrorFileExtensionNotSupported(
    "test.txt",
    ["txt", "pdf", "png"],
    "File has an unsupported extension! Supported extensions are: txt, pdf, png",
  );

  assertEquals(success1, undefined);
  assertEquals(success2, undefined);
  assertEquals(success3, undefined);
});
