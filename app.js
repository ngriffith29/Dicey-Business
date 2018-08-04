$(document).ready (function (){
  


   class Die {
       constructor(value){
        this.value = value
       }

       roll(){
       this.value = Math.floor(Math.random() * 6) + 1; 
       return this.value
       $('div').addClass(`${this.value}`)
       }


   }

   let roll = new Die()
roll.roll()


   $('#button').on("click",function (){
       $('<div/>',{
           'class': `div ${roll.roll()}`,
           text: `${roll.roll()}`
       }).appendTo('body');
})






















})

