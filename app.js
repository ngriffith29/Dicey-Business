
let dieVals = []
let sum = 0 
let count = 0


class Die {
    constructor(value){
        this.value = value
        this.roll()
        this.div(this.value,this.value)
        
    }
    roll(){
        this.value = this.randomNum(6,1)
       dieVals.push(`${this.value}`)      
    }    
    div(cl, text){
        
        $('<div/>', {
            'class': `div ${count++}`,
            text: `${text}`
        }).appendTo('body');
    }

    randomNum(num1,num2){
      return  Math.floor(Math.random() * num1) + num2;
    }
}
//

$("#button").on("click", function (){
    let d1 = new Die()
})

$("#sum").on("click", function (){
    let sum = dieVals.reduce(function(a,b){
        return Number(a)+Number(b);})
        alert(sum)
})

$("body").on("click",".div", function (){
       
     $(this).remove()
    
    })

