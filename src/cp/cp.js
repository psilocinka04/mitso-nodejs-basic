import { spawn } from 'child_process';

const spawnChildProcess = (args) => {
    const child = spawn('node', ['src/cp/script.js', ...args], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });
};
spawnChildProcess(process.argv.slice(2));