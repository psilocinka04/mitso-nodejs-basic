import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join('src', 'fs', 'files', 'fresh.txt');
    try {
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
        console.log('File created successfully.');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await create();
