var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
const clearButton = document.querySelector("#clear");

const inpBox = document.querySelector("#currQuery");

function inputText(a){
    inpBox.textContent += a;
}

function result(){
    var exp = inpBox.textContent;
    console.log(exp)
    answer = eval(exp)
    console.log(answer)
}

function clear(){
    inpBox.textContent=' ';
}

clearButton.setAttribute('onclick', `clear()`);
for (var i = 0; i < numbers.length; ++i){
    numbers[i].setAttribute('onclick', `inputText(${numbers[i].textContent})`);
}

for (var i=0; i<operators.length; ++i){
    text = operators[i].textContent;
    if (text == '='){
        operators[i].setAttribute('onclick', `result()`)
    } else {
    operators[i].setAttribute('onclick', `inputText('${text}')`);   }
}

