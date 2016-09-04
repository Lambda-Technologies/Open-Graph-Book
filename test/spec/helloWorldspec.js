var hello = require("../../src/app/helloworld.js")


describe('Initial Configuarion Suite', function(){

  it('should say hello world',function(done){
    expect(hello.world()).toEqual('Hello World!');  

    done();
  });

});
