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

  /** Modernize punctuation **/
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

  /** Remove unused characters **/
    /* Remove superscript letters */
    assertEquals(replaceWithRegExp("ᵃᵇᶜᵈᵉᶠᶢ", "[\\u1d43-\\u1dbb]", ""), "");
    assertEquals(replaceWithRegExp("testᵃ test ᵇ test-testᶜᵈᵉᶠᶢ", "[\\u1d43-\\u1dbb]", ""), "test test  test-test");
    /* Remove asterixes */
    assertEquals(replaceWithRegExp("*", "\\*", ""), "");
    assertEquals(replaceWithRegExp("test* test * test-test*****", "\\*", ""), "test test  test-test");
    /* Replace Line Breaks with a space */
    assertEquals(replaceWithRegExp("\n", "\\n", " "), " ");
    assertEquals(replaceWithRegExp("test\n test \n test-test\n\n\n\n\n", "\\n", " "), "test  test   test-test     ");
    /* Remove "꞊" and all spaces around it */
    assertEquals(replaceWithRegExp("꞊", "\\s*꞊\\s*", ""), "");
    assertEquals(replaceWithRegExp(" ꞊   ", "\\s*꞊\\s*", ""), "");
    assertEquals(replaceWithRegExp("tes ꞊ t", "\\s*꞊\\s*", ""), "test");
    /* Remove all multiple spaces */
    assertEquals(replaceWithRegExp(" ", "\\s+", " "), " ");
    assertEquals(replaceWithRegExp("  ", "\\s+", " "), " ");
    assertEquals(replaceWithRegExp("       ", "\\s+", " "), " ");
    assertEquals(replaceWithRegExp("test  test   test test", "\\s+", " "), "test test test test");
});
