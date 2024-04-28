console.log("Lets make coffee")

// We are going to attempt to make coffee on our computer
class Coffee {
    constructor(size, shots, milk){
        this.size = size;
        this.shots = shots;
        this.milk = milk;
    }

    steam() {
        return `The milk you have chosen is ${this.milk}. Let me go ahead and steam that for you!`
    }

    pullShots() {
        return `The amount of shots you ordered is ${this.shots}, it won't be much longer!`
    }

    finishAndConnect() {
        return `Alright the latte with ${this.milk}, ${this.shots} shots of espresso, and in a ${this.size} size cup is ready!!!`
    }
}


let FirstDrink = new Coffee("Grande", 4, "Oat Milk")

console.log(FirstDrink.finishAndConnect())