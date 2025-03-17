import { createReadStream } from 'fs';

const read = () => {
    const stream = createReadStream('files/fileToRead.txt');
    stream.pipe(process.stdout);
};
read();