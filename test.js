const assert = require('assert');
const {sum, subtrect, multiply, devide} = require('./main');

describe('sum', function(){
  it('should add two numbers' ,function(){
    assert.deepEqual(sum(1,2),3);
  });
});

describe('subtrect', function(){
  it('should subtrect two numbers' ,function(){
    assert.deepEqual(subtrect(2,1),1);
  });
});

describe('multiply', function(){
  it('should multiply two numbers' ,function(){
    assert.deepEqual(multiply(2,3),6);
  });
});