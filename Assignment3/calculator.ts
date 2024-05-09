//Modules are basically scripts written in separate files.
import { addition } from "./addition.js";
import { subtraction } from "./subtraction.js";
import { division } from "./division.js";
import { multiplication } from "./multiplication.js";
import inquirer from "inquirer";
import chalk from "chalk";

let flag = false;
while (flag == false) {
	let answer = await inquirer.prompt([
		{
			name: "number1",
			type: "number",
			message: chalk.bgHex("#98eb34").bold("Enter first number:"),
		},
		{
			name: "number2",
			type: "number",
			message: chalk.bold.bgHex("#34ad77").bold("Enter second number:"),
		},
		{
			name: "operations",
			type: "list",
			message: chalk.bold.bgHex("#4b4982").bold.underline("Select operation:"),
			choices: ["Addition", "Subtraction", "Multiplication", "Division"],
		},
	]);
	if (answer.operations == "Addition") {
		console.log(
			chalk.greenBright.bgBlueBright.bold(
				"\t\t\tAnswer:" + addition(answer.number1, answer.number2).toFixed(2)
			)
		);
	} else if (answer.operations == "Subtraction") {
		console.log(
			chalk.greenBright.bgBlueBright.bold(
				'\t\t"Answer:' + subtraction(answer.number1, answer.number2).toFixed(2)
			)
		);
	} else if (answer.operations == "Multiplication") {
		console.log(
			chalk.greenBright.bgBlueBright.bold(
				'\t\t"Answer:' +
					multiplication(answer.number1, answer.number2).toFixed(2)
			)
		);
	} else if (answer.operations == "Division") {
		console.log(
			chalk.greenBright.bgBlueBright.bold(
				'\t\t"Answer:' + division(answer.number1, answer.number2).toFixed(2)
			)
		);
	}
	let runAgain = await inquirer.prompt([
		{
			name: "continue",
			message: chalk.blue.bold("Do you want to continue?"),
			type: "confirm",
		},
	]);
	if (runAgain.continue == false) flag = true;
}
