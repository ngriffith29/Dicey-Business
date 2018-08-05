$(document).ready(function () {
let dieVals = []
let sum = 0;


    class Die {
        constructor(value) {
            this.value = value
        }
        //Methods go under here
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            let parse = this.value
            let numb = parseInt(parse)
            //
            $('<div/>', {
                'class': `div ${numb}`,
                text: `${numb}`
            }).appendTo('body');//
            dieVals.push(`${numb}`)
            return this.value     
             
        }
        



    }





    //other
    $('#button').on("click", function () {
        let roll = new Die()
        roll.roll()

    })

    $('#sum').on("click", function () {
        
       let sum = dieVals.reduce(function(a,b){
           return a+b;
       })
       console.log(dieVals)


       
        

    })






















})

