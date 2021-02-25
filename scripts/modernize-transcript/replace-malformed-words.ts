/*
Replace Malformed Words
Goal: Some words are misspeled with spaces in it. This function fixes all exceptional misspeled words.
Input:
- 1 string full text
- 1 object of strings all misspeled words
Output:
- 1 string of corrected test
Error:
- missing argument
- argument is not of the right type
Note:
Todo:
- [x] prepare algorithm
- [x] code function
- [x] test function
*/

export const replaceMalformedWords = (
  text: string,
  misspeledWords: { [_: string]: string },
): string => {
  let updatedText = text;
  /* Error */
  // TypeScript

  /* Loop misspeledWords */
  for (const [key, value] of Object.entries(misspeledWords)) {
    // build regexp with space delimiters
    const keyRegExp = new RegExp(`${key}`, "g");
    // if match found, fix it
    updatedText = updatedText.replace(keyRegExp, value);
  }

  /* Return updated text */
  return updatedText;
};
