import { parentPort } from 'worker_threads';

parentPort.on('message', (num) => {
    try {
        const result = num * num; // Пример вычисления
        parentPort.postMessage({ status: 'resolved', data: result });
    } catch {
        parentPort.postMessage({ status: 'error', data: null });
    }
});
