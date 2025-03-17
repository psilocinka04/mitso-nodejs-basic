import { Worker } from 'worker_threads';
import { cpus } from 'os';

const numCPUs = cpus().length;

const runWorkers = async () => {
    const workers = [];
    const results = [];

    for (let i = 0; i < numCPUs; i++) {
        workers.push(new Promise((resolve) => {
            const worker = new Worker('./src/wt/worker.js');
            const num = 10 + i;

            worker.postMessage(num);
            worker.on('message', resolve);
            worker.on('error', () => resolve({ status: 'error', data: null }));
        }));
    }

    Promise.all(workers).then((res) => {
        console.log(res);
    });
};

runWorkers();
