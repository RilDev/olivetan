# install nim: sudo apt install nim
# run: nim c -r modernize-transcript.nim arg1 arg2
# compile release version: nim c -d:release modernize-transcript.nim
# This script has for objective to automatically modernize the transcript of the Olivetan Bible.

# Replace all old letters
## Replace long s
## Replace scribal abreviations
## Correct "nm" combianation to "mm" for words such as "homme" or "comme"
## Replace "n" to "m" for words such as "hone" -> "home" & "cone" -> "come"
## Replace "i" to "j" for the following list of words. ex: "iamais" -> "jamais"
## Replace "u" to "v" for the following list of words. ex: "suyuant" -> "suyvant"
## Replace "v" to "u" for the following list of words. ex: "suyuant" -> "vni"

# Modernize punctuation
## ".": no space before, add space after
## ",": no space before, add space after
## "/" -> ";": no space before, add space after
## ":": add space before, add space after
## "(": add space before, no space after
## ")": no space before, add space after
## "&": add space before, add space after

# Remove superscript letters

# Remove asterixes

# Remove all double spaces

# Log out all words and their frequency to ease the search of typos
# The words with the smallest frequecy come on top of the list
# Remove all non-letters non-spaces characters
