/*
Word Frequency List
Goal: Generate a [filename]-wfl.[md|txt] file with a table grouping all words found in the document from the least frequent to the most frequent.
Input: Text file (.md || .txt)
Output: MarkDown file!
Errors: No text file given, text file not .md or .txt
Checks: /
Run: deno run --allow-read --allow-write scripts/word-frequency-list/main.ts FILE_1 FILE_2
Test: deno test --allow-read --allow-write --unstable scripts/word-frequency-list/
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
- [ ] Code CLI
- [ ] Move all functions shared with modernize-transcript to scripts/common/
- [ ] Test CLI
*/

export const main = (filenames: string[] = Deno.args) => {
    /** Errors **/
    /* No Filenames given */
    /* File Type Not Supported */
    // If file type is not .md and is not .txt -> throw error
    
    /** Get Arguments **/
    // For testing purposes, the filenames is past as an argument of main()

    /** Loop Through All Filenames **/
    /** Initialize Variables **/
    // group all variables used in the loop here as they are being created...

    /** Open Filename **/

    /** Analyze File **/
    // Remove all punctuation
    // Split file into array on spaces " "
    // Get total number of words from array length
    // Loop the array containing all the words to extract unique words and their number of occurrences

    /** Build Output File **/
    // Build Title and Description
    // Build Table
    //// Foreach word in the Set of words create new line:
    //// Word column: the key
    //// Occurrences column: the value
    //// Frequency: (occurrence / total word count) * 100 + '%'

    /** Save Output File **/
    /* Name Output File */
    // [filename]-wfl.md
    /* Write Output File */
}

/** Execute CLI **/
if (import.meta.main) main();