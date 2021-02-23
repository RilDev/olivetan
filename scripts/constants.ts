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
  "ſ": "s",
  "ẽ": "en",
  "q̃": "que",
  "õ": "on",
  "ã": "an",
  "ĩ": "in",
  "p̃": "pre",
  "ñ": "neu",
  "ũ": "un",
  "q́": "qui",
  "ꝰ": "us",
  "ʳ": "ur",
  "ↄ": "con",
  "ꝑ": "par",
  "ꝓ": "pro",
  "ꝯ": "con",
  "/": ";",
};

/* Dictionaries */
export const MISSPELLED_WORDS_DUE_TO_CHARACTER_MODERNIZATION = {
  // when "õ" should become "om"
  "acconplies": "accomplies",
  "acconplissement": "accomplissement",
  "acconply": "accomply",
  "aconpaigne": "acompaigne",
  "conbat": "combat",
  "conbatre": "combatre",
  "conbatu": "combatu",
  "conbien": "combien",
  "conbourgeoys": "combourgeoys",
  "cone": "come",
  "conmande": "commande",
  "conmandemens": "commandemens",
  "conmandement": "commandement",
  "conme": "comme",
  "conmence": "commence",
  "conmencea": "commencea",
  "conmencement": "commencement",
  "conmencer": "commencer",
  "conprendre": "comprendre",
  "conprises": "comprises",
  "consonmation": "consommation",
  "corronpre": "corrompre",
  "donimateur": "domimateur",
  "hone": "home",
  "hones": "homes",
  "honmes": "hommes",
  "ignoninie": "ignominie",
  "lacconplissement": "laccomplissement",
  "lhone": "lhome",
  "lhonme": "lhomme",
  "monent": "moment",
  "nonmez": "nommez",
  "pronesse": "promesse",
  "pronesses": "promesses",
  "pronettoit": "promettoit",
  "pronis": "promis",
  "pronise": "promise",
  "renonee": "renomee",
  "ronpue": "rompue",
  "sonme": "somme",
  "sonmes": "sommes",
  "tonbera": "tombera",
};

export const WORDS_TO_MODERNIZE = {
  // i -> j
  "abiectz": "abjectz",
  "adioustee": "adjoustee",
  "adiouster": "adjouster",
  "assubiectie": "assubjectie",
  "assubiectissant": "assubjectissant",
  "coniurer": "conjurer",
  "deiecte": "dejecte",
  "desia": "desja",
  "Iacques": "Jacques",
  "Iakob": "Jakob",
  "iamais": "jamais",
  "iauoye": "javoye",
  "iay": "jay",
  "iayme": "jayme",
  "ie": "je",
  "iectez": "jectez",
  "Iehan": "Jehan",
  "Iehosua": "Jehosua",
  "Iehudah": "Jehudah",
  "Ieremiah": "Jeremiah",
  "Iesus": "Jesus",
  "iettoient": "jettoient",
  "iniures": "injures",
  "iniustice": "injustice",
  "Iordan": "Jordan",
  "Ioseph": "Joseph",
  "iour": "jour",
  "ioyeulx": "joyeulx",
  "ioyeuse": "joyeuse",
  "Iude": "Jude",
  "iudicial": "judicial",
  "iugeant": "jugeant",
  "iugement": "jugement",
  "Iuifz": "Juifz",
  "iusque": "jusque",
  "iusques": "Jusques",
  "iuste": "juste",
  "iustement": "justement",
  "iustice": "justice",
  "iustification": "justification",
  "iustifiee": "justifiee",
  "iustifiez": "justifiez",
  "maieste": "majeste",
  "reiecte": "rejecte",
  "resiouye": "resjouye",
  "tousiours": "tousjours",
  // u -> v
  "aduenu": "advenu",
  "aduersaire": "adversaire",
  "aduertissoit": "advertissoit",
  "aduocat": "advocat",
  "aduouer": "advouer",
  "alenuiron": "alenviron",
  "apaouris": "apaovris",
  "apaoury": "apaovry",
  "apperceuoir": "appercevoir",
  "approuue": "approuve",
  "ascauoir": "ascavoir",
  "asseruy": "asservy",
  "auec": "avec",
  "aueugle": "aveugle",
  "aueugles": "aveugles",
  "auez": "avez",
  "auoient": "avoient",
  "auoir": "avoir",
  "auoit": "avoit",
  "auons": "avons",
  "conceuras": "concevras",
  "conseruez": "conservez",
  "conuaincuz": "convaincuz",
  "conuenance": "convenance",
  "conuerse": "converse",
  "conuersions": "conversions",
  "conuiennent": "conviennent",
  "daduertissemens": "dadvertissemens",
  "dauec": "davec",
  "Dauid": "David",
  "deliurance": "delivrance",
  "deliurer": "delivrer",
  "desaduouer": "desadvouer",
  "desuestu": "desvestu",
  "deuant": "devant",
  "deuoient": "devoient",
  "deuoit": "devoit",
  "deuons": "devons",
  "diuers": "divers",
  "diuerses": "diverses",
  "diuision": "division",
  "doeuure": "doeuvre",
  "doiuent": "doivent",
  "engraue": "engrave",
  "ensuyure": "ensuyvre",
  "enuers": "envers",
  "enuieillira": "envieillira",
  "enuiron": "environ",
  "enuoye": "envoye",
  "enuoyoit": "envoyoit",
  "escriuant": "escrivant",
  "esleuans": "eslevans",
  "esleue": "esleve",
  "esleuer": "eslever",
  "esleuez": "eslevez",
  "esleuoient": "eslevoient",
  "esprouue": "esprouve",
  "Euangile": "Evangile",
  "euesque": "evesque",
  "euesques": "evesques",
  "fleuue": "fleuve",
  "fleuues": "fleuves",
  "gouuernant": "gouvernant",
  "gouuernement": "gouvernement",
  "gouuerner": "gouverner",
  "gouuerneurs": "gouverneurs",
  "inuiolable": "inviolable",
  "irreuocable": "irrevocable",
  "laueugle": "laveugle",
  "lauoir": "lavoir",
  "lauoit": "lavoit",
  "Leuangile": "Levangile",
  "liure": "livre",
  "luniuersel": "luniversel",
  "mauuais": "mauvais",
  "mauuaise": "mauvaise",
  "merueilles": "merveilles",
  "merueilleuses": "merveilleuses",
  "nauoient": "navoient",
  "nauoit": "navoit",
  "Nouueau": "Nouveau",
  "nouueaulx": "nouveaulx",
  "nouuelle": "nouvelle",
  "oeuure": "oeuvre",
  "oeuures": "oeuvres",
  "ouuertz": "ouvertz",
  "ouure": "ouvre",
  "ouurier": "ouvrier",
  "paoure": "paovre",
  "paoures": "paovres",
  "paourete": "paovrete",
  "parauant": "paravant",
  "paruenir": "parvenir",
  "paruis": "parvis",
  "peruers": "pervers",
  "peruerse": "perverse",
  "peuuent": "peuvent",
  "poursuyure": "poursuyvre",
  "pouuoient": "pouvoient",
  "pouuoit": "pouvoit",
  "pouuons": "pouvons",
  "preuarications": "prevarications",
  "Priuations": "Privations",
  "priuations": "privations",
  "priuees": "privees",
  "prouenoit": "provenoit",
  "rauir": "ravir",
  "receuoir": "recevoir",
  "receura": "recevra",
  "receuroient": "recevroient",
  "receuront": "recevront",
  "recouurer": "recouvrer",
  "releuer": "relever",
  "renouuellee": "renouvellee",
  "renuerse": "renverse",
  "reprouuez": "reprouvez",
  "reuelee": "revelee",
  "reueler": "reveler",
  "saulueur": "saulveur",
  "Sauueur": "Sauveur",
  "sauueur": "sauveur",
  "scauoir": "scavoir",
  "scauoit": "scavoit",
  "scauons": "scavons",
  "seruent": "servent",
  "seruir": "servir",
  "seruiteur": "serviteur",
  "seruiteurs": "serviteurs",
  "sesleuoient": "seslevoient",
  "sesleuoyent": "seslevoyent",
  "souuenteffois": "souventeffois",
  "souuerain": "souverain",
  "suyuant": "suyvant",
  "suyui": "suyvi",
  "suyuions": "suyvions",
  "suyure": "suyvre",
  "trauail": "travail",
  "trouue": "trouve",
  "trouuer": "trouver",
  "trouuerons": "trouverons",
  "viuant": "vivant",
  "viue": "vive",
  "viuons": "vivons",
  // v -> u
  "vmbres": "umbres",
  "vne": "une",
  "vng": "ung",
  "vnie": "unie",
  "vniuersel": "universel",
  "vtile": "utile",
};

export const MODERNIZE_CHAPTER_NAMES = {
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
}

export const MISSPELLED_WORDS_DUE_TO_AI_OR_HUMAN_MISTAKE = {
  "chascu": "chascun",
  "Che rubins": "Cherubins",
  "com mande": "commande",
  "firmamet": "firmament",
  "ihau": "il) au",
  "pleuue": "fleuve",
  "psence": "presence",
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
