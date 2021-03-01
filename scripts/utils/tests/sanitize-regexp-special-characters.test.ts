import { assertEquals, assertThrows } from "testing/asserts.ts";

import { sanitizeRegExpSpecialCharacters } from "../sanitize-regexp-special-characters.ts";

import { ANCIENT_CHARACTERS } from "../../constants.ts";

/** Error **/
/* sanitizeRegExpSpecialCharacters */
// no input and input not an object of strings already taken care of by TypeScript type checking!

/* sanitizeRegExpSpecialCharacters */
Deno.test("modernize-transcript/sanitizeRegExpSpecialCharacters: Input is an empty object", () => {
  const error1 = assertThrows(() => sanitizeRegExpSpecialCharacters({}));

  assertEquals(error1.message, "Parameter must be a non-empty object!");
});

/** Success **/
Deno.test("scripts/utils/sanitize-regexp-special-characters: Success", () => {
  assertEquals(
    sanitizeRegExpSpecialCharacters(ANCIENT_CHARACTERS),
    [
      "ſ",
      "ʃ",
      "ẽ",
      "ẽ",
      "q̃",
      "õ",
      "õ",
      "ã",
      "ã",
      "ĩ",
      "ĩ",
      "p̃",
      "ñ",
      "ũ",
      "q́",
      "ꝰ",
      "ʳ",
      "ↄ",
      "ꝑ",
      "ꝓ",
      "ꝯ",
      "/",
    ],
  );

  assertEquals(
    sanitizeRegExpSpecialCharacters(
      {
        "[": "[",
        "]": "]",
        "\\": "\\",
        "^": "^",
        "$": "$",
        ".": ".",
        "|": "|",
        "?": "?",
        "*": "*",
        "+": "+",
        "(": "(",
        ")": ")",
      },
    ),
    [
      "\\[",
      "\\]",
      "\\\\",
      "\\^",
      "\\$",
      "\\.",
      "\\|",
      "\\?",
      "\\*",
      "\\+",
      "\\(",
      "\\)",
    ],
  );
});
