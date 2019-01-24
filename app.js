const http= require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request,response)=>{
//  console.log(request.url);
  const requestedUrl= url.parse(request.url,true);// just to differentiate pathname and queryString

if(requestedUrl.pathname=='/'){
  console.log('root routing called');
  let data = fs.readFileSync('./views/index.html');
  response.writeHead(200,{'Content-Type':'text/html'});
  response.write(data);
  response.end();

}
if(requestedUrl.pathname=='/about'){
  console.log('about routing called');
}
if(requestedUrl.pathname=='/data'){
console.log('comming data from ajax req:',requestedUrl.query);
  console.log('sending ajax request from server');
response.end('ajax msg ok');
console.log('ajax res end');
//  response.end();
}

});
server.listen(3333,()=>{
  console.log('Server running at port:3333');
});
