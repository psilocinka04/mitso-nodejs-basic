import { rename } from 'fs/promises';
const renameFile = async () => {
    try {
        await rename('files/wrongFilename.txt', 'files/properFilename.md');
    } catch {
        throw new Error('FS operation failed');
    }
};
renameFile();