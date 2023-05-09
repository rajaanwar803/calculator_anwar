#! /usr/bin/env node

import inquirer from "inquirer"
import add from "./add.js"
import subtract from "./subtract.js"
import { multiply } from "./multiply.js"
import { divide } from "./divide.js"


const isFloat = (num: number) => {
    if (num % 1 != 0){
        return num.toFixed(2)
    }
    return num
}


inquirer.prompt([

    {
        name: "operator",
        message: "Select the operation:",
        type: "list",
        choices: [ "+", "-", "*", "/"]
    },

    {
        name: "num1",
        message: "Enter first number: ",
        type: "input",
        validate: (answer) => {
            if(isNaN(answer)) {
                return "Please enter a valid number"
            }
            return true
        }
    },

    {
        name: "num2",
        message: "Enter second number: ",
        type: "input",
        validate: (answer) => {
            if(isNaN(answer)) {
                return "Please enter a valid number"
            }
            return true
        }
    },

]).then((answers) => {

    let firstNum = parseFloat(answers.num1)
    let secondNum = parseFloat(answers.num2)

    let result

    if (answers.operator == "+") {
        result = add(firstNum, secondNum)  
    }
    else if (answers.operator == "-") {
        result = subtract(firstNum, secondNum)
    }
    else if (answers.operator == "*") {
        result = multiply(firstNum, secondNum)
    }
    else if (answers.operator == "/") {
        result = divide(firstNum, secondNum)
    }

    if (typeof result !== 'undefined') {
        result = isFloat(result);
    }

    console.log(`Result: ${firstNum} ${answers.operator} ${secondNum} = ${result}`)

})




// let firstNum = parseFloat(input.num1)
// let secondNum = parseFloat(input.num2)
// let result

// if (input.operator == "+") {
//     result = add(firstNum, secondNum)  
// }
// else if (input.operator == "-") {
//     result = subtract(firstNum, secondNum)
// }
// else if (input.operator == "*") {
//     result = multiply(firstNum, secondNum)
// }
// else if (input.operator == "/") {
//     result = divide(firstNum, secondNum)
// }

// // isFloat(result)

// console.log(`Result: ${firstNum} ${input.operator} ${secondNum} = ${result}`)
