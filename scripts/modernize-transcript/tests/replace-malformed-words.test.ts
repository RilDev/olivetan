import { assertEquals } from "testing/asserts.ts";
import { replaceMalformedWords } from "../replace-malformed-words.ts";

/* Variable */
const dictionary = {
  "tes t": "test",
  "tet2": "test2",
};

const string1 = "tes t";
const string2 = " test ";
const string3 = " tes t ";
const string4 = "test tes t te st tet2";

/* Error */
// TypeScript

/* Success */
Deno.test("scipts/modernize-transcript/replace-malformed-words: Success", () => {
  assertEquals(replaceMalformedWords(string1, dictionary), "test");
  assertEquals(replaceMalformedWords(string2, dictionary), " test ");
  assertEquals(replaceMalformedWords(string3, dictionary), " test ");
  assertEquals(
    replaceMalformedWords(string4, dictionary),
    "test test te st test2",
  );
});
