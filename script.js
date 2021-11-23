var textArea = document.querySelector("#textArea");
var btnClick = document.querySelector("#translate-button");
var divOutput = document.querySelector("#output")

const apiUrl = "	https://api.funtranslations.com/translate/ferb-latin.json?text=";

function catchEventHandler(error){
   alert("Oops! Some error occured. Better luck next time!!");   
}

function translate(){
   inputText = textArea.value;
   var url = apiUrl + inputText;
   fetch(url).then(response => response.json()).then(json => {
      divOutput.innerHTML = json.contents.translated
   }).catch(catchEventHandler);
}

btnClick.addEventListener("click", translate);
