var koa = require('koa');
var app = koa();

console.log("Koa listening on localhost:3000")

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);

