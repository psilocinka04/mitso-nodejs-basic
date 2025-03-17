import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = () => {
    const input = createReadStream('files/fileToCompress.txt');
    const output = createWriteStream('files/archive.gz');
    input.pipe(createGzip()).pipe(output);
};
compress();