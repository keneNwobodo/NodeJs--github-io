const myPath = require('path');

const myDir = myPath.dirname(__filename);
console.log(myDir);

const myExtension = myPath.extname(__filename);
console.log(myExtension);

const baseName = myPath.basename(__filename);
console.log(baseName);

const newPath = myPath.join(__dirname, 'js', 'newIndex.js');
console.log(newPath);

