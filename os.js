const ourOs = require('os');

const myMemory = ourOs.freemem();
console.log(myMemory);

const totalMemory = ourOs.totalmem();
console.log(totalMemory);

const myPlatform = ourOs.platform();
console.log(myPlatform);

const mysysInfo = ourOs.cpus();
console.log(mysysInfo);

const myArch = ourOs.arch();
console.log(myArch);

