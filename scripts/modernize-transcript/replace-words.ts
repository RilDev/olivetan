/**
Replace Words
Goal: Check all the words of a text against a dictionary object, replace word when it matches an entry in the dictionary
Input: 
- [x] 1 string text
- [x] 1 object dictionary
Output: 
- [x] 1 string updated text
Error: 
- [x] missing argument
- [x] argument not right type
Note: 
- [x] make a case sensitive replace
- [x] split also the punctiation -> ".", "!", "*", "&", ";", ",", "?", all superscripts
Todo:
- [x] Design algorithm
- [x] Create function
- [x] Create tests
**/
interface Dictionary {
  [key: string]: string;
}

export const replaceWords = (
  textToUpdate: string,
  dictionary: Dictionary,
): string => {
  /** Error **/
  /* missing argument */
  // taken care of by TypeScript
  /* argument not of the right type */
  // taken care of by TypeScript

  /** Core **/
  /* initialize variables */
  // split textToUpdate into an array of words
  const wordsList: string[] = textToUpdate.split(/([ \.,!,*&;?\u1d43-\u1dbb])/);
  
  // update dictionary to make it case sensitive (capitalized, lowercase)
  const caseSensitiveDictionary: Dictionary = {};
  for (const [key, value] of Object.entries(dictionary)) {
    // enforce lowercase
    caseSensitiveDictionary[key.toLowerCase()] = value.toLowerCase();
    // enforce capitalized
    caseSensitiveDictionary[
      key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    ] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  
  // split dictionary keys into an array
  const dictionaryKeysList: string[] = Object.keys(caseSensitiveDictionary);

  /* loop words array, if word matches dictonary entry, replace word with dictionary definition*/
  for (let i = 0; i < wordsList.length; i++) {
    if (dictionaryKeysList.includes(wordsList[i])) {
      wordsList[i] = caseSensitiveDictionary[wordsList[i]];
    }
  }

  /* join words array with NO spaces */
  const resultText = wordsList.join("");

  /* return result string */
  return resultText;
};
