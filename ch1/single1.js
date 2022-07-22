
// npm install -g mocha
// mocha single1.js
const assert = require('assert');  
const a = [1, 2, 3]
describe('Array', function () { 
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(a.indexOf(4), -1);
      a[0] = 4;
    });
  });
  
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(a.indexOf(4), -1);
    });
  });
});