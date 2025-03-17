import { cp } from 'fs/promises';
const copy = async () => {
    try {
        await cp('files', 'files_copy', { recursive: true, errorOnExist: true });
    } catch {
        throw new Error('FS operation failed');
    }
};
copy();