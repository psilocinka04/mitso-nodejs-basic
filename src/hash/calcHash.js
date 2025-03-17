import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calcHash = async () => {
    try {
        const fileBuffer = await readFile('files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256').update(fileBuffer).digest('hex');
        console.log(hash);
    } catch {
        throw new Error('FS operation failed');
    }
};
calcHash();