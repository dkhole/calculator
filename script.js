function add(n1, n2){
    return parseFloat(n1) + parseFloat(n2);
}

function subtract(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

function multiply(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

function divide(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

function operator(op, n1, n2) {

    switch(op){
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "/":
            return divide(n1, n2);
        case "*":
            return multiply(n1, n2);
    }
}

let buttons = document.querySelectorAll(".button");
let mainScreen = document.querySelector("#main-screen");
let preview = document.querySelector("#preview");
let count = 0;
let result = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        switch(button.className) {
            case "button":
                if(count == 0) {
                    mainScreen.textContent = button.textContent;
                    result = button.textContent;
                    count++;
                } 
                else if(count == 14) {
                    mainScreen.textContent =  mainScreen.textContent.substring(1) + button.textContent;
                    result = result + button.textContent;
                }
                else {
                    mainScreen.textContent = mainScreen.textContent + button.textContent;
                    result = result + button.textContent;
                    count++;
                }
                break;
            case "button operator":
                if(count == 0) {
                    //make border red
                } 
                else if(count == 14) {
                    mainScreen.textContent =  mainScreen.textContent.substring(1) + button.textContent;
                    result = result + button.textContent;
                } else {
                    mainScreen.textContent = mainScreen.textContent + button.textContent;
                    result = result + button.textContent;
                    count++;
                }
                break;
            case "button ce":
                  if(count <= 1) {
                    mainScreen.textContent = "0";
                    preview.textContent = "";
                } else {
                    mainScreen.textContent =  mainScreen.textContent.substring(0, mainScreen.textContent.length - 1);
                    result = result.substring(0, result.length - 1);
                    count--;
                }

                break;
            case "button ac":
                mainScreen.textContent = "0";
                preview.textContent = "";
                result = "";
                count = 0;
                break;
            case "button equal":
                let num1;
                let num2;
                let final;
                let resArray = result.split(/([0-9\.]+)/).filter(Boolean);
   
                if(resArray.length % 2 == 0) {
                    mainScreen.textContent = "ERROR";
                } else {
                    for(let i = 0; i < resArray.length; i++) {
                        if(i == 0) {
                            num1 = resArray[i] ;
                            num2 = resArray[i + 2];
                            switch(resArray[i + 1]) {
                                case "+":
                                    final = add(num1,num2);
                                    break;
                                case "-":
                                    final = subtract(num1,num2);
                                    break;
                                case "÷":
                                    final = divide(num1,num2);
                                    break;
                                case "×":
                                    final = multiply(num1,num2);
                                    break;
                            }
                            i = i + 2;
                        } else {
                            num2 = resArray[i + 1];
                            num1 = final;
                            switch(resArray[i]) {
                                case "+":
                                    final = add(num1,num2);
                                    break;
                                case "-":
                                    final = subtract(num1,num2);
                                    break;
                                case "÷":
                                    final = divide(num1,num2);
                                    break;
                                case "×":
                                    final = multiply(num1,num2);
                                    break;
                            }
                            i = i + 1;
                        }
                    }

                    final = final.toString();

                    if(final.length > 14) {
                        final = final.substring(0, 14);
                    }

                    preview.textContent = result + "=";
                    mainScreen.textContent = final;
                }

                result = "";
                count = 0;
                break;
                
        }
    })
})