var chai = require('chai');
var expect = chai.expect;

describe('Initial Configuration Suite', function(){

  it('should say hello world',function(done){
    expect('Hello World!').to.equal('Hello World!');  

    done();
  });

});
