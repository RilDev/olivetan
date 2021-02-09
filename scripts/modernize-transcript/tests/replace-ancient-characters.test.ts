import {
  assertEquals,
  assertThrows,
} from "testing/asserts.ts";
import {
  escapeRegExpSpecialCharacters,
  replaceAncientCharacters,
} from "../replace-ancient-characters.ts";
import { ANCIENT_CHARACTERS, THIRD_EPISTLE_OF_JOHN } from "../constants.ts";

/** Errors **/
/* replaceAncientCharacters */
// no input and input not a string already taken care of by TypeScript type checking!

/* escapeRegExpSpecialCharacters */
// no input and input not an object of strings already taken care of by TypeScript type checking!

/** Checks **/
/* replaceAncientCharacters */

/* escapeRegExpSpecialCharacters */
Deno.test("modernize-transcript/escapeRegExpSpecialCharacters: Input is an empty object", () => {
  const error1 = assertThrows(() => escapeRegExpSpecialCharacters({}));

  assertEquals(error1.message, "Parameter must be a non-empty object!");
});

/** General Testing **/
/* replaceAncientCharacters */
Deno.test("modernize-transcript/replaceAncientCharacters: Input Texts", () => {
  assertEquals(replaceAncientCharacters("test"), "test");
  assertEquals(replaceAncientCharacters("teſt"), "test");
  assertEquals(replaceAncientCharacters("tẽst"), "tenst");
  assertEquals(replaceAncientCharacters("tẽſt"), "tenst");
  assertEquals(replaceAncientCharacters("question"), "question");
  assertEquals(replaceAncientCharacters("q̃stiõ"), "question");
  assertEquals(replaceAncientCharacters("ã ãſwer"), "an answer");
  assertEquals(replaceAncientCharacters(`Treſcher ie deſire quẽ toutes choſes
  tu proſpere/ & que ſois en ſante/ comme
  ton ame eſt en ꝓſperite.`), "Trescher ie desire quen toutes choses\n  tu prospere; & que sois en sante; comme\n  ton ame est en prosperite.")
  assertEquals(
    replaceAncientCharacters(THIRD_EPISTLE_OF_JOHN),
    "¶La tierce epistre de sainct\nIehan Theologien.\nChapitre seul.\nAncien a Baye bien ayme\nlequel iayme en verite.\nTrescher ie desire quen toutes choses\ntu prospere; & que sois en sante; comme\nton ame est en prosperite. Iay est fort\nesiouy quand les freres sont venuz;& ont rendu tesmoin\ngnage a ta verite comme tu chemine en verite. Ie nay\npoint ioye plus grande ques ces choses icy;que douyr que\nmes enfans cheminent en verite.\nTrescher tu fais fedelement ce que tu fais enuers les\nfreres;& enuers les estrangees:lesquelz ont rendu tesmoingna\nge a ta charite en la presence de leglise. Lesquelz si tu\nles conduictz dignement selon Dieu;tu feras bien.\nCar ilz se sont partis pour son nom;& ne prennent rien\ndes Gentilz. Nous donc deuons receuoir ceulx qui\nsont telz:affin que ensemble soyons operateurs de la verite.\nIay escrit a leglise : mais Diotrephes qui ayme a\nobtenir le premier lieu entre eulx;ne nous receoit point.\nPour ceste cause;si ie viens;ie manifesteray les oeu꞊\nures quil faict ; caquetant par parolles malicieuses\ncontre nous . Et nestant point content de ces choses:\nnon seullement ne receoit point les freres:mais empes꞊\nche ceulx qui les veullent receuoir;& les deiette de leglise.\nBien ayme;nensuys point le mal:mais le bien.\nQui faict bien;est de Dieu:mais qui faict mal;ne voit\npoint Dieu. Le tesmoignage est rendu de tous\na Demetrius:& par la verite mesme.Mais aussi nous\nen donnons tesmoingnage; & vous auez congneu que\nnostre tesmoingnage est veritable.\nIauoye plusieurs choses a escrire;mais ie ne te veulx\npoint escrire par encre & par plume. Toutesfois iay espe\nrance de te veoir de brief;& parlerons bouche a bouche.\nPaix soit a toy. Les amys te saluent. Salue les\namys par nom.\n¶fin de la tierce epistre sainct Iehan.\n¶Epistre de sainct Iude Apostre.\nChapitre seul.\nUde Seruiteur de Iesus\nChrist;& frere de Iacques;a ceulx qui sont\nsanctifiez en Dieu le pere;& conseruez &\nappellez en Iesus Christ. Misericor꞊\n\nde;& paix;& charite vous soit multipliee.\nTreschers;*il ma este necessaire vous escrire;faitsant\ntoute diligence pour vous escrire de vostre commun sa꞊\nlut: priant que bataillez fort pour la foy;laquelle a este\nvne foys baillee aux Sainctz. Car aucuns hommes\nsans preudhonmie;sont couuertement entrez;lesquelz par\nauant estoient prescritz a ceste dannation: conuertissans la\ngrace de nostre Dieu en infamete; & denyans Dieu le\nseul dominateur & nostre Seigneur Iesus Christ.\nMais ie vous vueil admonnester puis que scauez\nvne fois ceste chose:que le Seigneur ayant sauue le peu꞊\n\n\nple degypte;a derechef destruct ceulx qui ne creurent\npoint. Et que les Anges qui ne garderent point leur\npricipaulte;mais delaisserent leur domicile il les a re꞊\nservez soubz obscurite en liens eternelz au iugement du\ngrand iour:comme Sodomah & Amorah;& les citez qui\nestoient enuiron icelles ; lesquelles en pareille maniere\nque icelles ayans faict fornication;& suiuy autre chair;\nont este proposees pour exemple;souffrans la peine du\nfeu eternel. Semblablement certes iceulx deceuz par\nsonges;maculent leur chair;& mesprisent la seigneurie;\n& blasment gens dauctorite.\nOr quand Michel principal Ange Estriuoit dispu꞊\ntant auec le diable touchant le corps de Moseh:il nosa\nuser de iugement de malediction;ains il dist:Le Seigneur\nte redargue. Mais iceulx certes mesdisent de quelcon꞊\nques choses quilz ignorent : & quelconques choses que\nnaturellement ilz congnoissent comme bestes brutes;\nilz se corrompent en icelles. Malheur a iceulx : car ilz\nsont entrez en la voye de Kain;& se sont abandonnez en\nleurreur du loyer de Balaam: et en la* contradiction de\nKoreh sont peris.\nCeulx icy sont macules en voz* dilections; bancque꞊\ntans ensemble ; sans crainte; paissans eulx mesmes;\nmuees sans eaue lesquelles sont portees ca & la; par les\nventz: languissans arbres dautumne sans fruict;deux\nfoys mortz & desracinez: vndes impetueuses de la mer;\niettans hors comme escumes leurs confusions:estoilles\nerrantes par lair: ausquelz lobscurite des tenebres est re꞊\nserue eternellement.\nEt Henoh le septiesme apres Adam a par auant pro꞊\nphetize diceulx;disant:Voicy;le Seigneur est venu en꞊\ntre ses Sainctz qui sont par millions;faire iugement\ncontre tous:& reprendre tous les meschans dentre eulx;\nde toutes leurs oeuures sans preudhommie;lesquelles\nont faictes infidelement : & de toutes les choses dures;\nlesquelles les pecheurs infideles ont parle contre luy.\nIceulx sont murmurateurs; pleins de querelles;che\nminans selon leurs desies : & leur bouche parle choses\norgueilleuses;ayans en admiration les personnes a cau꞊\nse du proffit.\nMais vous bien aymez ayez souuenance des parol꞊\nles;lesquelles ont par auant este dictes par les apostres\nde nostre Seigneur Iesus Christ;qui vous disoyent.\nQue aux derniers temps seroient mocqueurs;qui che꞊\nmineroient selon leurs meschans desies. Iceulx sont\n2\nqui se separent;sensuelz;et nayans point lesperit.\n2\nMais vous treschers;edifiez vous vous mesmes\nsur nostre tressaincte foy; faisans prieres par le sainct es꞊\nperit.Gardez vous vous mesmes en delection de Dieu;\nattendans la misericorde de nostre Seigur Iesus Christ;\nen la vie eternelle:& ayez misericorde de ceulx cy * en les *\niugeant. Mais sauuez ceulx la par crainte;les rauis꞊\nsans du feu:& ayans en hayne la * robbe qui est souillee\npar la char.\nOr a ceulx qui est puissant de garder iceulx sans for꞊\nfaict;& mettre deuant sa gloire irreprehensble; en liesse;\nDieu seul sage; nostre sauueur; soit gloire et magnifi꞊\ncence;empire et puissance; maintenant; et en tous les\nsiecles. Amen.\n¶fin de lepistre Sainct Iude Apostre\nnn La reuuelation",
  );
});

/* escapeRegExpSpecialCharacters */
Deno.test("modernize-transcript/replaceAncientCharacters: Check RegExp Characters", () => {
  assertEquals(
    escapeRegExpSpecialCharacters(ANCIENT_CHARACTERS),
    [
      "ſ",
      "ẽ",
      "q̃",
      "õ",
      "ã",
      "ĩ",
      "p̃",
      "ñ",
      "q́",
      "ꝰ",
      "ʳ",
      "ↄ",
      "ꝑ",
      "ꝓ",
      "ꝯ",
      "/",
    ],
  );

  assertEquals(
    escapeRegExpSpecialCharacters(
      {
        "[": "[",
        "]": "]",
        "\\": "\\",
        "^": "^",
        "$": "$",
        ".": ".",
        "|": "|",
        "?": "?",
        "*": "*",
        "+": "+",
        "(": "(",
        ")": ")",
      },
    ),
    [
      "\\[",
      "\\]",
      "\\\\",
      "\\^",
      "\\$",
      "\\.",
      "\\|",
      "\\?",
      "\\*",
      "\\+",
      "\\(",
      "\\)",
    ],
  );
});
