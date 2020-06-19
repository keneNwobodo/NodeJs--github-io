const myUrl = new URL('http://migrant-solutions.com:3000/index.html?id=200&status=active');

const ourPathname = myUrl.pathname

console.log(ourPathname)

const rootName = myUrl.host
console.log(rootName)

const serialUrl = myUrl.toString();
console.log(serialUrl);

const myHostName = myUrl.hostname;
console.log(myHostName);

const myParams = myUrl.searchParams;
console.log(myParams);