var router = require('koa-router')();


router.get('/', function* () {
    this.body = 'Hello World!';
});


module.exports = router;
