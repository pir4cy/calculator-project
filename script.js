var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
const clearButton = document.querySelector('#clear');
const clearAll = document.querySelector('#clearAll')
const dotButton = document.querySelector('#nDot')
const inpBox = document.querySelector("#currQuery");
const ansBox = document.querySelector("#currAns");

var opList = ['+','-','*','/','%'];
var currentExp = '';
var finalExp = '';
var val = '';
function inputText(a)   {
    if ((opList.indexOf(a) >= 0) &&  (!(opList.indexOf(currentExp.slice(-1)) >= 0))){
        console.log (`added operator ${a} to currentExp`)
        inpBox.textContent = a;
        if (opList.indexOf(currentExp.slice(-2) >= 0)){
            val = eval(currentExp);
            currentExp = val;
        }
        console.log(`Value: ${val}`);
        currentExp += a;
        finalExp += a;
    } else if (!isNaN(a) || a == '.'){
        console.log (`added number ${a} to currentExp`)
        if (opList.indexOf(inpBox.textContent) >= 0){
            inpBox.textContent = a;
        } else {
            inpBox.textContent += a;    
        }
        currentExp += a;
        finalExp += a;
    } 
}

function result(){
    console.log (`currentExp : ${currentExp}`);
    console.log (`finalExp : ${finalExp}`);
    answer = eval(finalExp);
    clear()
    ansBox.textContent = answer;
    finalExp = ansBox.textContent;
    console.log (`finalExp : ${finalExp}`);
    
} 

function clear(){
    console.log("cleared");
    inpBox.textContent='';
    currentExp = '';
}

function delAll(){
    console.log("Delete All");
    inpBox.textContent='';
    ansBox.textContent='';
    currentExp = '';
    finalExp = '';
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

clearAll.addEventListener('click', delAll)