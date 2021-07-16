/** Error **/
export const ALLOWED_FILENAME_CHARACTERS = /[^A-Za-z0-9\-_\.\/]/;
export const REGEXP_SPECIAL_CHARACTERS = [
  "[",
  "]",
  "\\",
  "^",
  "$",
  ".",
  "|",
  "?",
  "*",
  "+",
  "(",
  ")",
];

/** Configuration **/
export const TEST_FILE_BASE_PATH = "scripts/modernize-transcript";

/** Custom **/
export const ANCIENT_CHARACTERS = {
  ſ: "s",
  ʃ: "s",
  ẽ: "en",
  ẽ: "en",
  q̃: "que",
  õ: "on",
  õ: "on",
  ã: "an",
  ã: "an",
  ĩ: "in",
  ĩ: "in",
  p̃: "pre",
  ñ: "neu",
  ũ: "un",
  q́: "qui",
  ꝰ: "us",
  ʳ: "ur",
  ↄ: "con",
  ꝑ: "par",
  ꝓ: "pro",
  ꝯ: "con",
  "/": ";",
};

/* Dictionaries */
export const MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION = {
  // when "õ" should become "om"
  acconplies: "accomplies",
  acconplissement: "accomplissement",
  acconply: "accomply",
  aconpaigne: "acompaigne",
  conbat: "combat",
  conbatre: "combatre",
  conbatu: "combatu",
  conbien: "combien",
  conbourgeoys: "combourgeoys",
  cone: "come",
  conmande: "commande",
  conmandemens: "commandemens",
  conmandement: "commandement",
  conme: "comme",
  conmence: "commence",
  conmencea: "commencea",
  conmencement: "commencement",
  conmencer: "commencer",
  conprendre: "comprendre",
  conprises: "comprises",
  consonmation: "consommation",
  corronpre: "corrompre",
  donimateur: "domimateur",
  hone: "home",
  hones: "homes",
  honmes: "hommes",
  ignoninie: "ignominie",
  lacconplissement: "laccomplissement",
  lhone: "lhome",
  lhonme: "lhomme",
  monent: "moment",
  nonmez: "nommez",
  pronesse: "promesse",
  pronesses: "promesses",
  pronettoit: "promettoit",
  pronis: "promis",
  pronise: "promise",
  renonee: "renomee",
  ronpue: "rompue",
  sonme: "somme",
  sonmes: "sommes",
  tonbera: "tombera",
  renplit: "remplit",
  assenblent: "assemblent",
  chanp: "champ",
  chanps: "champs",
  conment: "comment",
  lacconpareray: "laccompareray",
  ronpra: "rompra",
};

export const WORDS_TO_MODERNIZE = {
  // i -> j
  Ionah: "Jonah",
  iettent: "jettent",
  ienuoye: "jenuoye",
  iournee: "journee",
  iette: "jette",
  tousioursmais: "tousjoursmais",
  auiourdhuy: "aujourdhuy",
  iourdhuy: "jourdhuy",
  iniustes: "injustes",
  iustes: "justes",
  abiectz: "abjectz",
  adioustee: "adjoustee",
  adiouster: "adjouster",
  assubiectie: "assubjectie",
  assubiectissant: "assubjectissant",
  coniurer: "conjurer",
  deiecte: "dejecte",
  desia: "desja",
  Iacques: "Jacques",
  Iakob: "Jakob",
  iamais: "jamais",
  iauoye: "javoye",
  iay: "jay",
  iayme: "jayme",
  ie: "je",
  Ie: "Je",
  iectez: "jectez",
  Iehan: "Jehan",
  Iehosua: "Jehosua",
  Iehudah: "Jehudah",
  Ieremiah: "Jeremiah",
  Ierusalem: "Jerusalem",
  Iesus: "Jesus",
  iettoient: "jettoient",
  ieusnerez: "jeusnerez",
  ieusnent: "jeusnent",
  ieusne: "jeusne",
  ieusner: "jeusner",
  iniures: "injures",
  iniustice: "injustice",
  Iordan: "Jordan",
  Ioseph: "Joseph",
  Iosiah: "Josiah",
  ioue: "joue",
  iour: "jour",
  ioyeulx: "joyeulx",
  iecter: "jecter",
  ioyeuse: "joyeuse",
  Iude: "Jude",
  Iudas: "Judas",
  iettez: "jettez",
  iudicial: "judicial",
  iugeant: "jugeant",
  iugement: "jugement",
  Iuifz: "Juifz",
  iuremens: "juremens",
  iureras: "jureras",
  iusque: "jusque",
  iusques: "Jusques",
  iuste: "juste",
  iustement: "justement",
  iustice: "justice",
  iustification: "justification",
  iustifiee: "justifiee",
  iustifiez: "justifiez",
  iuuenceaulx: "juvenceaulx",
  maieste: "majeste",
  pariureras: "parjureras",
  reiecte: "rejecte",
  resiouye: "resjouye",
  tousiours: "tousjours",
  adioustees: "adjoustees",
  iugez: "jugez",
  iecta: "jecta",
  iecte: "jecte",
  ieusnons: "jeusnons",
  iours: "jours",
  ieusneront: "jeusneront",
  ioug: "joug",
  // u -> v
  Niniueh: "Niniveh",
  paruenu: "parvenu",
  diuise: "divise",
  diuisee: "divisee",
  nauez: "navez",
  Nauez: "Navez",
  trauaillez: "travaillez",
  rauissent: "ravissent",
  leuant: "levant",
  viura: "vivra",
  suyuit: "suyvit",
  sesmerueillerent: "sesmerveillerent",
  Lieue: "Lieve",
  sesmerueilloient: "sesmerveilloient",
  leua: "leva",
  fieure: "fievre",
  fieures: "fievres",
  receoiuent: "receoivent",
  abbreuue: "abbreuve",
  abbreuuer: "abbreuver",
  abbreuuez: "abbreuvez",
  aduenu: "advenu",
  aduersaire: "adversaire",
  aduerſe: "adverſe",
  aduertissoit: "advertissoit",
  aduocat: "advocat",
  aduouer: "advouer",
  alenuiron: "alenviron",
  apaouris: "apaovris",
  apaoury: "apaovry",
  apperceuoir: "appercevoir",
  approuue: "approuve",
  approuuez: "approuvez",
  ascauoir: "ascavoir",
  asseruy: "asservy",
  auec: "avec",
  aueugle: "aveugle",
  aueugles: "aveugles",
  auez: "avez",
  auoient: "avoient",
  auoir: "avoir",
  auoit: "avoit",
  auons: "avons",
  beuuans: "beuvans",
  beuuant: "beuvant",
  beuueries: "beuveries",
  beuueur: "beuveur",
  beuuez: "beuvez",
  beuuiez: "beuviez",
  beuuoient: "beuvoient",
  beuuons: "beuvons",
  beuuoyent: "beuvoyent",
  beuura: "beuvra",
  beuurage: "beuvrage",
  beuurages: "beuvrages",
  beuuray: "beuvray",
  beuurez: "beuvrez",
  sesleueront: "sesleveront",
  leueront: "leveront",
  cheueulx: "cheveulx",
  beuurons: "beuvrons",
  beuuroyent: "beuvroyent",
  breuuage: "breuvage",
  cauent: "cavent",
  cheuaulx: "chevaulx",
  cheueu: "cheveu",
  conceuras: "concevras",
  conseruez: "conservez",
  conuaincuz: "convaincuz",
  conuenance: "convenance",
  conuerse: "converse",
  conuersions: "conversions",
  conuiennent: "conviennent",
  conuient: "convient",
  conuoiter: "convoiter",
  couuee: "couvee",
  couuers: "couvers",
  couuert: "couvert",
  couuerte: "couverte",
  couuertement: "couvertement",
  couuerture: "couverture",
  couuertures: "couvertures",
  couuertz: "couvertz",
  couure: "couvre",
  couurez: "couvrez",
  couurira: "couvrira",
  daduertissemens: "dadvertissemens",
  darriuer: "darriver",
  riue: "rive",
  pouoit: "povoit",
  suyuray: "suyvray",
  dauantage: "davantage",
  dauec: "davec",
  Dauid: "David",
  deliurance: "delivrance",
  liura: "livra",
  enuoya: "envoya",
  liureront: "livreront",
  deliure: "delivre",
  deliurer: "delivrer",
  desaduouer: "desadvouer",
  descouuerte: "descouverte",
  descouuertes: "descouvertes",
  descouurirent: "descouvrirent",
  desuestu: "desvestu",
  deuant: "devant",
  glaiue: "glaive",
  deuoient: "devoient",
  deuoit: "devoit",
  deuons: "devons",
  diuers: "divers",
  diuerses: "diverses",
  diuinement: "divinement",
  diuision: "division",
  diuulgoit: "divulgoit",
  diuulgue: "divulgue",
  diuulguee: "divulguee",
  diuulguees: "divulguees",
  diuulguer: "divulguer",
  diuulguerent: "divulguerent",
  doeuure: "doeuvre",
  doibuent: "doibvent",
  doiuent: "doivent",
  douuriers: "douvriers",
  douurir: "douvrir",
  engraue: "engrave",
  ensuyure: "ensuyvre",
  enuers: "envers",
  enuieillira: "envieillira",
  enuiron: "environ",
  enuoye: "envoye",
  enuoyoit: "envoyoit",
  escriuant: "escrivant",
  esleuans: "eslevans",
  esleue: "esleve",
  esleuer: "eslever",
  leuer: "lever",
  esleuez: "eslevez",
  esleuoient: "eslevoient",
  esmouuant: "esmouvant",
  esmouuent: "esmouvent",
  esmouuoient: "esmouvoient",
  espouuantement: "espouvantement",
  espreuue: "espreuve",
  esprouuans: "esprouvans",
  esprouue: "esprouve",
  esprouuer: "esprouver",
  esprouuera: "esprouvera",
  esprouuerent: "esprouverent",
  esprouuez: "esprouvez",
  esprouuiez: "esprouviez",
  Euangile: "Evangile",
  euesque: "evesque",
  euesques: "evesques",
  fleuue: "fleuve",
  fleuues: "fleuves",
  ouuers: "ouvers",
  gouuernail: "gouvernail",
  gouuernant: "gouvernant",
  gouuernaulx: "gouvernaulx",
  gouuerne: "gouverne",
  gouuernemens: "gouvernemens",
  gouuernement: "gouvernement",
  gouuernent: "gouvernent",
  gouuerner: "gouverner",
  gouuernera: "gouvernera",
  gouuerneur: "gouverneur",
  gouuerneurs: "gouverneurs",
  iapprouue: "iapprouve",
  inuiolable: "inviolable",
  irreuocable: "irrevocable",
  laduersaire: "ladversaire",
  laueugle: "laveugle",
  laue: "lave",
  lauoir: "lavoir",
  lauoit: "lavoit",
  lesoeuures: "lesoeuvres",
  lesprouuant: "lesprouvant",
  Leuangile: "Levangile",
  liure: "livre",
  loeuure: "loeuvre",
  louuerture: "louverture",
  louurier: "louvrier",
  luniuersel: "luniversel",
  mauuais: "mauvais",
  mauuaise: "mauvaise",
  mauuaises: "mauvaises",
  mauuaisessuspicions: "mauvaises suspicions",
  mauuaistie: "mauvaistie",
  mauuaisz: "mauvaisz",
  merueilles: "merveilles",
  merueilleuses: "merveilleuses",
  mouuans: "mouvans",
  mouuant: "mouvant",
  mouuemens: "mouvemens",
  mouuement: "mouvement",
  mouuementz: "mouvementz",
  mouuoir: "mouvoir",
  mouuons: "mouvons",
  naduienne: "nadvienne",
  aduienne: "advienne",
  pouez: "povez",
  nauoient: "navoient",
  nauoit: "navoit",
  Nouueau: "Nouveau",
  nouueau: "nouveau",
  nouueaulx: "nouveaulx",
  nouueaux: "nouveaux",
  nouuel: "nouvel",
  nouuelle: "nouvelle",
  nouuelles: "nouvelles",
  nouuellete: "nouvellete",
  nouuellette: "nouvellette",
  oeuure: "oeuvre",
  oeuurent: "oeuvrent",
  oeuures: "oeuvres",
  ouuert: "ouvert",
  ouuerte: "ouverte",
  ouuertes: "ouvertes",
  ouuertz: "ouvertz",
  ouurans: "ouvrans",
  ouurant: "ouvrant",
  ouurante: "ouvrante",
  ouure: "ouvre",
  ouurent: "ouvrent",
  ouurer: "ouvrer",
  ouurez: "ouvrez",
  ouurier: "ouvrier",
  ouuriers: "ouvriers",
  ouurir: "ouvrir",
  ouurira: "ouvrira",
  ouuriray: "ouvriray",
  ouurit: "ouvrit",
  ouuroient: "ouvroient",
  ouuroit: "ouvroit",
  paoure: "paovre",
  paoures: "paovres",
  paourete: "paovrete",
  parauant: "paravant",
  parauenture: "paraventure",
  paruenir: "parvenir",
  paruint: "parvint",
  paruis: "parvis",
  pascouurir: "pascouvrir",
  peruers: "pervers",
  peruerse: "perverse",
  peuuent: "peuvent",
  peuuet: "peuvet",
  plustrouue: "plustrouve",
  poeuuent: "poeuvent",
  poursuyure: "poursuyvre",
  pouuions: "pouvions",
  pouuoient: "pouvoient",
  pouuoir: "pouvoir",
  enseuelir: "ensevelir",
  nauire: "navire",
  pouuoit: "pouvoit",
  pouuons: "pouvons",
  preuarications: "prevarications",
  priuations: "privations",
  Priuations: "Privations",
  priuees: "privees",
  prouenoit: "provenoit",
  prouuer: "prouver",
  rauir: "ravir",
  receuoir: "recevoir",
  leuerent: "leverent",
  receura: "recevra",
  receuroient: "recevroient",
  receuront: "recevront",
  recouurans: "recouvrans",
  recouurer: "recouvrer",
  recouurerent: "recouvrerent",
  releuer: "relever",
  renouuelle: "renouvelle",
  renouuellee: "renouvellee",
  renouuellez: "renouvellez",
  renuerse: "renverse",
  reprouue: "reprouve",
  reprouuee: "reprouvee",
  reprouueray: "reprouveray",
  scauiez: "scaviez",
  reprouuez: "reprouvez",
  retrouue: "retrouve",
  reuelee: "revelee",
  reueler: "reveler",
  reuele: "revele",
  saueur: "saveur",
  saulueur: "saulveur",
  sauuage: "sauvage",
  sauuassent: "sauvassent",
  sauue: "sauve",
  paracheue: "paracheve",
  sauuee: "sauvee",
  sauuees: "sauvees",
  sauuer: "sauver",
  sauuera: "sauvera",
  sauueras: "sauveras",
  sauuerent: "sauverent",
  sauueur: "sauveur",
  Sauueur: "Sauveur",
  sauuez: "sauvez",
  scauoir: "scavoir",
  scauoit: "scavoit",
  scauons: "scavons",
  seruent: "servent",
  seruir: "servir",
  seruit: "servit",
  seruiteur: "serviteur",
  seruiteurs: "serviteurs",
  sesleua: "sesleva",
  sesleuoient: "seslevoient",
  sesleuoyent: "seslevoyent",
  souuenan: "souvenan",
  souuenance: "souvenance",
  souuent: "souvent",
  souuenteffois: "souventeffois",
  souuenteffoys: "souventeffoys",
  souuentesfois: "souventesfois",
  souuentesfoys: "souventesfoys",
  souuerain: "souverain",
  souuerainement: "souverainement",
  souuerains: "souverains",
  souuienne: "souvienne",
  souuient: "souvient",
  souuint: "souvint",
  souurit: "souvrit",
  suyuant: "suyvant",
  suyui: "suyvi",
  suyuions: "suyvions",
  suyuirent: "suyvirent",
  suyure: "suyvre",
  trauail: "travail",
  trouua: "trouva",
  trouuans: "trouvans",
  trouuant: "trouvant",
  trouuassent: "trouvassent",
  trouuast: "trouvast",
  trouuay: "trouvay",
  trouue: "trouve",
  trouuee: "trouvee",
  trouuees: "trouvees",
  trouuent: "trouvent",
  trouuer: "trouver",
  trouuera: "trouvera",
  trouueras: "trouveras",
  trouuerent: "trouverent",
  trouuerez: "trouverez",
  trouueroient: "trouveroient",
  trouueroit: "trouveroit",
  trouuerons: "trouverons",
  trouueront: "trouveront",
  trouuez: "trouvez",
  trouuions: "trouvions",
  trouuoient: "trouvoient",
  trouvoit: "pouvoir",
  viuant: "vivant",
  viue: "vive",
  viuons: "vivons",
  rauissans: "ravissans",
  aduint: "advint",
  acheue: "acheve",
  griefuement: "griefvement",
  sesmerueilla: "sesmerveilla",
  liurera: "livrera",
  releuera: "relevera",
  leuera: "levera",
  // v -> u
  vmbres: "umbres",
  vne: "une",
  vng: "ung",
  vnie: "unie",
  vniuersel: "universel",
  Vrie: "Urie",
  vtile: "utile",
  vndes: "undes",
};

export const MODERNIZE_CHAPTER_NAMES = {
  "Chapitre premier.": "Chapitre I",
  "Chapitre. i.": "Chapitre I",
  "Chapitre. j.": "Chapitre I",
  "Chapitre. ij.": "Chapitre II",
  "Chapitre. iij.": "Chapitre III",
  "Chapitre. iv.": "Chapitre IV",
  "Chapitre. v.": "Chapitre V",
  "Chapitre. vi.": "Chapitre VI",
  "Chapitre. vj.": "Chapitre VI",
  "Chapitre. vii.": "Chapitre VII",
  "Chapitre. vij.": "Chapitre VII",
  "Chapitre. viii.": "Chapitre VIII",
  "Chapitre. viij.": "Chapitre VIII",
  "Chapitre. ix.": "Chapitre IX",
  "Chapitre. x.": "Chapitre X",
  "Chapitre. xi.": "Chapitre XI",
  "Chapitre. xj.": "Chapitre XI",
  "Chapitre. xii.": "Chapitre XII",
  "Chapitre. xij.": "Chapitre XII",
  "Chapitre. xiii.": "Chapitre XIII",
  "Chapitre. xiij.": "Chapitre XIII",
  "Chapitre. xiv.": "Chapitre XIV",
  "Chapitre. xv.": "Chapitre XV",
  "Chapitre. xvi.": "Chapitre XVI",
  "Chapitre. xvj.": "Chapitre XVI",
  "Chapitre. xvii.": "Chapitre XVII",
  "Chapitre. xvij.": "Chapitre XVII",
  "Chapitre. xviii.": "Chapitre XVIII",
  "Chapitre. xviij.": "Chapitre XVIII",
  "Chapitre. xix.": "Chapitre XIX",
  "Chapitre. xx.": "Chapitre XX",
};

export const ADD_CHAPTER_FIRST_LETTER = {
  "E livre de la generation": "Le livre de la generation",
  "T quand Jesus fut nay en Beth-lehem cite de":
    "Et quand Jesus fut nay en Beth-lehem cite de",
  "R en ces jours la vient Jehan baptiste":
    "Or en ces jours la vient Jehan baptiste",
  "Lors Jesus fut mene par lesperit au desert":
    "Alors Jesus fut mene par lesperit au desert",
  "T quand Jesus veit les tourbes ; il monta":
    "Et quand Jesus veit les tourbes ; il monta",
  "Ardez vous de faire aulmosne devant les":
    "Gardez vous de faire aulmosne devant les",
  "E jugez pas/affin que vous ne ſoyez iugez.":
    "E iugez pas/affin que vous ne ſoyez iugez.",
  "T quand il fut descendu de la montaigne ;":
    "Et quand il fut descendu de la montaigne ;",
  "T entrant en la navire passa oultre ; et vint":
    "Et entrant en la navire passa oultre ; et vint",
  "T ayant appelle ses douze disciples leur":
    "Et ayant appelle ses douze disciples leur",
  "T advint que quand Jesus eut mis fin de":
    "Et advint que quand Jesus eut mis fin de",
  "N iceluy temps Jesus alloit par les bledz":
    "En iceluy temps Jesus alloit par les bledz",
  "N cestuy jour ; Jesus estant party de la":
    "En cestuy jour ; Jesus estant party de la",
};

export const MISSPELLED_WORDS_DUE_TO_AI_OR_HUMAN_MISTAKE = {
  "au tres": "autres",
  "che mine": "chemine",
  "Amen dez": "Amendez",
  "appa roisse": "apparoisse",
  "appel la": "appella",
  "Arche laus": "Archelaus",
  "assen blent": "assemblent",
  "au cunement": "aucunement",
  "Beth : lehem": "Beth-lehem",
  "bou che": "bouche",
  "cau se": "cause",
  "Certai nement": "Certainement",
  "cha meaulx": "chameaulx",
  "che minoient": "cheminoient",
  "Che rubins": "Cherubins",
  "che ueu": "cheveu",
  "cho ses": "choses",
  "cho se": "chose",
  "com mande": "commande",
  "com ment": "comment",
  "con me": "comme",
  "con uoiter": "convoiter",
  "cou uertz": "couvertz",
  "dauanta ge": "davantage",
  "de sert": "desert",
  "de tenus": "detenus",
  "demo niacques": "demoniacques",
  "en fantera": "enfantera",
  "engendr a ": "engendra ",
  "Fai ctes": "Faictes",
  "fai ctes": "faictes",
  "foul lent": "foullent",
  "fre re": "frere",
  "Ga lille": "Galille",
  "genera tions": "generations",
  "hom me": "homme",
  "hom mes": "hommes",
  "lado rent": "ladorent",
  "len fantelet": "lenfantelet",
  "les perit": "lesprit",
  "lhom me": "lhomme",
  "lumie re": "lumiere",
  "mainte nant": "maintenant",
  "mon de": "monde",
  "nettoye ra": "nettoyera",
  "oeu uvres": "oeuuvres",
  "ou urant": "ouvrant",
  "oul trage": "oultrage",
  "oul tre": "oultre",
  "pe tite": "petite",
  "quicon que": "quiconque",
  "respon dit": "respondit",
  "rouil lure": "rouillure",
  "roy aume": "royaume",
  "royau me": "royaume",
  "sa laire": "salaire",
  "Saddu ciens": "Sadduciens",
  "ſde ": "de",
  "Sei gneur": "Seigneur",
  "suffi sant": "suffisant",
  "sus fit": "susfit",
  "Sy rie": "Syrie",
  "tan dis": "tandis",
  "ter re": "terre",
  "transmi gration": "transmigration",
  "trou uerez": "trouverez",
  Aaim: "Akim",
  Auim: "Akim",
  ccar: "(car",
  chascu: "chascun",
  devpentance: "de repentance",
  doncccon: "donc (con",
  Dr: "Or",
  Drient: "Orient",
  Elianim: "Eliakim",
  Eliapim: "Eliakim",
  Etvoicy: "Et voicy",
  firmamet: "firmament",
  gneuations: "generations",
  hezeniah: "Hezekiah",
  Hezeuiah: "Hezekiah",
  Iahak: "Izahak",
  Iceluyvous: "Iceluy vous",
  Iesusʳ: "Jesus",
  ihau: "il) au",
  Iosiaha: "Iosiah",
  lesn: "les",
  lorsr: "lors",
  luysevostre: "luyse vostre",
  mauuaisz: "mauvais)",
  nenhypocrites: "hypocrites",
  pleuue: "fleuve",
  pluspetite: "plus petite",
  precedoin: "precedoit",
  Prices: "Princes",
  pSages: "Sages",
  psence: "presence",
  Qeil: "Oeil",
  QPr: "Or",
  quid: "qui",
  secretementz: "secretement",
  soyept: "soyent",
  tl: "il",
  toun: "ton",
  tresplus: "tres plus",
  troystesme: "troysiesme",
  Val: "Va",
  Vbed: "Obed",
  vostreus: "vostre",
  Zadoi: "Zadok",
  Zados: "Zadok",
  Zadoſ: "Zadok",
  zorobabel: "Zorobabel",
  Zzorobabel: "Zorobabel",
  "pro chain": "prochain",
  ievous: "je vous",
  "per re": "perre",
  "dex tre": "dextre",
  "hypo crites": "hypocrites",
  "vo lunte": "volunte",
  sivous: "si vous",
  "se cret": "secret",
  "thre sor": "thresor",
  "sim ple": "simple",
  maissi: "mais si",
  "mau uais": "mauvais",
  "mau uaise": "mauvaise",
  "hay ra": "hayra",
  "tien dra": "tiendra",
  "ad iouster": "adjouster",
  Cosiderez: "Considerez",
  ferail: "fera il",
  "lende main": "lendemain",
  "suf fit": "suffit",
  "se rez": "serez",
  "mesu rez": "mesurez",
  "re garde": "regarde",
  "Vu ;": "Ou ;",
  "premie rement": "premierement",
  adoc: "adonc",
  "ti rer": "tirer",
  "deman de": "demande",
  Qu: "Ou",
  "vien nent": "viennent",
  nouspoint: "nous point",
  "con fesseray": "confesseray",
  "fleu ues": "fleuves",
  "pa rolles": "parolles",
  "pa rolle": "parolle",
  "souf fle": "souffle",
  "person ne": "personne",
  "Cen tenier": "Centenier",
  "gue riray": "gueriray",
  "seulle ment": "seullement",
  cesluy: "cestuy",
  Iatob: "Jakob",
  "Ie sus": "Jesus",
  "plu sieurs": "plusieurs",
  "accom ply": "accomply",
  "com manda": "commanda",
  "reg nars": "regnars",
  "en seuelir": "ensevelir",
  "suy uirent": "suyvirent",
  "les ueillerent": "lesveillerent",
  "pe rissons": "perissons",
  "icel le": "icelle",
  "E tu": "Es tu",
  Qr: "Or",
  "pais soient": "paissoient",
  "racompte rent": "racompte rent",
  vassa: "passa",
  "confian ce": "confiance",
  aucans: "aucuns",
  "blas pheme": "blaspheme",
  "clors dist": "(lors dist",
  taole: "table",
  "mai stre": "maistre",
  Rermiers: "Fermiers",
  "be soing": "besoing",
  "pen dant": "pendant",
  "vien dront": "viendront",
  "af feite": "affeite",
  "rem plaige": "remplaige",
  "ba rilz": "barilz",
  "main tenant": "maintenant",
  "dou ze": "douze",
  "derrie re": "derriere",
  "fem me": "femme",
  "vin drent": "vindrent",
  Vuy: "Ouy",
  furentouuers: "furent ouvers",
  "de fendit": "defendit",
  "presen terent": "presenterent",
  "dia ble": "diable",
  "ses merueillerent": "sesmerveillerent",
  "bon nes": "bonnes",
  "regar da": "regarda",
  "mois son": "moisson",
  maisil: "mais il",
  "don na": "donna",
  "don ne": "donne",
  Er: "Or",
  "ap pelle": "appelle",
  "Zebe dee": "Zebedee",
  "Bar : tholomee": "Bar-tholomee",
  "Al phee": "Alphee",
  "Cana neen": "Cananeen",
  "di sant": "disant",
  "enal lant": "en allant",
  "ap proche": "approche",
  quelaue: "quelque",
  "entre rez": "entrerez",
  "qui conque": "quiconque",
  "de partans": "departans",
  "Amor riens": "Amorriens",
  "assem blee": "assemblee",
  "en fans": "en fans",
  moirir: "mourir",
  "sei gneur": "seigneur",
  "Beel : ze bub": "Beel-zebub",
  "Beel-ze bub": "Beel-zebub",
  viennu: "vienne",
  "ce luy": "celuy",
  "pe re": "pere",
  "nom brez": "nombrez",
  fa: "sa",
  neprent: "ne prent",
  "trou uera": "trouuera",
  "pro phete": "prophete",
  "par tit": "partit",
  "an noncez": "annoncez",
  "ressusci tez": "ressuscitez",
  veoirr: "veoir ?",
  "es crit": "escrit",
  "pre parera": "preparera",
  "rece uoir": "recevoir",
  "gene ration": "generation",
  "beu uant": "beuvant",
  Iermiers: "Fermiers",
  perheurs: "pecheurs",
  "esquel les": "esquelles",
  "Beth : saida": "Beth-saida",
  "So domites": "Sodomites",
  QVpere: "O pere",
  "reue lees": "revelees",
  "en uers": "envers",
  "re ueler": "reveler",
  "ap prenez": "apprenez",
  "man ger": "manger",
  "sacrifica teurs": "sacrificateurs",
  "miseri corde": "misericorde",
  "fos se": "fosse",
  "ac comply": "accomply",
  "espe rit": "esperit",
  "noyse ra": "noysera",
  "Mais : les": "Mais les",
  "Beel : zebub": "Beel-zebub",
  "diui se": "diuise",
  "Beel. zebub": "Beel-zebub",
  "iu ges": "juges",
  "vais seaux": "vaisseaux",
  "mai son": "maison",
  "rassem ble": "rassemble",
  "pe che": "peche",
  "blasphe me": "blaspheme",
  "phari siens": "pharisiens",
  "condem neront": "condemneront",
  "Io nah": "Jonah",
  "condem nera": "condemnera",
  "sa pience": "sapience",
  "par ler": "parler",
  "fre res": "freres",
  "tour bes": "tourbes",
  "cheu rent": "cheurent",
  "pier reux": "pierreux",
};

/* Texts */
export const THIRD_EPISTLE_OF_JOHN = `¶La tierce epiſtre de ſainct
Iehan Theologien.
Chapitre ſeul.
Ancien a Baye bien ayme
lequel iayme en verite.
Treſcher ie deſire quẽ toutes choſes
tu proſpere/ & que ſois en ſante/ comme
ton ame eſt en ꝓſperite. Iay eſt fort
eſiouy quãd les freres ſont venuz/& ont rendu teſmoin
gnage a ta verite comme tu chemine en verite. Ie nay
point ioye plus grãde ques ces choſes icy/que douyr que
mes enfans cheminent en verite.
Treſcher tu fais fedelemẽt ce que tu fais enuers les
freres/& enuers les eſtrãgees:leſq̃lz ont rẽdu teſmoĩgna
ge a ta charite en la preſence de legliſe. Leſquelz ſi tu
les conduictz dignement ſelon Dieu/tu feras bien.
Car ilz ſe ſont partis pour ſon nom/& ne prennent rien
des Gentilz. Nous donc deuons receuoir ceulx qui
ſont telz:affin q̃ enſemble ſoyons operateurs de la verite.
Iay eſcrit a legliſe : mais Diotrephes qui ayme a
obtenir le premier lieu entre eulx/ne noꝰ receoit point.
Pour ceſte cauſe/ſi ie viens/ie manifeſteray les oeu꞊
ures quil faict / caquetant par parolles malicieuſes
contre nous . Et neſtant point content de ces choſes:
non ſeullement ne receoit point les freres:mais empeſ꞊
che ceulx qui les veullent receuoir/& les deiette de legliſe.
Bien ayme/nenſuys point le mal:mais le bien.
Qui faict bien/eſt de Dieu:mais qui faict mal/ne voit
point Dieu. Le teſmoignage eſt rendu de tous
a Demetrius:& par la verite meſme.Mais auſſi nous
en donnons teſmoingnage/ & vous auez congneu que
noſtre teſmoingnage eſt veritable.
Iauoye pluſieʳs choſes a eſcrire/mais ie ne te veulx
point eſcrire par encre & par plume. Touteſfois iay eſpe
rance de te veoir de brief/& parlerons bouche a bouche.
Paix ſoit a toy. Les amys te ſaluent. Salue les
amys par nom.
¶fin de la tierce epiſtre ſainct Iehan.
¶Epiſtre de ſainct Iude Apoſtre.
Chapitre ſeul.
Ude Seruiteur de Ieſus
Chriſt/& frere de Iacq̃s/a ceulx q́ ſont
ſanctifiez en Dieu le pere/& conſeruez &
appellez en Ieſus Chriſt. Miſericor꞊

de/& paix/& charite voꝰ ſoit multipliee.
Treſchers/*il ma eſte neceſſaire vous eſcrire/faitſãt
toute diligence pour vous eſcrire de voſtre commun ſa꞊
lut: priant que bataillez fort pour la foy/laquelle a eſte
vne foys baillee aux Sainctz. Car aucuns hommes
ſans preudhõmie/ſont couuertemẽt entrez/leſquelz par
auant eſtoiẽt preſcritz a ceſte dãnation: cõuertiſſans la
grace de noſtre Dieu en infamete/ & denyans Dieu le
ſeul dominateur & noſtre Seigneur Ieſus Chriſt.
Mais ie vous vueil admonneſter puis que ſcauez
vne fois ceſte choſe:que le Seigneur ayãt ſauue le peu꞊


ple degypte/a derechef deſtruct ceulx qui ne creurent
point. Et que les Anges qui ne garderent point leur
pricipaulte/mais delaiſſerent leur domicile il les a re꞊
ſervez ſoubz obſcurite en liens eternelz au iugement du
grand iour:comme Sodomah & Amorah/& les citez qui
eſtoient enuiron icelles / leſquelles en pareille maniere
que icelles ayans faict fornication/& ſuiuy autre chair/
ont eſte propoſees pour exemple/ſouffrans la peine du
feu eternel. Semblablement certes iceulx deceuz par
ſonges/maculent leur chair/& meſpriſent la ſeigneurie/
& blaſment gens dauctorite.
Or quand Michel principal Ange Eſtriuoit diſpu꞊
tant auec le diable touchant le corps de Moſeh:il noſa
uſer de iugemẽt de malediction/ains il diſt:Le Seigñr
te redargue. Mais iceulx certes meſdiſent de q̃lcon꞊
ques choſes quilz ignorent : & quelconques choſes que
naturellement ilz congnoiſſent comme beſtes brutes/
ilz ſe corrompent en icelles. Malheur a iceulx : car ilz
ſont entrez en la voye de Kain/& ſe ſont abandonnez en
leurreur du loyer de Balaam: et en la* contradiction de
Koreh ſont peris.
Ceulx icy ſõt macules en voz* dilectiõs/ bancque꞊
tans enſemble / ſans crainte/ paiſſans eulx meſmes/
muees ſans eaue leſquelles ſont portees ca & la/ par les
ventz: languiſſans arbres dautumne ſans fruict/deux
foys mortz & deſracinez: vndes impetueuſes de la mer/
iettans hors comme eſcumes leurs confuſiõs:eſtoilles
errantes par lair: auſquelz lobſcurite des tenebres eſt re꞊
ſerue eternellement.
Et Henoh le ſeptieſme apres Adam a par auãt pro꞊
phetize diceulx/diſant:Voicy/le Seigneur eſt venu en꞊
tre ſes Sainctz qui ſont par millions/faire iugement
contre tous:& reprendre tous les meſchans dentre eulx/
de toutes leurs oeuures ſans preudhommie/leſquelles
ont faictes infidelement : & de toutes les choſes dures/
leſquelles les pecheurs infideles ont parle contre luy.
Iceulx ſont murmurateurs/ pleins de querelles/che
minans ſelon leurs deſies : & leur bouche parle choſes
orgueilleuſes/ayãs en admiration les perſonnes a cau꞊
ſe du proffit.
Mais vous bien aymez ayez ſouuenance des parol꞊
les/leſquelles ont par auant eſte dictes par les apoſtres
de noſtre Seigneur Ieſus Chriſt/qui vous diſoyent.
Que aux derniers temps ſeroiẽt mocqueurs/qui che꞊
mineroient ſelon leurs meſchans deſies. Iceulx ſont
2
qui ſe ſeparent/ſenſuelz/et nayans point leſperit.
2
Mais vous treſchers/edifiez vous vous meſmes
ſur noſtre treſſaincte foy/ faiſans prieres par le ſainct eſ꞊
perit.Gardez vous vous meſmes en delectiõ de Dieu/
attẽdans la miſericorde de noſtre Seigʳ Ieſus Chriſt/
en la vie eternelle:& ayez miſericorde de ceulx cy * en les *
iugeant. Mais ſauuez ceulx la par crainte/les rauiſ꞊
ſans du feu:& ayans en hayne la * robbe qui eſt ſouillee
par la char.
Or a ceulx qui eſt puiſſant de garder iceulx ſans for꞊
faict/& mettre deuant ſa gloire irreprehenſble/ en lieſſe/
Dieu ſeul ſage/ noſtre ſauueur/ ſoit gloire et magnifi꞊
cence/empire et puiſſance/ maintenant/ et en tous les
ſiecles. Amen.
¶fin de lepiſtre Sainct Iude Apoſtre
nn La reuuelatiõ`;
