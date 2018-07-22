var Letter = require("./letter");

var Word = function (word){
    this.wordString = word;
    this.wordArray=wordString.split("");
    this.returnWord = function (){
        for (i = 0; i < wordArray.length; i++){
            this.wordArray.push(letter.displayLetter(wordArray[i]);
        }
    }
}