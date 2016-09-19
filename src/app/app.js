var koa = require('koa');
var app = koa();
var router = require('./routes');


app.use(router.routes());
app.use(router.allowedMethods());


module.exports = app;
