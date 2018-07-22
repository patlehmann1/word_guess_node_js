var Letter = require("./letter");

var Word = function (word) {
    this.wordString = word;
    this.newWord = [];
    this.wordArray = wordString.split("");
    this.returnWord = function () {
        for (i = 0; i < wordArray.length; i++) {
            this.newWord.push(letter.displayLetter(wordArray[i]));
        }
    }
    this.wordGuess = function(guess){
        this.checkLetter(guess);
    }
}

module.exports = Word;