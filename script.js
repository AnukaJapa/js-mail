let authorizedMails = ["matteo@gmaiil.com", "fabio@gmail.com", "pietro@gmail.com","anna@gmail.com"];

let mailInput = document.getElementById("mailInput");
let mailButton = document.getElementById("mailButton");
let textDisplay = document.getElementById("result");
let mailInputValue;
let authorized =false;
let valid =false;


mailButton.addEventListener("click", ()=>{
   checkMailValid();
   checkAuthorized();
   displayResult();
} )

function makeList(array){
    let list = "<ol>";

for(let i=0; i<array.length; i++){
    list += `<li>${array[i]}</li>`;
}
list += "</ol>";
return list;
}

function checkMailValid(){
    mailInputValue = mailInput.value;

    if(mailInputValue.includes("@")){
        console.log("you mail is valid");
        valid = true;
    }else{
        console.log("invalid mail");
        valid = false;
    }
}

function checkAuthorized(){
authorized = false;
if(!valid) return;
for(let i =0; i<authorizedMails.length; i++){
    if(authorizedMails[i] == mailInputValue){
    authorized = true;
    }
   }
}

function displayResult(){
if(!valid) {
    console.log("your email is not valid!");
    textDisplay.textContent= "your email is not valid";
    return
}
    if(authorized){
        textDisplay.textContent = "You are authorized!";
        console.log("this email is authorized");

    }else {

        textDisplay.textContent = `You are not authorized, do you want to add this email to authorized email list?`;
        console.log("this email is not authorized");


        let buttonsDiv = document.querySelector(".buttons");
        let buttonYes = document.createElement("button");
        let buttonNo = document.createElement("button");

        buttonYes.textContent="Yes";
        buttonNo.textContent = "No";

        buttonsDiv.appendChild(buttonYes);
        buttonsDiv.appendChild(buttonNo); 

    buttonYes.addEventListener("click", ()=>{
    buttonNo.remove();
    buttonYes.remove();

    authorizedMails.push(mailInputValue);
    console.log(makeList(authorizedMails));
    textDisplay.innerHTML = makeList(authorizedMails);

      } )

    buttonNo.addEventListener("click", ()=>{
        location.reload();
    })
    }
}


