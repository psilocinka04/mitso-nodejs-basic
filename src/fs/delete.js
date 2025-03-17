import { unlink } from 'fs/promises';
const remove = async () => {
    try {
        await unlink('files/fileToRemove.txt');
    } catch {
        throw new Error('FS operation failed');
    }
};
remove();