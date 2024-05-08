import inquirer from "inquirer";
//Instructions: Assign a grade based on a numerical score.
// You will create a grading system in typescript. The grade will be given on the basis of student's marks.
// above 90%  --> A+
// between 80 and 90 --> A
// between 70 and 80 --> B
// between 60 and 70 --> C
// between 50 and 60 --> D
// below 50 --> F
const answer = await inquirer.prompt([
    {
        message: "Please enter marks of student out of 100:",
        type: "number",
        name: "score",
    },
]);
if (answer.score > 90 && answer.score <= 100)
    console.log("Grade A+");
else if (answer.score > 80 && answer.score <= 90)
    console.log("Grade A");
else if (answer.score > 70 && answer.score <= 80)
    console.log("Grade B");
else if (answer.score > 60 && answer.score <= 70)
    console.log("Grade C");
else if (answer.score >= 50 && answer.score <= 60)
    console.log("Grade D");
else
    console.log("Grade F");
