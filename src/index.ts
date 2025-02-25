
import { app, port } from "./server";
import { WebSocketServer } from "ws";

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Counter to send to clients
let counter = 0;

// Send counter update every second
setInterval(() => {
    counter++; // Increment counter
    wss.clients.forEach((client: { readyState: number; send: (arg0: string) => void; }) => {
        if (client.readyState === 1) { // Ensure client is connected
            client.send(JSON.stringify({ counter }));
        }
    });
}, 1000);

// Print the 'TEST' environment variable at the beginning
console.log(process.env.TEST);

import * as readline from 'node:readline/promises'; // ESM import
import { stdin as input, stdout as output, exit } from 'node:process';

const rl = readline.createInterface({ input, output });

async function main(): Promise<void> {
    try {
        while (true) {
            const envVar = await rl.question('Env var to print (type "exit" to quit): ');

            if (envVar.toLowerCase() === 'exit') {
                console.log('Exiting CLI...');
                break; // Exit loop properly
            }

            console.log(`You entered: ${envVar}`);
            console.log(process.env[envVar] ?? "Environment variable not found");
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close(); // Ensure readline interface is closed
        exit(0);
    }
}

main().then(r => console.log(r)).catch(e => console.error(e));
