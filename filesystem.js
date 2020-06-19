const ourFs = require('fs');
const anotherPath = require('path'); 



const createFile = ourFs.writeFile(anotherPath.join(__dirname, '/html',
 'index.html'),"<h1> This is my h1 tag</h1>", (error) => {
if(error) {
    console.log('File could not create')
} else {
    console.log('file created succesfully');
 }
})

const readOurFile = ourFs.readFile(anotherPath.join(__dirname, '/html', 'index.html'), 'utf-8', (error, data)=>
 {
    if (error) {
        console.log('Error')
    } else {
        console.log(data)
    }
})

console.log(readOurFile);