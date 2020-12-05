const repeatedWord = require('./repeated-word.js');

describe('Testing challenge 31', ()=> {
  it('should work', ()=> {
    expect(repeatedWord('blah this stuff blah things')).toEqual('blah')
  })
})