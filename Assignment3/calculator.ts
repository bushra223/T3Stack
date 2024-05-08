//Modules are basically scripts written in separate files.
import { addition } from "./addition.js";
import { subtraction } from "./subtraction.js";
import { division } from "./division.js";
import { multiplication } from "./multiplication.js";
import inquirer from "inquirer";

let flag = false;
while (flag == false) {
	let answer = await inquirer.prompt([
		{
			name: "number1",
			type: "number",
			message: "Enter first number:",
		},
		{
			name: "number2",
			type: "number",
			message: "Enter second number:",
		},
		{
			name: "operations",
			type: "list",
			message: "Select operation:",
			choices: ["Addition", "Subtraction", "Multiplication", "Division"],
		},
	]);
	if (answer.operations == "Addition") {
		console.log("Answer:" + addition(answer.number1, answer.number2));
	} else if (answer.operations == "Subtraction") {
		console.log("Answer:" + subtraction(answer.number1, answer.number2));
	} else if (answer.operations == "Multiplication") {
		console.log("Answer:" + multiplication(answer.number1, answer.number2));
	} else if (answer.operations == "Division") {
		console.log("Answer:" + division(answer.number1, answer.number2));
	}
	let runAgain = await inquirer.prompt([
		{
			name: "continue",
			message: "Do you want to continue?",
			type: "confirm",
		},
	]);
	if (runAgain.continue == false) flag = true;
}
