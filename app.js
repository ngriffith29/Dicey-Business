
let dieVals = []
let sum = 0
let count = 0


class Die {
    constructor(value) {
        this.value = value
        


        $('<div/>').appendTo('body');
        this.roll()
        $("div").on("dblclick", function () {
            $(this).remove()



        })
        $("div").click(function () {
            this.roll()
        })







    }
    roll() {
        this.value = this.randomNum(6, 1)
        $("div").text(`${this.value}`)
        




    }


    randomNum(num1, num2) {
        return Math.floor(Math.random() * num1) + num2;
    }
}
//

$("#button").on("click", function () {
    let d1 = new Die()
})

$("#sum").on("click", function () {
    let sum = dieVals.reduce(function (a, b) {
        return Number(a) + Number(b);
    })
    alert(sum)

})
//









