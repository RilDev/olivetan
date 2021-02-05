import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { generateFilename } from "../generate-filename.ts";

/** Errors **/
Deno.test('filename or stringToAppend are empty strings', () => {
    assertThrows(() => generateFilename('',''));
    assertThrows(() => generateFilename('test.txt',''));
    assertThrows(() => generateFilename('','modernized'));
})

Deno.test('filename only contains one period "."', () => {
    assertThrows(() => generateFilename('.','modernized'));
});

Deno.test('filename has more than one period', () => {
    assertThrows(() => generateFilename('test.test.txt','modernized'));
    assertThrows(() => generateFilename('t.est.test.txt','modernized'));
});

Deno.test('stringToAppend contains a period', () => {
    assertThrows(() => generateFilename('test.test.txt','modernized'));
    assertThrows(() => generateFilename('t.est.test.txt','modernized'));
});

Deno.test('filename or stringToAppend contains illigal characters (not [^A-Za-z0-9\-_\.])', () => {
    assertThrows(() => generateFilename('test 2.txt','modernizer'));
    assertThrows(() => generateFilename('!test.txt','modernizer'));
    assertThrows(() => generateFilename('test.txt','modernizer 2'));
    assertThrows(() => generateFilename('test.txt','modernizer!'));
    assertThrows(() => generateFilename('test | Official.txt','modernizer'));
    assertThrows(() => generateFilename('tes?t.txt','moder/nizer'));
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