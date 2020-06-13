var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 1 to 4 and get 5', function() {
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })

  it('it can subtract 4 from 7 and get 3', function() {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply 3 by 5 and get 15', function() {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('it can divide 21 by 7 and get 3', function() {
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

});
