// Import the required modules
import * as readline from "node:readline";

// Print the 'TEST' environment variable at the beginning
console.log(process.env.TEST);

// Create a readline interface to interact with the CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask the user repeatedly
function askQuestion() {
    rl.question('Env var to print: ', (envVar) => {
        // Print the user input (environment variable name)
        console.log(`You entered: ${envVar}`);

        // Print the value of the specified environment variable
        console.log(process.env[envVar]);

        // Ask again after a response
        askQuestion();
    });
}

// Start the first question
askQuestion();
