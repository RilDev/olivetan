/*
Modernize Transcipt
Goal: Take one ore several transcript texts from the Olivetan Bible to correct/modernize them to make them more readable
Input: Text Files
Output: For each file fed, it will generate a `filename-modernized` and a `filename-wfl` file. The first is the modernized version of the text, the other a word frequency list.
Errors: If there are no files given, if a file is not a text or markdown file
Checks: /
Run: deno run --allow-read --allow-write main.ts FILE_1 FILE_2
Test: deno test --allow-read --allow-write --unstable scripts/
Todo:
- [x] Write out all steps of the modernization
- [ ] Create CLI for one document
- [ ] Upgrade CLI to take in many documents at once
- [ ] Split code in modules to use them separatlely (Word frequency first)
- [ ] Add a separate `word-frequency-list.ts` script to only generate a word frequency list
- [ ] Add tests
*/

import { generateFilename } from "./generate-filename.ts";

export async function main(filenames: string[] = Deno.args): Promise<void> {
    /** Get All CLI Arguments **/
    // In order to be able to test the input of the `main()` function, I instanciate `filenames = Deno.args` directly as a parameter.
    
    /** Errors **/
    /* No Files Given as Arguments */
    if (filenames.length === 0) {
        throw Error("No Files Given!");
    }

    /* One of the files is not a text or markdown file (pdf, image...) */
    for (const filename of filenames) {
        // get the filename extension
        const filenameExtension = filename.split(".")[1];

        if (filenameExtension !== "txt" && filenameExtension !== "md") {
            throw Error("Only txt and md files are accepted!");
        }
    }

    /** Loop Through All The Files **/
    for (const filename of filenames) {
        /** Initialize Variables **/
        // Name of the modernized file: [filename]-modernized.[file extension]
        const modernizedFilename = generateFilename(filename, "modernized");
        // Name of the word frequency list file: [filename]-wfl.[file extension]
        const wordFrequencyListFilename = generateFilename(filename, "wfl");

        /** Open File **/
        let file = await Deno.readTextFile(filename);
        file = file.replace(/\s/g, "?");
        
        /** Replace all old letters **/
        /* Replace long s */
        /* Replace scribal abreviations */
        /* Correct "nm" combianation to "mm" for words such as "homme" or "comme" */
        /* Replace "n" to "m" for words such as "hone" -> "home" & "cone" -> "come" */
        /* Replace "i" to "j" for the following list of words. ex: "iamais" -> "jamais" */
        /* Replace "u" to "v" for the following list of words. ex: "suyuant" -> "suyvant" */
        /* Replace "v" to "u" for the following list of words. ex: "vni" -> "uni" */
        /** Modernize punctuation **/
        /* ".": no space before, add space after */
        /* ",": no space before, add space after */
        /* "/" -> ";": no space before, add space after */
        /* ":": add space before, add space after */
        /* "(": add space before, no space after */
        /* ")": no space before, add space after */
        /* "&": add space before, add space after */
        /** Remove superscript letters **/
        /** Remove asterixes **/
        /** Remove all double spaces **/
        /** Log out all words and their frequency to ease the search of typos */
        /* The words with the smallest frequecy come on top of the list */
        /* Remove all non-letters non-spaces characters */
        /* Create Log File */

        /** Save and Close File **/
        /* Modernized File */
        console.log(file);
        await Deno.writeTextFile(modernizedFilename, file);
        /* Word Frequency List */
        await Deno.writeTextFile(wordFrequencyListFilename, file);
    }
}

/** Execute Script **/
if (import.meta.main) main();
