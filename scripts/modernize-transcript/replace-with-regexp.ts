/**
Replace with RegExp
Goal: replace all occurrences of regex with specified string
Input:
- [x] 1 string to modify
- [x] 1 string of regular expression
- [x] 1 string desired replacement
Output:
- [x] 1 string result
Error:
- [x] missing input
- [x] input not expected type
Note:
- [x] sanitize the regex string
Todo:
- [x] make algorithm
- [ ] code function
- [ ] test function
**/

export const replaceWithRegExp = (
  textToModify: string,
  regularExpression: string,
  textToReplaceWith: string,
): string => {
  /** Error **/
  /* missing input */
  // TypeScript
  /* input not of expected type */
  // TypeScript

  /** Core **/
  /* sanitize regularExpression string */
  const sanitizedRegex = "";

  /* initialize variables */
  let resultText = "";
  const regex = new RegExp(`${regularExpression}`, "g");

  /* run replace on textToModify */
  resultText = textToModify.replace(regex, textToReplaceWith);

  /* return result */
  return resultText;
};
