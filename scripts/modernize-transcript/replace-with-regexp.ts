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
- [x] sanitize the regex string (canceled)
Todo:
- [x] make algorithm
- [x] code function
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
  // since there are actual regular expression, sanitization is not needed!

  /* initialize variables */
  let resultText = "";
  const resultRegExp = new RegExp(`${regularExpression}`, "g");

  /* run replace on textToModify */
  resultText = textToModify.replace(resultRegExp, textToReplaceWith);

  /* return result */
  return resultText;
};
