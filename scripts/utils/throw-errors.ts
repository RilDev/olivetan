/**
Throw Errors
Goal: Group all script errors into one file. One function per error.
Input: 
- One or more inputs per function.
- The type of the input varies depending on the error tested.
Output: undefined
Error: Could through an error if conditions are met.
Note: /
Todo:
- [x] Create throwErrorArrayLengthIsZero
- [x] Create throwErrorFileExtensionNotSupported
- [x] Create throwErrorIsEmptyString
- [x] Create throwErrorStringHasTooManyOfChosenString
- [x] Create throwErrorStringHasIllegalCharacter
- [x] Create throwErrorFilenameHasNoExtension
**/

import { REGEXP_SPECIAL_CHARACTERS } from "../constants.ts";

/*
throwErrorArrayLengthIsZero
Goal: Check if array is of length 0
Input: 
- 1 array to test
- 1 error message string
Output: undefined
Error: array.length is equal to 0
Note: /
Todo:
- [x] Create function
- [x] Create tests
*/
export const throwErrorArrayLengthIsZero = (
  arrayToTest: unknown[],
  errorMessage: string = "Array should has at least one element!",
): void => {
  // if arrayToTest.length === 0, throw errorMessage!
  if (arrayToTest.length === 0) {
    throw Error(errorMessage);
  }
};

/*
throwErrorFileExtensionNotSupported
Goal: Check if file extension is supported
Input:
- 1 filename string,
- 1 supported extensions array of stings,
- 1 error message (optional)
Output: undefined
Error: file extension not present in supported extensions array
Note:
- The function doesn't check if the filename is well foramated (has an extension)
- The function doesn't check if the supportedExtensions array elements are well formated (ex: ["txt, pdf", "md"] is malformed)
Todo:
- [x] Create function
- [x] Create tests
*/
export const throwErrorFileExtensionNotSupported = (
  filename: string,
  supportedExtensions: string[],
  errorMessage: string = "File extension not supported!",
): void => {
  // get filename extension
  //// split filename on ".", get resulting arrays last element
  const filenameArray: string[] = filename.split(".");
  const fileExtension: string = filenameArray[filenameArray.length - 1];

  // loop supportedExtensions, if filename extension matches supportedExtension, return undefined
  for (const extension of supportedExtensions) {
    if (fileExtension === extension) {
      return undefined;
    }
  }

  // if no match found, throw error!
  throw Error(errorMessage);
};

/*
throwErrorIsEmptyString
Goal: if the tested string is empty, throw an error!
Input:
- 1 string,
- 1 error message string (optional)
Output: undefined
Error: the string is equal to ""
Note: /
Todo:
- [x] Create function
- [x] Create tests
*/
export const throwErrorIsEmptyString = (
  stringToTest: string,
  errorMessage: string = "String is empty!",
): void => {
  if (stringToTest === "") {
    throw Error(errorMessage);
  }
};

/*
throwErrorStringHasTooManyOfChosenString
Goal: Check if string contains too many occurrences of chosen string. Example: more than 1 period ".", more that 2 paranthesis "(" or more than 10 "cats".
Input:
- 1 string to test,
- 1 string of chosen characters,
- 1 integer maxChosenStringCount,
- 1 custom error message string (optional)
Output: undefined
Error: if the count of chosen string exceeds the maxChosenStringCount, throw an error!
Note: In case maxChosenStringCount is a float, round it down: 2.8 -> 2
Todo:
- [x] Create function
- [x] Create tests
*/
export const throwErrorStringHasTooManyOfChosenString = (
  stringToTest: string,
  chosenString: string,
  maxChosenStringCount: number,
  errorMessage: string = "String has too many occurrences of chosen string!",
): void => {
  // initialize maxCount, round down maxChosenStringCount + 1 (for the array.length)
  const maxCount: number = Math.floor(maxChosenStringCount) + 1;
  // split stringToTest with chosenString
  const splitedStringToTest: string[] = stringToTest.split(chosenString);
  // if splitedStringToTest.length is superior to maxCount, throw an error!
  if (splitedStringToTest.length > maxCount) {
    throw Error(errorMessage);
  }
};

/*
throwErrorStringHasIllegalCharacter
Goal: Throw an error if string to test contains any of the illegal characters
Input:
- 1 string to test
- 1 string of illegal characters
- 1 string for custom error message (optional)
Output: undefined
Error: if string contains any of the illegal characters, throw an error!
Note: 
- sanitize illegalCharacters string for regexp usage
- is case sensitive
Todo:
- [x] Create function
- [x] Create tests
*/
export const throwErrorStringHasIllegalCharacter = (
  stringToTest: string,
  illegalCharacters: string,
  errorMessage: string = "String contains illegal characters!",
): void => {
  // sanitize illegalCharacters string for regexp usage
  const regexpSpecialCharacters: string[] = REGEXP_SPECIAL_CHARACTERS;
  let sanitizedIllegalCharacters: string = "";
  for (const character of illegalCharacters) {
    if (regexpSpecialCharacters.includes(character)) {
      sanitizedIllegalCharacters =
        `${sanitizedIllegalCharacters}\\${character}`;
    } else {
      sanitizedIllegalCharacters = `${sanitizedIllegalCharacters}${character}`;
    }
  }

  // prepare sanitizedIllegalCharacters to create the regexp
  sanitizedIllegalCharacters = `[${sanitizedIllegalCharacters}]`;

  // create regular expression
  const illegalCharactersRegExp = new RegExp(sanitizedIllegalCharacters);

  // if stringToTest matches any illegal characters, throw an error!
  if (stringToTest.match(illegalCharactersRegExp)) {
    throw Error(errorMessage);
  }
};

/*
throwErrorFilenameHasNoExtension
Goal: if filename has no extension, throw an error
Input: 
- 1 string to test
- 1 string custom error message (optional)
Output: undefined
Error: if filename has no extension, throw an error
Note: /
Todo:
- [x] Create function
- [x] Create tests
*/
export const throwErrorFilenameHasNoExtension = (
  filename: string,
  errorMessage: string = "Filename has no extension!",
): void => {
  // split filename on period "."
  const filenameArray: string[] = filename.split('.');
  // if filenameArray < 2, throw error
  if (filenameArray.length < 2) {
    throw Error(errorMessage);
  }
};
