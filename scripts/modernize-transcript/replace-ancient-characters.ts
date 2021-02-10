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
- [ ] create list of characters to replace
- [ ] build function
- [ ] test function
*/

import { ANCIENT_CHARACTERS, REGEXP_SPECIAL_CHARACTERS } from "../constants.ts";

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
  const charactersToReplaceKeys = escapeRegExpSpecialCharacters(
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

export const escapeRegExpSpecialCharacters = (
  charatersToCheck: ObjectOfStrings,
): string[] => {
  /** Errors **/
  // no input and input not an object of strings already taken care of by TypeScript type checking!

  /** Checks **/
  /* Input is an empty object */
  if (Object.keys(charatersToCheck).length === 0) {
    throw Error("Parameter must be a non-empty object!");
  }

  /** Core **/
  // list of RegExp special characters
  const regExpSpecialCharacters = REGEXP_SPECIAL_CHARACTERS;
  // loop charactersToReplace against RegExp special characters, if match, prepend '\'
  const escapedCharactersList = [];
  for (const character in charatersToCheck) {
    if (regExpSpecialCharacters.includes(character)) {
      escapedCharactersList.push(`\\${character}`);
    } else {
      escapedCharactersList.push(`${character}`);
    }
  }

  return escapedCharactersList;
};
