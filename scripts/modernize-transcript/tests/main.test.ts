import {
  assertEquals,
  assertExists,
  assertThrowsAsync,
} from "https://deno.land/std/testing/asserts.ts";
import { main } from "../main.ts";

// /** Errors **/
// /* No Files Given as Arguments */
Deno.test("modernize-transcript/main: No Files Given as Arguments", async () => {
  const error1 = await assertThrowsAsync(async () => {
    await main([]);
  });

  assertEquals(error1.message, "No Files Given!");
});

// /* One of the files is not a text or markdown file (pdf, image...) */
Deno.test("modernize-transcript/main: One of the files is not a text or markdown file (pdf, image...)", async () => {
  const error1 = await assertThrowsAsync(async () => {
    await main(["scripts/modernize-transcript/test-files/test.pdf"]);
  });
  const error2 = await assertThrowsAsync(async () => {
    await main(["scripts/modernize-transcript/test-files/test.png"]);
  });
  const error3 = await assertThrowsAsync(async () => {
    await main([
      "scripts/modernize-transcript/test-files/test.txt",
      "scripts/modernize-transcript/test-files/test.pdf",
    ]);
  });

  assertEquals(error1.message, "Only txt and md files are accepted!");
  assertEquals(error2.message, "Only txt and md files are accepted!");
  assertEquals(error3.message, "Only txt and md files are accepted!");
});

/** Checks **/

/** General Tests **/
/* Tests That Should Not Produce Any Errors */
// Deno

/* Check If Files Have Been Created */

/* Delete The Test Files */
