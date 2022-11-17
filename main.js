const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const output = document.querySelector("#output")

const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"



function getTranslateApp(text){
    return serverUrl + "?" + "text=" + text
}


function errorHandler(error){
    console.log(error)
}


function clickHandler(){
 var inputText = txtInput.value
 fetch(getTranslateApp(inputText))
 .then(response => response.json())
 .then(json => output.innerHTML = json.contents.translated)
 .catch(errorHandler)
}




btnTranslate.addEventListener("click", clickHandler) 