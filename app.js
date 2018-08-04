$(document).ready (function (){
  


   class Die {
       constructor(value){
        this.value = value
       }
       //Methods go under here
       roll(){
       this.value = Math.floor(Math.random() * 6) + 1; 
       return this.value
       $('div').addClass(`${this.value}`)
       }

   }
//test classes and methods here
   let roll = new Die()
roll.roll()

//other
   $('#button').on("click",function (){
       $('<div/>',{
           'class': `div ${roll.roll()}`,
           text: `${roll.roll()}`
       }).appendTo('body');
})






















})

