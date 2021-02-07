import {
  assertExists,
  assertThrowsAsync,
} from "https://deno.land/std/testing/asserts.ts";
import { main } from "../main.ts";

// /** Errors **/
// /* No Files Given as Arguments */
Deno.test("modernize-transcript/main: No Files Given as Arguments", async () => {
    const error1 = assertThrowsAsync(async () => {
        await main([])
    });
  const error2 = await assertThrowsAsync(async () => {
    throw Error("test");
  });
});

// /* One of the files is not a text or markdown file (pdf, image...) */
// for (const filename of filenames) {
//   // get the filename extension
//   const filenameExtension = filename.split(".")[1];

//   if (filenameExtension !== "txt" && filenameExtension !== "md") {
//     throw Error("Only txt and md files are accepted!");
//   }
// }

/** Checks **/

/** General Tests **/
