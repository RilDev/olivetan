import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { generateFilename } from "../generate-filename.ts";

/** Errors **/
Deno.test('filename has more than one period', () => {
    assertThrows(() => generateFilename('test.test.txt','modernized'));
    assertThrows(() => generateFilename('t.est.test.txt','modernized'));
})

/** Checks **/

/** General Tests **/

Deno.test("Generate Filename from well formatted strings", () => {
    assertEquals(generateFilename('test.txt','modernized'), 'test-modernized.txt');
});