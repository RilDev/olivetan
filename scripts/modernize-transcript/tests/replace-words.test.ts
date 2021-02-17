import { assertEquals, assertThrows } from "testing/asserts.ts";
import { replaceWords } from "../replace-words.ts";
import { MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION, WORDS_TO_MODERNIZE } from "../../constants.ts";

/** Error **/
/* missing argument */
// taken care of by TypeScript
/* argument not of the right type */
// taken care of by TypeScript

/** Success **/
Deno.test("scripts/modernize-transcript/replace-words: Success", () => {
  const text1 = "";
  const dictionary1 = {};
  const text2 = "Let's go";
  const dictionary2 = { "go": "gooo" };
  const text3 = "Let's go!";
  const dictionary3 = { "go": "gooo" };
  const text4 = "Let's go.";
  const dictionary4 = { "go": "gooo" };
  const text5 = "Let's go.,!,*&;?";
  const dictionary5 = { "go": "gooo" };
  const text6 = "Let's goᵃ";
  const dictionary6 = { "go": "gooo" };
  const text7 = "Let's goᵃᵇᶜᵈᵉᶠᶢ";
  const dictionary7 = { "go": "gooo" };
  const text8 = "Let's go";
  const dictionary8 = { "let's": "lat's" };
  const text9 = "Let's go";
  const dictionary9 = { "lEt's": "lat's" };
  const text10 = "acconplies conbourgeoys cone";
  const dictionary10 = MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION;
  const text11 = "acconpliesᵇ conbourgeoys* cone;";
  const dictionary11 = MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION;
  const text12 = "acconplies Conbourgeoys cone";
  const dictionary12 = MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION;
  const text13 = "Iehan ioyeulx Euangile vniuersel";
  const dictionary13 = WORDS_TO_MODERNIZE;
  const text14 = "Iehan Ioyeulx Euangile Vniuersel !";
  const dictionary14 = WORDS_TO_MODERNIZE;

  assertEquals(replaceWords(text1, dictionary1), "");
  assertEquals(replaceWords(text2, dictionary2), "Let's gooo");
  assertEquals(replaceWords(text3, dictionary3), "Let's gooo!");
  assertEquals(replaceWords(text4, dictionary4), "Let's gooo.");
  assertEquals(replaceWords(text5, dictionary5), "Let's gooo.,!,*&;?");
  assertEquals(replaceWords(text6, dictionary6), "Let's goooᵃ");
  assertEquals(replaceWords(text7, dictionary7), "Let's goooᵃᵇᶜᵈᵉᶠᶢ");
  assertEquals(replaceWords(text8, dictionary8), "Lat's go");
  assertEquals(replaceWords(text9, dictionary9), "Lat's go");
  assertEquals(replaceWords(text10, dictionary10), "accomplies combourgeoys come");
  assertEquals(replaceWords(text11, dictionary11), "accompliesᵇ combourgeoys* come;");
  assertEquals(replaceWords(text12, dictionary12), "accomplies Combourgeoys come");
  assertEquals(replaceWords(text13, dictionary13), "Jehan joyeulx Evangile universel");
  assertEquals(replaceWords(text14, dictionary14), "Jehan Joyeulx Evangile Universel !");
});
