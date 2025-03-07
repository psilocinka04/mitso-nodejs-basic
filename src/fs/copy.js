import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
    const sourceDir = join('src', 'fs', 'files');
    const targetDir = join('src', 'fs', 'files_copy');

    try {
        await fs.access(sourceDir);
        await fs.mkdir(targetDir, { recursive: false });

        const files = await fs.readdir(sourceDir);
        await Promise.all(files.map(file => 
            fs.copyFile(join(sourceDir, file), join(targetDir, file))
        ));

        console.log('Files copied successfully.');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await copy();
