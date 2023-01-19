const { readFile, writeFile } = require('fs');
console.log('start');
readFile(
    './content/first.txt',
    'utf-8',
    (err, result) => {
        if (err) {
            console.log(err);
            return null;
        }
        const first = result;
        readFile(
            './content/second.txt',
            'utf-8',
            (err, result) => {
                if (err) {
                    console.log(err);
                    return null;
                }
                const second = result;
                writeFile(
                    './content/result-aysnc.txt',
                    `Here is the async result F${first},S${second}`,
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        console.log('done with this task');
                    }
                )
            })
    })
    console.log('starting next task');