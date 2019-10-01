class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min+1;
        this.max = max-1;
        
       
    }

    guess() {
        
        return Math.ceil((this.max+this.min)/2);

    }

    lower() {
        this.max = Math.ceil((this.max+this.min)/2)-1;
    }

    greater() {
        this.min = Math.ceil((this.max+this.min)/2)+1;
    }
}

module.exports = GuessingGame;
