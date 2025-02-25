import { startEnvCLI } from './module/envCLI'; // Adjust the path to where the module is located

// Start the environment variable CLI
startEnvCLI().catch(e => console.error(e));
