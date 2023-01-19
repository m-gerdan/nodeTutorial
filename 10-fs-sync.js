const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

writeFileSync('./content/result-sync.txt',
`here is teh result first ${first},second:${second}`,
{flag:'a'}
)
console.log('done with this task');
console.log('start next task');