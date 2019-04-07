var add = function(a, b) {
  return a + b
}

var subtract = function(a, b) {
  return a - b
}
var assert = require('assert')

describe(Math, function() {

  describe('addition', function() {
    it('should add two numbers together, if given good inputs', function() {
      assert.equal(5, add(2, 3))
    })
    it('should not add two numbers together, if given bad inputs', function() {
      //this should always be false
      assert.notEqual('six', add('two', 4))
    })
  })

  describe('subtraction', function() {
    it('should subtract two numbers, if given good inputs', function() {
      assert.equal(5, subtract(12, 7))
    })
    it('should not subtract two numbers, if given bad inputs', function() {
      //this should always be false
      assert.notEqual('6', subtract('ten', 4))
    })
  })
})
