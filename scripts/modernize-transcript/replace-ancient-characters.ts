/*
Replace Characters
Goal: Replace single characters such as "ſ" and "q̃" with their modern equivalent
Input: string
Output: string
Errors: No input, input not a string
Checks: /
Notes:
  How to optimize search/replace? https://stackoverflow.com/questions/60627009/javascript-from-an-optimization-standpoint-how-should-one-replace-multiple-sub
  RegExp escaping: https://javascript.info/regexp-escaping
Todo:
- [x] create list of characters to replace
- [x] build function
- [x] test function
*/

import { ANCIENT_CHARACTERS } from "../constants.ts";
import { sanitizeRegExpSpecialCharacters } from "../utils/sanitize-regexp-special-characters.ts";

interface ObjectOfStrings {
  [key: string]: string;
}

export const replaceAncientCharacters = (text: string): string => {
  /** Initialize Variables **/
  /* Sanitized Text */
  let sanitizedText = "";
  /* Characters to replace object */
  const charactersToReplace: ObjectOfStrings = ANCIENT_CHARACTERS;

  /* CharactersToReplaceRegExp */
  // Escape RegExp special characters
  const charactersToReplaceKeys = sanitizeRegExpSpecialCharacters(
    charactersToReplace,
  );
  // build RegExp | (or) string with characters to replace
  const charactersToReplaceString = charactersToReplaceKeys.join("|");

  // generate RegExp
  const charactersToReplaceRegExp = new RegExp(
    `${charactersToReplaceString}`,
    "g",
  );

  /** Core **/
  /* Replace all targeted characters */
  sanitizedText = text.replace(
    charactersToReplaceRegExp,
    (letter) => charactersToReplace[letter] || letter,
  );
  /* Return Resulting String */
  return sanitizedText;
};
