import { REGEXP_SPECIAL_CHARACTERS } from "../constants.ts";

interface ObjectOfStrings {
    [key: string]: string;
  }

export const sanitizeRegExpSpecialCharacters = (
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
    const sanitizedCharactersList = [];
    for (const character in charatersToCheck) {
      if (regExpSpecialCharacters.includes(character)) {
        sanitizedCharactersList.push(`\\${character}`);
      } else {
        sanitizedCharactersList.push(`${character}`);
      }
    }
  
    return sanitizedCharactersList;
  };