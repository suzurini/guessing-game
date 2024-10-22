class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if(this.min + 1 === number) {
            return this.min + 1
        } else if (this.max - 1 === number) {
            return this.max - 1
        } else {
            return Math.round((this.max - this.min) / 2 + this.min)
        }
    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;
