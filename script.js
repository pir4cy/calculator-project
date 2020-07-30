var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
const clearButton = document.querySelector('#clear');
const dotButton = document.querySelector('#nDot')
const inpBox = document.querySelector("#currQuery");
const ansBox = document.querySelector("#currAns");
var exp = '';
function inputText(a){
    inpBox.textContent += a;
}

function result(){
    exp += inpBox.textContent;
    answer = eval(exp)
    clear()
    ansBox.textContent = answer;
}

function clear(){
    console.log("cleared");
    inpBox.textContent='';
    ansBox.textContent='';
}

for (var i = 0; i < numbers.length; ++i){
    numbers[i].setAttribute('onclick', `inputText(${numbers[i].textContent})`);
}

for (var i=0; i<operators.length; ++i){
    text = operators[i].textContent;
    if (text == '='){
        operators[i].setAttribute('onclick', `result()`)
    } 
    else {
        operators[i].setAttribute('onclick', `inputText('${text}')`);   
    }
}

clearButton.addEventListener('click', clear) 
dotButton.addEventListener('click', function() {
    inputText('.');
})
