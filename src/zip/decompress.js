import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = () => {
    const input = createReadStream('files/archive.gz');
    const output = createWriteStream('files/fileToCompress.txt');
    input.pipe(createGunzip()).pipe(output);
};
decompress();
