const args = () => {
    const argsArray = process.argv.slice(2);
    const result = [];

    for (let i = 0; i < argsArray.length; i += 2) {
        if (argsArray[i].startsWith('--') && argsArray[i + 1]) {
            const key = argsArray[i].slice(2);
            const value = argsArray[i + 1];
            result.push(`${key} is ${value}`);
        }
    }

    console.log(result.join(', '));
};

args();
