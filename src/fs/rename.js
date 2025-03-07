import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
    const oldPath = join('src', 'fs', 'files', 'wrongFilename.txt');
    const newPath = join('src', 'fs', 'files', 'properFilename.md');

    try {
        await fs.access(newPath);
        console.error('FS operation failed');
    } catch {
        try {
            await fs.rename(oldPath, newPath);
            console.log('File renamed successfully.');
        } catch {
            console.error('FS operation failed');
        }
    }
};

await rename();
