// Assignment no: 1
// Install Node.js, TypeScript and VS Code on your computer.
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person_name: string = "bushra attique";
console.log(`Hello ${person_name}! would you like to learn some Python today?`);
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*In the line below i have used [replace(searchValue: string | RegExp, replaceValue: string): string] overload method of replace which takes in 2 parameters regexp and the string to be replaced.
  \b means border or first character of word
  \w means each word in the string
  g is a flag which means to use this regular expression for whole string and not just the first word or you can say do it globally
  (s) => s.toUpperCase() is an arrow function which takes matched string(first charcter) as parameter ,convert it into upper case and keeps the rest of the word unchanged
and because of g flag it does so with every word in the string.
*/
let titleCase = person_name
	.toLowerCase()
	.replace(/\b\w/g, (s) => s.toUpperCase());

console.log(
	"Lower Case: " +
		person_name.toLowerCase() +
		"\nUpper Case:" +
		person_name.toUpperCase() +
		"\nTitle Case:" +
		titleCase
);
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(
	'Holy Prphet (PBUH) said "No two things have been combined better than knowledge and patience."'
);
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Holy Prophet(PBUH)",
	message = `${famousPerson} said "Seek knowledge from cradle to grave."`;
console.log(message);
