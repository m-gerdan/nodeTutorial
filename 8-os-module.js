'use strict';
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);
//method returns the system uptime inm seconds
console.log(`The Sytem uptime is :${os.uptime()} seconds`);

const currentOs ={
    name:os.type(),
    release:os.release(),
    totlaMemory:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);