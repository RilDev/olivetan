import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { generateFilename } from "../generate-filename.ts";

/** Errors **/
Deno.test('filename or stringToAppend are empty strings', () => {
    const error1 = assertThrows(() => generateFilename('',''));
    const error2 = assertThrows(() => generateFilename('test.txt',''));
    const error3 = assertThrows(() => generateFilename('','modernized'));

    assertEquals(error1.message, 'Parameters must not be empty strings!');
    assertEquals(error2.message, 'Parameters must not be empty strings!');
    assertEquals(error3.message, 'Parameters must not be empty strings!');
})

Deno.test('filename only contains one period "."', () => {
    const error1 = assertThrows(() => generateFilename('.','modernized'));

    assertEquals(error1.message, 'filename must be of the format: filename.ext');
});

Deno.test('filename has more than one period', () => {
    const error1 = assertThrows(() => generateFilename('test.test.txt','modernized'));
    const error2 = assertThrows(() => generateFilename('t.est.test.txt','modernized'));

    assertEquals(error1.message, 'filename, the first parameter, must contain exactly 1 period "."!');
    assertEquals(error2.message, 'filename, the first parameter, must contain exactly 1 period "."!');
});

Deno.test('stringToAppend contains a period', () => {
    const error1 = assertThrows(() => generateFilename('test.txt','modernized.md'));
    const error2 = assertThrows(() => generateFilename('test.txt','modernized.txt'));
    const error3 = assertThrows(() => generateFilename('test.txt','modernized.test.txt'));

    assertEquals(error1.message, 'stringToAppend, the second parameter, must not contain any period "."!');
    assertEquals(error2.message, 'stringToAppend, the second parameter, must not contain any period "."!');
    assertEquals(error3.message, 'stringToAppend, the second parameter, must not contain any period "."!');
});

Deno.test('filename or stringToAppend contains illigal characters (not [^A-Za-z0-9\-_\.])', () => {
    const error1 = assertThrows(() => generateFilename('test 2.txt','modernizer'));
    const error2 = assertThrows(() => generateFilename('!test.txt','modernizer'));
    const error3 = assertThrows(() => generateFilename('test.txt','modernizer 2'));
    const error4 = assertThrows(() => generateFilename('test.txt','modernizer!'));
    const error5 = assertThrows(() => generateFilename('test | Official.txt','modernizer'));
    const error6 = assertThrows(() => generateFilename('tes?t.txt','moder/nizer'));

    assertEquals(error1.message, 'Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.');
    assertEquals(error2.message, 'Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.');
    assertEquals(error3.message, 'Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.');
    assertEquals(error4.message, 'Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.');
    assertEquals(error5.message, 'Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.');
    assertEquals(error6.message, 'Spaces and special characters not allowed! Only characters in [A-Za-z0-9\-_\.] are allowed.');
});

/** Checks **/

/** General Tests **/
Deno.test("Generate Filename from well formatted strings", () => {
    assertEquals(generateFilename('test.txt','modernized'), 'test-modernized.txt');
    assertEquals(generateFilename('test.txt','wfl'), 'test-wfl.txt');
    assertEquals(generateFilename('test.md','modernized'), 'test-modernized.md');
    assertEquals(generateFilename('test.md','wfl'), 'test-wfl.md');
    assertEquals(generateFilename('Test.txt','modernized'), 'Test-modernized.txt');
    assertEquals(generateFilename('a.b','c'), 'a-c.b');
});