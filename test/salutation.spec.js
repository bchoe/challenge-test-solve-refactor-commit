const chai =require('chai');
const expect = chai.expect;
const sqRoot = require('../index.js');

describe ('sumOfSquareRoot',() => {
  it('should throw an error',() => {
    expect(sqRoot.bind('one')).to.throw(Error);
    expect(sqRoot).to.throw(Error);
  });
  it('should be a function',() => {
    expect(sqRoot).to.be.a('function');
  });
  it('should return square root',() =>{
    expect(sqRoot(9)).to.equal(3);

  });

});