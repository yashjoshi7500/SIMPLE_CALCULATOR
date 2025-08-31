
let screen=document.getElementById("screen");
let btns=document.querySelectorAll("button");
let string="";
for(value of btns){
    value.addEventListener("click",(e)=>{
         eventValue=e.target.innerText;
         if(eventValue=="DEL"){
            string=string.substring(0,string.length-1);
            console.log(string);
            screen.value=string;
         }
         else if(eventValue=="AC"){
            string="";
            screen.value=string;
         }
         else if(eventValue=="="){
            string=eval(string);
            screen.value=string;
         }
         else{
         string+=eventValue;
         screen.value=string;

         }
         

         
       
       
    })

}



