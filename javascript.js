let display = document.querySelector(".display")
let clearBtn = document.querySelector(".clear")
let deleteBtn = document.querySelector(".delete")
let numberBtn = document.querySelectorAll(".number")
let operationBtn = document.querySelectorAll(".operation")
let dotBtn = document.getElementById("dot")
let equalBtn = document.getElementById("equal")
let num1 = ""
let num2 = ""
let operator = ""

function getNumber(num){
    if (display.textContent == "Hey! You can't do that!"){
        display.textContent = ""
    }
    if((!operator) && (num1.length < 10)){
        num1 += num
        display.textContent += num
    }
    if ((operator) && (num2.length < 10)){
        num2 += num
        display.textContent +=num
    }
}

function getOperation (oper){
    if(!operator){
    operator = oper 
    display.textContent += oper
    disableOperation()
    }
}

function calculate(){
    let result = 0
    if (num1 && num2 && operator){
        if(operator == "+"){
            result = parseFloat(num1) + parseFloat(num2)
        }
        if(operator == "-"){
            result = parseFloat(num1) - parseFloat(num2)
        }
        if(operator == "*"){
            result = parseFloat(num1) * parseFloat(num2)
        }
        if(operator == "/"){
            if(num2 == 0){
                display.textContent = "Hey! You can't do that!"
            } else result = parseFloat(num1) / parseFloat(num2)
        }
        num1 = result
        num2 = ""
        operator = ""
        enableOperation()
    } else display.textContent = "Hey! You can't do that!"
    if(result){
    display.textContent = Math.round(result * 1000) / 1000
    }
}

function clear(){
    num1 = ""
    num2 = ""
    operator = ""
    display.textContent = ""
    enableOperation()
}

function enableOperation(){
    operationBtn.forEach(button => button.disabled = false)
}

function disableOperation(){
    operationBtn.forEach(button => button.disabled = true)
}

function dlt(){
    let string = num1 + operator + num2
    if(string){
        if(!num2){
            enableOperation()
        }
        string = string.slice(0, string.length - 1)
        if(string.includes(operator) == false){
            operator = ""
            enableOperation()
        }
        display.textContent = string
        if(operator){
            let numbers = string.split(operator)
            num1 = numbers[0]
            if(numbers[1]){
                num2 = numbers[1]
            } else {
                num2 = ""
            }    
        } else {
            num1 = string
            num2 = ""
        }
    }
}

function addDot(){
    if((!operator) && (!num1.includes("."))){
        num1 += "."
        display.textContent = num1
    } else if ((num2) && (!num2.includes("."))){
        num2 += "."
        display.textContent = num1 + operator + num2
    }
}

numberBtn.forEach(button => {
    button.addEventListener('click', (e) => getNumber(e.target.value))
})
clearBtn.addEventListener('click', clear)
operationBtn.forEach(button=> {
    button.addEventListener('click', (e) => getOperation(e.target.value))
})
equalBtn.addEventListener('click', calculate)
deleteBtn.addEventListener('click', dlt)
dotBtn.addEventListener('click', addDot)
document.addEventListener('keydown', (e) => {
    switch(e.keyCode){
        case 48:
            getNumber(e.key)
            break
        case 49:
            getNumber(e.key)
            break
        case 50:
            getNumber(e.key)
            break
        case 51:
            getNumber(e.key)
            break
        case 52:
            getNumber(e.key)
            break
        case 53:
            getNumber(e.key)
            break
        case 54:
            getNumber(e.key)
            break
        case 55:
            getNumber(e.key)
            break
        case 56:
            if(e.shiftKey){
                getNumber(e.key)
            } else getOperation(e.key)
            break
        case 57:
            getNumber(e.key)
            break
        case 189:
            getOperation(e.key)
            break
        case 191:
            getOperation(e.key)
            break
        case 187:
            if(e.shiftKey){
                getOperation(e.key)
            } else calculate()
            break
        case 190:
            addDot()
            break
        case 13:
            calculate()
            break
        case 8:
            dlt()
            break
        case 96:
            getNumber(e.key)
            break
        case 97:
            getNumber(e.key)
            break
        case 98:
            getNumber(e.key)
            break
        case 99:
            getNumber(e.key)
            break
        case 100:
            getNumber(e.key)
            break
        case 101:
            getNumber(e.key)
            break
        case 102:
            getNumber(e.key)
            break
        case 103:
            getNumber(e.key)
            break
        case 104:
            getNumber(e.key)
            break
        case 105:
            getNumber(e.key)
            break
        case 106:
            getOperation(e.key)
            break
        case 107:
            getOperation(e.key)
            break
        case 109:
            getOperation(e.key)
            break
        case 111:
            getOperation(e.key)
            break
        case 110:
            addDot()
            break
    }
})

