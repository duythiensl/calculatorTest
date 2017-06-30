const chai = require('chai');
const assert = chai.assert;

const Calculator = require('./../src/calculator');

describe('Calculator add other operator test suite', () => {

    var calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('can add other 2 sides operator as well', () => {
        var powOperator = null;

        // TODO populate the pow operator here!

        calculator.add('^', powOperator);

        var result = calculator.run('^', 2, 10);

        assert.equal(1024, result);
    })
});
