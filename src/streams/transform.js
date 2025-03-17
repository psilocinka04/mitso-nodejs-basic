import { Transform } from 'stream';

const transform = () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};
transform();