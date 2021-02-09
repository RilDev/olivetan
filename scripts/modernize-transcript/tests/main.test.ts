import {
  assert,
  assertEquals,
  assertThrowsAsync,
} from "https://deno.land/std/testing/asserts.ts";
import { exists } from "https://deno.land/std/fs/mod.ts";
import { main } from "../main.ts";
import { TEST_FILE_BASE_PATH } from "../constants.ts";

/** Errors **/
Deno.test("modernize-transcript/main: No Files Given as Arguments", async () => {
  const error1 = await assertThrowsAsync(async () => {
    await main([]);
  });

  assertEquals(error1.message, "No Files Given!");
});

Deno.test("modernize-transcript/main: One of the files is not a text or markdown file (pdf, image...)", async () => {
  const error1 = await assertThrowsAsync(async () => {
    await main([`${TEST_FILE_BASE_PATH}/test-files/test.pdf`]);
  });
  const error2 = await assertThrowsAsync(async () => {
    await main([`${TEST_FILE_BASE_PATH}/test-files/test.png`]);
  });
  const error3 = await assertThrowsAsync(async () => {
    await main([
      `${TEST_FILE_BASE_PATH}/test-files/test.txt`,
      `${TEST_FILE_BASE_PATH}/test-files/test.pdf`,
    ]);
  });

  assertEquals(error1.message, "Only txt and md files are accepted!");
  assertEquals(error2.message, "Only txt and md files are accepted!");
  assertEquals(error3.message, "Only txt and md files are accepted!");
});

/** Checks **/

/** General Tests **/
Deno.test("modernize-transcript/main: Tests That Should Not Produce Any Errors", async () => {
  await main([`${TEST_FILE_BASE_PATH}/test-files/test.md`]);
  await main([`${TEST_FILE_BASE_PATH}/test-files/test.txt`]);
  await main([
    `${TEST_FILE_BASE_PATH}/test-files/test.md`,
    `${TEST_FILE_BASE_PATH}/test-files/test.txt`,
  ]);
});

Deno.test("modernize-transcript/main: Check If Files Have Been Created", async () => {
  const file1 = await exists(`${TEST_FILE_BASE_PATH}/test-files/test-modernized.md`);
  const file3 = await exists(`${TEST_FILE_BASE_PATH}/test-files/test-modernized.txt`);

  assert(file1);
  assert(file3);
});

Deno.test("modernize-transcript/main: Delete The Test Files", async () => {
  await Deno.remove(`${TEST_FILE_BASE_PATH}/test-files/test-modernized.md`);
  await Deno.remove(`${TEST_FILE_BASE_PATH}/test-files/test-modernized.txt`);

  /* Check files have been removed */
  const file1 = await exists(`${TEST_FILE_BASE_PATH}/test-files/test-modernized.md`);
  const file3 = await exists(`${TEST_FILE_BASE_PATH}/test-files/test-modernized.txt`);

  assert(!file1);
  assert(!file3);
});
