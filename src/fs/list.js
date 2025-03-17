import { readdir } from 'fs/promises';
const list = async () => {
    try {
        const files = await readdir('files');
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};
list();