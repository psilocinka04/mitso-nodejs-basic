import { createWriteStream } from 'fs';

const write = () => {
    const stream = createWriteStream('files/fileToWrite.txt');
    process.stdin.pipe(stream);
};
write();