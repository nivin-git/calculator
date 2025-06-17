

let firstNumber="";
let secondNumber="";
let operator="";

function append(Number){
    if(operator===""){
        firstNumber+=Number;
        document.getElementById('result').value=firstNumber;
    }

    else{
        secondNumber+=Number;
        document.getElementById('result').value=firstNumber+""+operator+""+secondNumber;
    }
}

function operation(opt){
   operator=opt;
   document.getElementById('result').value=firstNumber+""+operator;
}

function output(){
    let ans;
    switch(operator){
        case '+':
            ans=parseInt(firstNumber)+parseInt(secondNumber);
            break;
        
        case '-':
            ans=parseInt(firstNumber)-parseInt(secondNumber);
            break;

        case '*':
            ans=parseInt(firstNumber)*parseInt(secondNumber);
            break;

        case '/':
            ans=parseInt(firstNumber)/parseInt(secondNumber);
            break;
    }
    document.getElementById('result').value=ans;
}

function clr() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    document.getElementById('result').value = "";
}