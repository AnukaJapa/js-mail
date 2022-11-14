let authorizedMails = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com","anna@gmail.com"];
let validEmailTypes = ["@gmail.com", "@yahoo.it", "@yahoo.com"];

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
// let list = "<ol>";

// for(let i=0; i<array.length; i++){
//     list += `<li>${array[i]}</li>`;
// }
// list += "</ol>";
// textDisplay.innerHTML = list;

let orderedList = document.createElement("ol");
textDisplay.appendChild(orderedList);
for (let i in array){
    const li = document.createElement("li");
    li.textContent = array[i];
    orderedList.appendChild(li);
}
}

function checkMailValid(){
    mailInputValue = mailInput.value;
    mailInputValue.toLocaleLowerCase();
for(let i = 0; i< validEmailTypes.length; i++){

if(mailInputValue.endsWith(`${validEmailTypes[i]}`)){
    console.log("you mail is valid");
    valid = true;
};

if(!valid){
    console.log("your email is not valid");
}
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

        buttonYes.textContent= "Yes";
        buttonNo.textContent = "No";

        buttonsDiv.appendChild(buttonYes);
        buttonsDiv.appendChild(buttonNo); 

    buttonYes.addEventListener("click", ()=>{
    buttonNo.remove();
    buttonYes.remove();

    authorizedMails.push(mailInputValue);
    makeList(authorizedMails);
      } )

    buttonNo.addEventListener("click", ()=>{
        location.reload();
    })
    }
}


