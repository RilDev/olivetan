import { assertEquals } from "testing/asserts.ts";
import { replaceWithRegExp } from "../replace-with-regexp.ts";

/** Error **/
/* missing input */
// TypeScript
/* input not of expected type */
// TypeScript

/** Success **/
Deno.test("scripts/modernize-transcript/replace-with-regexp: Success", () => {
  assertEquals(replaceWithRegExp("", "", ""), "");
  assertEquals(replaceWithRegExp("test", "t", "T"), "TesT");
  /* ".": no space before, add space after */
  assertEquals(replaceWithRegExp(".", "\\s*\\.\\s*", ". "), ". ");
  assertEquals(replaceWithRegExp(" . ", "\\s*\\.\\s*", ". "), ". ");
  assertEquals(replaceWithRegExp("  .  ", "\\s*\\.\\s*", ". "), ". ");
  assertEquals(replaceWithRegExp("test  .  ", "\\s*\\.\\s*", ". "), "test. ");
  assertEquals(
    replaceWithRegExp("test  . .  .   . ", "\\s*\\.\\s*", ". "),
    "test. . . . ",
  );
  /* ",": no space before, add space after */
  assertEquals(replaceWithRegExp(",", "\\s*,\\s*", ", "), ", ");
  assertEquals(replaceWithRegExp(" , ", "\\s*,\\s*", ", "), ", ");
  assertEquals(replaceWithRegExp("  ,  ", "\\s*,\\s*", ", "), ", ");
  assertEquals(replaceWithRegExp("test  ,  ", "\\s*,\\s*", ", "), "test, ");
  /* ";": add space before, add space after */
  assertEquals(replaceWithRegExp(";", "\\s*;\\s*", " ; "), " ; ");
  assertEquals(replaceWithRegExp(" ; ", "\\s*;\\s*", " ; "), " ; ");
  assertEquals(replaceWithRegExp("  ;  ", "\\s*;\\s*", " ; "), " ; ");
  assertEquals(replaceWithRegExp("test  ;  ", "\\s*;\\s*", " ; "), "test ; ");
  /* ":": add space before, add space after */
  assertEquals(replaceWithRegExp(":", "\\s*:\\s*", " : "), " : ");
  assertEquals(replaceWithRegExp(" : ", "\\s*:\\s*", " : "), " : ");
  assertEquals(replaceWithRegExp("  :  ", "\\s*:\\s*", " : "), " : ");
  assertEquals(replaceWithRegExp("test  :  ", "\\s*:\\s*", " : "), "test : ");
  assertEquals(
    replaceWithRegExp("test  :test  ", "\\s*:\\s*", " : "),
    "test : test  ",
  );
  /* "(": add space before, no space after */
  assertEquals(replaceWithRegExp("(", "\\s*\\(\\s*", " ("), " (");
  assertEquals(replaceWithRegExp("  (  ", "\\s*\\(\\s*", " ("), " (");
  assertEquals(
    replaceWithRegExp("  ( test) ", "\\s*\\(\\s*", " ("),
    " (test) ",
  );
  /* ")": no space before, add space after */
  assertEquals(replaceWithRegExp(")", "\\s*\\)\\s*", ") "), ") ");
  /* "&": add space before, add space after */
  assertEquals(replaceWithRegExp("&", "\\s*&\\s*", " & "), " & ");
  /* "?": add space before, add space after */
  assertEquals(replaceWithRegExp("?", "\\s*\\?\\s*", " ? "), " ? ");
  /* "!": add space before, add space after */
  assertEquals(replaceWithRegExp("!", "\\s*!\\s*", " ! "), " ! ");
  /* '"': add space before, add space after */
  assertEquals(replaceWithRegExp('"', '\\s*"\\s*', ' " '), ' " ');
  /* '-': no space before, no space after */
  assertEquals(replaceWithRegExp("   -    ", "\\s*-\\s*", "-"), "-");

});
