import { assertEquals } from "testing/asserts.ts";
import { replaceWithRegExp } from "../replace-with-regexp.ts";
import { THIRD_EPISTLE_OF_JOHN } from "../../constants.ts";

/** Error **/
/* missing input */
// TypeScript
/* input not of expected type */
// TypeScript

/** Success **/
Deno.test("scripts/modernize-transcript/replace-with-regexp: Success", () => {
  assertEquals(replaceWithRegExp("", "", ""), "");
  assertEquals(replaceWithRegExp("test", "t", "T"), "TesT");

  /** Modernize punctuation **/
  /* ".": no space before, add space after */
  assertEquals(replaceWithRegExp(".", "\\s*\\.\\s*", ". "), ". ");
  assertEquals(replaceWithRegExp(" . ", "\\s*\\.\\s*", ". "), ". ");
  assertEquals(replaceWithRegExp("  .  ", "\\s*\\.\\s*", ". "), ". ");
  assertEquals(replaceWithRegExp("test  .  ", "\\s*\\.\\s*", ". "), "test. ");
  assertEquals(
    replaceWithRegExp("test  . .  .   . ", "\\s*\\.\\s*", ". "),
    "test. . . . ",
  );
  /* ",": no space before, add space after */
  assertEquals(replaceWithRegExp(",", "\\s*,\\s*", ", "), ", ");
  assertEquals(replaceWithRegExp(" , ", "\\s*,\\s*", ", "), ", ");
  assertEquals(replaceWithRegExp("  ,  ", "\\s*,\\s*", ", "), ", ");
  assertEquals(replaceWithRegExp("test  ,  ", "\\s*,\\s*", ", "), "test, ");
  /* ";": add space before, add space after */
  assertEquals(replaceWithRegExp(";", "\\s*;\\s*", " ; "), " ; ");
  assertEquals(replaceWithRegExp(" ; ", "\\s*;\\s*", " ; "), " ; ");
  assertEquals(replaceWithRegExp("  ;  ", "\\s*;\\s*", " ; "), " ; ");
  assertEquals(replaceWithRegExp("test  ;  ", "\\s*;\\s*", " ; "), "test ; ");
  /* ":": add space before, add space after */
  assertEquals(replaceWithRegExp(":", "\\s*:\\s*", " : "), " : ");
  assertEquals(replaceWithRegExp(" : ", "\\s*:\\s*", " : "), " : ");
  assertEquals(replaceWithRegExp("  :  ", "\\s*:\\s*", " : "), " : ");
  assertEquals(replaceWithRegExp("test  :  ", "\\s*:\\s*", " : "), "test : ");
  assertEquals(
    replaceWithRegExp("test  :test  ", "\\s*:\\s*", " : "),
    "test : test  ",
  );
  /* "(": add space before, no space after */
  assertEquals(replaceWithRegExp("(", "\\s*\\(\\s*", " ("), " (");
  assertEquals(replaceWithRegExp("  (  ", "\\s*\\(\\s*", " ("), " (");
  assertEquals(
    replaceWithRegExp("  ( test) ", "\\s*\\(\\s*", " ("),
    " (test) ",
  );
  /* ")": no space before, add space after */
  assertEquals(replaceWithRegExp(")", "\\s*\\)\\s*", ") "), ") ");
  /* "&": add space before, add space after */
  assertEquals(replaceWithRegExp("&", "\\s*&\\s*", " & "), " & ");
  /* "?": add space before, add space after */
  assertEquals(replaceWithRegExp("?", "\\s*\\?\\s*", " ? "), " ? ");
  /* "!": add space before, add space after */
  assertEquals(replaceWithRegExp("!", "\\s*!\\s*", " ! "), " ! ");
  /* '"': add space before, add space after */
  assertEquals(replaceWithRegExp('"', '\\s*"\\s*', ' " '), ' " ');
  /* '-': no space before, no space after */
  assertEquals(replaceWithRegExp("   -    ", "\\s*-\\s*", "-"), "-");

  /** Remove unused characters **/
  /* Remove superscript letters */
  assertEquals(replaceWithRegExp("ᵃᵇᶜᵈᵉᶠᶢ", "[\\u1d43-\\u1dbb]", ""), "");
  assertEquals(
    replaceWithRegExp("testᵃ test ᵇ test-testᶜᵈᵉᶠᶢ", "[\\u1d43-\\u1dbb]", ""),
    "test test  test-test",
  );
  /* Remove asterixes */
  assertEquals(replaceWithRegExp("*", "\\*", ""), "");
  assertEquals(
    replaceWithRegExp("test* test * test-test*****", "\\*", ""),
    "test test  test-test",
  );
  /* Replace Line Breaks with a space */
  assertEquals(replaceWithRegExp("\n", "\\n", " "), " ");
  assertEquals(
    replaceWithRegExp("test\n test \n test-test\n\n\n\n\n", "\\n", " "),
    "test  test   test-test     ",
  );
  /* Remove "꞊" and all spaces around it */
  assertEquals(replaceWithRegExp("꞊", "\\s*꞊\\s*", ""), "");
  assertEquals(replaceWithRegExp(" ꞊   ", "\\s*꞊\\s*", ""), "");
  assertEquals(replaceWithRegExp("tes ꞊ t", "\\s*꞊\\s*", ""), "test");
  /* Remove all multiple spaces */
  assertEquals(replaceWithRegExp(" ", "\\s+", " "), " ");
  assertEquals(replaceWithRegExp("  ", "\\s+", " "), " ");
  assertEquals(replaceWithRegExp("       ", "\\s+", " "), " ");
  assertEquals(
    replaceWithRegExp("test  test   test test", "\\s+", " "),
    "test test test test",
  );

  /* Remove all punctuation, superscripts, &, *, / and ꞊ */
  assertEquals(
    replaceWithRegExp(
      THIRD_EPISTLE_OF_JOHN,
      "[#-,:;!\?\.&\*\/¶꞊\\u1d43-\\u1dbb]",
      " ",
    ),
    " La tierce epiſtre de ſainct\nIehan Theologien \nChapitre ſeul \nAncien a Baye bien ayme\nlequel iayme en verite \nTreſcher ie deſire quẽ toutes choſes\ntu proſpere    que ſois en ſante  comme\nton ame eſt en ꝓſperite  Iay eſt fort\neſiouy quãd les freres ſont venuz   ont rendu teſmoin\ngnage a ta verite comme tu chemine en verite  Ie nay\npoint ioye plus grãde ques ces choſes icy que douyr que\nmes enfans cheminent en verite \nTreſcher tu fais fedelemẽt ce que tu fais enuers les\nfreres   enuers les eſtrãgees leſq̃lz ont rẽdu teſmoĩgna\nge a ta charite en la preſence de legliſe  Leſquelz ſi tu\nles conduictz dignement ſelon Dieu tu feras bien \nCar ilz ſe ſont partis pour ſon nom   ne prennent rien\ndes Gentilz  Nous donc deuons receuoir ceulx qui\nſont telz affin q̃ enſemble ſoyons operateurs de la verite \nIay eſcrit a legliſe   mais Diotrephes qui ayme a\nobtenir le premier lieu entre eulx ne noꝰ receoit point \nPour ceſte cauſe ſi ie viens ie manifeſteray les oeu \nures quil faict   caquetant par parolles malicieuſes\ncontre nous   Et neſtant point content de ces choſes \nnon ſeullement ne receoit point les freres mais empeſ \nche ceulx qui les veullent receuoir   les deiette de legliſe \nBien ayme nenſuys point le mal mais le bien \nQui faict bien eſt de Dieu mais qui faict mal ne voit\npoint Dieu  Le teſmoignage eſt rendu de tous\na Demetrius   par la verite meſme Mais auſſi nous\nen donnons teſmoingnage    vous auez congneu que\nnoſtre teſmoingnage eſt veritable \nIauoye pluſieʳs choſes a eſcrire mais ie ne te veulx\npoint eſcrire par encre   par plume  Touteſfois iay eſpe\nrance de te veoir de brief   parlerons bouche a bouche \nPaix ſoit a toy  Les amys te ſaluent  Salue les\namys par nom \n fin de la tierce epiſtre ſainct Iehan \n Epiſtre de ſainct Iude Apoſtre \nChapitre ſeul \nUde Seruiteur de Ieſus\nChriſt   frere de Iacq̃s a ceulx q́ ſont\nſanctifiez en Dieu le pere   conſeruez  \nappellez en Ieſus Chriſt  Miſericor \n\nde   paix   charite voꝰ ſoit multipliee \nTreſchers  il ma eſte neceſſaire vous eſcrire faitſãt\ntoute diligence pour vous eſcrire de voſtre commun ſa \nlut  priant que bataillez fort pour la foy laquelle a eſte\nvne foys baillee aux Sainctz  Car aucuns hommes\nſans preudhõmie ſont couuertemẽt entrez leſquelz par\nauant eſtoiẽt preſcritz a ceſte dãnation  cõuertiſſans la\ngrace de noſtre Dieu en infamete    denyans Dieu le\nſeul dominateur   noſtre Seigneur Ieſus Chriſt \nMais ie vous vueil admonneſter puis que ſcauez\nvne fois ceſte choſe que le Seigneur ayãt ſauue le peu \n\n\nple degypte a derechef deſtruct ceulx qui ne creurent\npoint  Et que les Anges qui ne garderent point leur\npricipaulte mais delaiſſerent leur domicile il les a re \nſervez ſoubz obſcurite en liens eternelz au iugement du\ngrand iour comme Sodomah   Amorah   les citez qui\neſtoient enuiron icelles   leſquelles en pareille maniere\nque icelles ayans faict fornication   ſuiuy autre chair \nont eſte propoſees pour exemple ſouffrans la peine du\nfeu eternel  Semblablement certes iceulx deceuz par\nſonges maculent leur chair   meſpriſent la ſeigneurie \n  blaſment gens dauctorite \nOr quand Michel principal Ange Eſtriuoit diſpu \ntant auec le diable touchant le corps de Moſeh il noſa\nuſer de iugemẽt de malediction ains il diſt Le Seigñr\nte redargue  Mais iceulx certes meſdiſent de q̃lcon \nques choſes quilz ignorent     quelconques choſes que\nnaturellement ilz congnoiſſent comme beſtes brutes \nilz ſe corrompent en icelles  Malheur a iceulx   car ilz\nſont entrez en la voye de Kain   ſe ſont abandonnez en\nleurreur du loyer de Balaam  et en la  contradiction de\nKoreh ſont peris \nCeulx icy ſõt macules en voz  dilectiõs  bancque \ntans enſemble   ſans crainte  paiſſans eulx meſmes \nmuees ſans eaue leſquelles ſont portees ca   la  par les\nventz  languiſſans arbres dautumne ſans fruict deux\nfoys mortz   deſracinez  vndes impetueuſes de la mer \niettans hors comme eſcumes leurs confuſiõs eſtoilles\nerrantes par lair  auſquelz lobſcurite des tenebres eſt re \nſerue eternellement \nEt Henoh le ſeptieſme apres Adam a par auãt pro \nphetize diceulx diſant Voicy le Seigneur eſt venu en \ntre ſes Sainctz qui ſont par millions faire iugement\ncontre tous   reprendre tous les meſchans dentre eulx \nde toutes leurs oeuures ſans preudhommie leſquelles\nont faictes infidelement     de toutes les choſes dures \nleſquelles les pecheurs infideles ont parle contre luy \nIceulx ſont murmurateurs  pleins de querelles che\nminans ſelon leurs deſies     leur bouche parle choſes\norgueilleuſes ayãs en admiration les perſonnes a cau \nſe du proffit \nMais vous bien aymez ayez ſouuenance des parol \nles leſquelles ont par auant eſte dictes par les apoſtres\nde noſtre Seigneur Ieſus Chriſt qui vous diſoyent \nQue aux derniers temps ſeroiẽt mocqueurs qui che \nmineroient ſelon leurs meſchans deſies  Iceulx ſont\n2\nqui ſe ſeparent ſenſuelz et nayans point leſperit \n2\nMais vous treſchers edifiez vous vous meſmes\nſur noſtre treſſaincte foy  faiſans prieres par le ſainct eſ \nperit Gardez vous vous meſmes en delectiõ de Dieu \nattẽdans la miſericorde de noſtre Seigʳ Ieſus Chriſt \nen la vie eternelle   ayez miſericorde de ceulx cy   en les  \niugeant  Mais ſauuez ceulx la par crainte les rauiſ \nſans du feu   ayans en hayne la   robbe qui eſt ſouillee\npar la char \nOr a ceulx qui eſt puiſſant de garder iceulx ſans for \nfaict   mettre deuant ſa gloire irreprehenſble  en lieſſe \nDieu ſeul ſage  noſtre ſauueur  ſoit gloire et magnifi \ncence empire et puiſſance  maintenant  et en tous les\nſiecles  Amen \n fin de lepiſtre Sainct Iude Apoſtre\nnn La reuuelatiõ",
  );
});
