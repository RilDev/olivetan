/*
Modernize Transcipt
Goal: Take one ore several transcript texts from the Olivetan Bible to correct/modernize them to make them more readable
Input: Text Files
Output: For each file fed, it will generate a `filename-modernized` and a `filename-wfl` file. The first is the modernized version of the text, the other a word frequency list.
Errors: If there are no files given, if a file is not a text or markdown file
Checks: /
Run: deno run --allow-read --allow-write scripts/modernize-transcript/main.ts FILE_1 FILE_2
Test: deno test --allow-read --allow-write --unstable scripts/modernize-transcript/
Todo:
- [x] Write out all steps of the modernization
- [x] Create CLI
- [ ] Split code to common directory to reuse in word-frequency-list CLI
- [ ] split file creation to /utils/create-file.ts
- [x] Add tests
- [x] use the throw-errors functions
- [ ] regex function to search an replace words and spaces => ex: "Che rubins" -> "Cherubins"
*/

import { generateFilename } from "./generate-filename.ts";
import { replaceAncientCharacters } from "./replace-ancient-characters.ts";
import { replaceWords } from "./replace-words.ts";
import { replaceWithRegExp } from "./replace-with-regexp.ts";
import {
  MISSPELLED_WORDS_DUE_TO_AI_OR_HUMAN_MISTAKE,
  MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION,
  WORDS_TO_MODERNIZE,
} from "../constants.ts";
import {
  throwErrorArrayLengthIsZero,
  throwErrorFileExtensionNotSupported,
} from "../utils/throw-errors.ts";

export async function main(filenames: string[] = Deno.args): Promise<void> {
  /** Get All CLI Arguments **/
  // In order to be able to test the input of the `main()` function, I instanciate `filenames = Deno.args` directly as a parameter.

  /** Errors **/
  /* No Filenames given */
  throwErrorArrayLengthIsZero(filenames, "No Files Given!");
  /* File Type Not Supported */
  // If file type is not .md and is not .txt -> throw error
  for (const filename of filenames) {
    throwErrorFileExtensionNotSupported(
      filename,
      ["md", "txt"],
      "File has an unsupported extension! Supported extensions are: md, txt",
    );
  }

  /** Loop Through All The Files **/
  for (const filename of filenames) {
    /** Initialize Variables **/
    // Name of the modernized file: [filename]-modernized.[file extension]
    const modernizedFilename = generateFilename(filename, "modernized");

    /** Open File **/
    let file = await Deno.readTextFile(filename);

    /** Remove unused characters **/
    /* Remove superscript letters */
    file = replaceWithRegExp(file, "[\\u1d43-\\u1dbb]", "");
    /* Remove asterixes */
    file = replaceWithRegExp(file, "\\*", "");
    /* Replace Line Breaks with a space */
    file = replaceWithRegExp(file, "\\n", " ");
    /* Remove "꞊" and all spaces around it */
    file = replaceWithRegExp(file, "\\s*꞊\\s*", "");
    /* Remove all multiple spaces */
    file = replaceWithRegExp(file, "\\s+", " ");

    /** Replace all old letters **/
    file = replaceAncientCharacters(file);

    /** Modernize punctuation **/
    /* ".": no space before, add space after */
    file = replaceWithRegExp(file, "\\s*\\.\\s*", ". ");
    /* ",": no space before, add space after */
    file = replaceWithRegExp(file, "\\s*,\\s*", ", ");
    /* ";": add space before, add space after */
    file = replaceWithRegExp(file, "\\s*;\\s*", " ; ");
    /* ":": add space before, add space after */
    file = replaceWithRegExp(file, "\\s*:\\s*", " : ");
    /* "(": add space before, no space after */
    file = replaceWithRegExp(file, "\\s*\\(\\s*", " (");
    /* ")": no space before, add space after */
    file = replaceWithRegExp(file, "\\s*\\)\\s*", ") ");
    /* "&": add space before, add space after */
    file = replaceWithRegExp(file, "\\s*&\\s*", " & ");
    /* "?": add space before, add space after */
    file = replaceWithRegExp(file, "\\s*\\?\\s*", " ? ");
    /* "!": add space before, add space after */
    file = replaceWithRegExp(file, "\\s*!\\s*", " ! ");
    /* '"': add space before, add space after */
    file = replaceWithRegExp(file, '\\s*"\\s*', ' " ');
    /* '-': no space before, no space after */
    file = replaceWithRegExp(file, "\\s*-\\s*", "-");

    /** Update old spelling **/
    file = replaceWords(file, MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION);
    file = replaceWords(file, WORDS_TO_MODERNIZE);
    file = replaceWords(file, MISSPELLED_WORDS_DUE_TO_AI_OR_HUMAN_MISTAKE);

    /** Log out all words and their frequency to ease the search of typos */
    /* The words with the smallest frequecy come on top of the list */
    /* Remove all non-letters non-spaces characters */
    /* Create Log File */

    /** Save and Close File **/
    /* Modernized File */
    await Deno.writeTextFile(modernizedFilename, file);
  }
}

/** Execute Script **/
if (import.meta.main) main();
