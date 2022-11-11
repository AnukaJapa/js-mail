const authorizedMails = ["matteo@gmaiil.com", "fabio@gmail.com", "pietro@gmail.com","anna@gmail.com"];

let mailInput = document.getElementById("mailInput");
let button = document.getElementById("mailButton");


button.addEventListener("click", ()=>{
   let mailInputValue = mailInput.value;
   let authorized =false;
   console.log(mailInputValue);

   for(let i =0; i<authorizedMails.length; i++){
    if(authorizedMails[i] == mailInputValue){
authorized = true;
console.log("you are authorized");
break;
    }
   }

   if(!authorized){
    console.log("this email is not authorized");
}

} )