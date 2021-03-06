/*
Word Frequency List
Goal: Generate a [filename]-wfl.[md|txt] file with a table grouping all words found in the document from the least frequent to the most frequent.
Input: Text file (.md || .txt)
Output: MarkDown file!
Errors: No text file given, text file not .md or .txt
Checks: /
Run: trex run wfl FILENAME1 FILENAME2
Test: trex run test
Notes: 
- The CLI can take one or many files
- The output file should have this format:
--- start file format
# [Filename]

Total number of words: [wordCount]

Word | Occurrences | Frequency
--- | --- | ---
test | 5 | 10%
...

[olivetan.fr](https://olivetan.fr)
--- end file format
Todo:
- [x] Write algorithm
- [x] Code CLI
- [ ] Move all functions shared with modernize-transcript to scripts/utils/
- [ ] Test CLI
- [ ] Move generate-filename to utils
- [ ] Move replace-with-regexp to utils
- [x] Add in file description: "Unique words count: [uniqueWordsCount]"
- [x] Add a rank column before the word with auto-increment id
- [ ] add parameter for generate file name to optionaly choose output extension
*/
import {
  throwErrorArrayLengthIsZero,
  throwErrorFileExtensionNotSupported,
} from "../utils/throw-errors.ts";
import { generateFilename } from "../modernize-transcript/generate-filename.ts";
import { replaceWithRegExp } from "../modernize-transcript/replace-with-regexp.ts";

export async function main(filenames: string[] = Deno.args) {
  /** Errors **/
  /* No Filenames given */
  throwErrorArrayLengthIsZero(filenames, "No Filenames given!");
  /* File Type Not Supported */
  // If file type is not .md and is not .txt -> throw error
  for (const filename of filenames) {
    throwErrorFileExtensionNotSupported(
      filename,
      ["md", "txt"],
      "File has an unsupported extension! Supported extensions are: md, txt",
    );
  }

  /** Get Arguments **/
  // For testing purposes, the filenames is past as an argument of main()
  /** Loop Through All Filenames **/
  for (const filename of filenames) {
    /** Initialize Variables **/
    // group all variables used in the loop here as they are being created...
    /* Name Output File */
    // [filename]-wfl.md
    const wflFilename = generateFilename(filename, "wfl");
    let wordsList: string[] = [];
    let wordsCount = 0;
    const dictionary: { [key: string]: number } = {};
    let sortedDictionary: any[] = [];
    let outputFile: string = "";

    /** Open Filename **/
    let file = await Deno.readTextFile(filename);

    /** Analyze File **/
    // Remove all punctuation, superscripts, &, *, /, ¶, #, - and ꞊
    file = replaceWithRegExp(file, "[#-,:;!\?\.&\*\/¶꞊\\u1d43-\\u1dbb]", " ");
    /* Replace Line Breaks with a space */
    file = replaceWithRegExp(file, "\\n", " ");
    /* Remove all multiple spaces */
    file = replaceWithRegExp(file, "\\s+", " ");
    // Split file into array on spaces " "
    wordsList = file.split(" ");
    // remove empty elements
    wordsList = wordsList.filter(word => word);
    // lowercase elements
    wordsList = wordsList.map(word => {
        if (word !== "Iesus" && word !== "Jesus" && word !== "Dieu" && word !== "Pere") {
            return word.toLocaleLowerCase();
        }
        return word;
    })

    // Get total number of words from array length
    wordsCount = wordsList.length;

    // Loop the array containing all the words to extract unique words and their number of occurrences
    for (const word of wordsList) {
      if (!dictionary[word]) {
        dictionary[word] = 1;
      } else {
        dictionary[word] = dictionary[word] + 1;
      }
    }

    // order results by ascending order of occurrences
    sortedDictionary = Object.entries(dictionary).sort((a, b) => a[1] - b[1]);

    /** Build Output File **/
    // Build Title and Description
    outputFile += `# ${filename} - Word Frequency List

Total number of words: ${wordsCount}

Unique words count: ${sortedDictionary.length}

`;
    // Build Table
    outputFile += `Rank | Word | Occurrences | Frequency
--- | --- | --- | ---
`;
    //// Foreach word in the Set of words create new line:
    //// Word column: the key
    //// Occurrences column: the value
    //// Frequency: (occurrence / total word count) * 100 + '%'
    for (const [id, word] of sortedDictionary.entries()) {
        outputFile += `${id + 1} | ${word[0]} | ${word[1]} | ${((word[1] / wordsCount) * 100).toFixed(2)}%
`;
    }

    /** Save Output File **/
    /* Write Output File */
    await Deno.writeTextFile(wflFilename, outputFile);
  }
}

/** Execute CLI **/
if (import.meta.main) main();
