const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");


function clickHandler(){
    console.log("clicked");
    console.log("txtInput", txtInput.value)
}




btnTranslate.addEventListener("click", clickHandler) 