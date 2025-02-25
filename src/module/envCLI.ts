import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const envVars = Object.keys(process.env); // Get all environment variable names

const rl = readline.createInterface({
    input,
    output,
    completer: (currentInput: string) => {
        const filtered = envVars.filter(varName => varName.toLowerCase().startsWith(currentInput.toLowerCase()));
        return [filtered.length ? filtered : [], currentInput];
    }
});

// Main function that can be imported by other applications
export async function startEnvCLI(): Promise<void> {
    try {
        rl.on('close', () => {
            console.log('\nExiting CLI...'); // Proper exit message on Ctrl+D or :q
            process.exit(0);
        });

        while (true) {
            const envVar = (await rl.question('Env var to print: ')).trim();

            // Quit when user types :q
            if (envVar === ':q') {
                console.log('Exiting CLI...');
                break;
            }

            if (envVar === '') continue;

            console.log(`You entered: ${envVar}`);
            console.log(process.env[envVar] ?? "Environment variable not found");
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
