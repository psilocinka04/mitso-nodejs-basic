const args = () => {
    const argsList = process.argv.slice(2);
    const parsedArgs = {};
    for (let i = 0; i < argsList.length; i += 2) {
        if (argsList[i].startsWith('--')) {
            parsedArgs[argsList[i].substring(2)] = argsList[i + 1];
        }
    }
    console.log(
        Object.entries(parsedArgs)
            .map(([key, value]) => `${key} is ${value}`)
            .join(', ')
    );
};
args();
