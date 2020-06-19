const ourHttp = require('http');

const ourServer = ourHttp.createServer((request, response)=> {
     response.write('Welcome to migrant solutions');
     console.log(request);
     response.end();
})

ourServer.listen(3000, ()=> {
    console.log('payrant server is up and running');
})