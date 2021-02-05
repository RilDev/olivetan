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
- [ ] Create Test Suit
*/

export const generateFilename = (filename: string, stringToAppend: string): string => {
    /** Errors **/
    /* filename has more than one period */
    if (filename.split('.').length !== 2) {
        throw Error('filename, the first parameter, must contain exactly 1 period "."!');
    }
    /* stringToAppend contains a period */
    if (stringToAppend.split('.').length !== 1) {
        throw Error('stringToAppend, the second parameter, must not contain any period "."!')
    }
    /* filename or stringToAppend contains illigal characters (not [^A-Za-z0-9\-_\.]) */
    if (filename.match(/[^A-Za-z0-9\-_\.]/) || stringToAppend.match(/[^A-Za-z0-9\-_\.]/)) {
        throw Error('Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.')
    }

    /** Generate New Filename **/
    let generatedFilename: string = '';
    /* Get filename and extension */
    const filenameList: string[] = filename.split('.');
    const filenameName: string = filenameList[0];
    const filenameExtension: string = filenameList[1];
    /* Append `-${appendToFilename}` */
    generatedFilename = `${filenameName}-${stringToAppend}.${filenameExtension}`;

    /** Return newly generated filename **/
    return generatedFilename;
}