var Letter = function (letter) {
    this.letter = letter;
    this.hasBeenGuessed = false;
    this.displayLetter = function () {
        if (this.hasBeenGuessed === true) {
            return this.letter.toUpperCase();
        } else {
            return '_';
        }
    }
    this.checkLetter = function (x) {
        if (x == this.letter) {
            this.hasBeenGuessed = true;
        }
    }
}

module.exports = Letter;