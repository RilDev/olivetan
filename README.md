# Olivétan

La première Bible Française. Traduit en 1535 par frère Olivétan. Cette Bible est aussi appelée la "Bible des Martyrs" en raison des protestants tués pour partager la parole de l'Evangile de Jésus-Christ.

## Usage

### Scripts

__modernize-transcript:__ For each file fed, it will generate a `filename-modernized` and a `filename-wfl` file. The first is the modernized version of the text, the other a word frequency list.

`trex run modernize FILENAME1 FILENAME2`

__word-frequency-list:__ Generate a `[filename]-wfl.[md|txt]` file with a table grouping all words found in the document from the least frequent to the most frequent.

`trex run wfl FILENAME1 FILENAME2`

## Development

### Run Tests

`trex run test`

## Todo

- [x] add css style `.markdown`: `text-align: justify;`
- [ ] add line-breaks in introduction
- [ ] isolate and test all functions
- [x] move `constants.ts` to scripts/ root
- [ ] add `interfaces.ts` to scripts/ root
- [ ] implement ADD_CHAPTER_FIRST_LETTER replacement algorithm
- [ ] implement replacement algorithm to replace all errors in docs/notes-on-transcription.md
- [x] check what the "/" character is replaced with!
- [ ] add install section in the development section
