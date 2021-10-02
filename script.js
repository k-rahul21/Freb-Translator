const TransalateButton = document.querySelector("#translate-button");
const userInput = document.querySelector("#user-input");
const outputBox = document.querySelector("#output-box");
const form = document.querySelector("#form");

const serverUrl = "https://api.funtranslations.com/translate/groot.json";

function getResult(text)
{
    return serverUrl + "?" + "text" + text;
}

function errorHandler(error)
{
    alert("Something went wrong with server! try again.")
}

function clickHandler()
{
    let inputValue = userInput.value;
    
    fetch(getResult(inputValue))
    .then(response => response.json())
    .then(json => {
        var result = json.contents.translated;
        outputBox.innerText = result;
    })
    .catch(errorHandler);
}

form.addEventListener("click", clickHandler);