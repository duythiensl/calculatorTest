const chai = require('chai');
const assert = chai.assert;

const Calculator = require('./../src/calculator');

describe('Calculator division by zero test suite', () => {

    var calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('must throw division by zero exception when it does', () => {
        // TODO your code here!
        try{
            var result = calculator.divide(6,0);
        aassert.equal(6,result);
        throw new Error('You should implement this test');
    }catch(ex){
        var message={
            'msg': ex.Error
        };
        return message;
    }

    });

});
