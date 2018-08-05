$(document).ready(function () {
let dieVals = []


    class Die {
        constructor(value) {
            this.value = value
        }
        //Methods go under here
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            //
            $('<div/>', {
                'class': `div ${this.value}`,
                text: `${this.value}`
            }).appendTo('body');//
            dieVals.push(`${this.value}`)
            return this.value
            
        }
    }





    //other
    $('#button').on("click", function () {
        let roll = new Die()
        roll.roll()

    })






















})

