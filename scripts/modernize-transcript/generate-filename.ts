/*
Generate Filename
Goal: Generate a new filename composed of `filename-customString.ext`
Input: 2 strings
Output: 1 string of the new filename
Errors: input is empty, one input is missing, input is not a string, input has more than one period, input has illigal characters (not [^A-Za-z0-9\-_\.])
Checks: /
Todo:
- [x] Check input
- [x] Write filename generating function
- [x] Export function
- [x] Create Test Suit
- [x] Add assertEquals in the Error tests to make sure the error message displays correctly
*/

import { ALLOWED_FILENAME_CHARACTERS } from "./constants.ts";

export const generateFilename = (
  filename: string,
  stringToAppend: string,
): string => {
  /** Errors **/
  /* filename or stringToAppend are empty strings */
  if (filename === "" || stringToAppend === "") {
    throw Error("Parameters must not be empty strings!");
  }
  /* filename only contains one period "." */
  if (filename === ".") {
    throw Error("filename must be of the format: filename.ext");
  }
  /* filename has more than one period */
  if (filename.split(".").length !== 2) {
    throw Error(
      'filename, the first parameter, must contain exactly 1 period "."!',
    );
  }
  /* stringToAppend contains a period */
  if (stringToAppend.split(".").length !== 1) {
    throw Error(
      'stringToAppend, the second parameter, must not contain any period "."!',
    );
  }
  /* filename or stringToAppend contains illigal characters (not in ALLOWED_FILENAME_CHARACTERS) */
  if (
    filename.match(ALLOWED_FILENAME_CHARACTERS) ||
    stringToAppend.match(ALLOWED_FILENAME_CHARACTERS)
  ) {
    throw Error(
      `Spaces and special characters not allowed! Only characters in ${ALLOWED_FILENAME_CHARACTERS} are allowed.`,
    );
  }

  /** Generate New Filename **/
  let generatedFilename: string = "";
  /* Get filename and extension */
  const filenameList: string[] = filename.split(".");
  const filenameName: string = filenameList[0];
  const filenameExtension: string = filenameList[1];
  /* Append `-${appendToFilename}` */
  generatedFilename = `${filenameName}-${stringToAppend}.${filenameExtension}`;

  /** Return newly generated filename **/
  return generatedFilename;
};
