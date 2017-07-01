function Calculator(){}
function  Prosses(){
    var oprs = {
        '+':function(x,y){
            return x + y;
        },
        '-':function(x,y){
            return x - y;
        },
        '*':function(x,y){
            return x * y;
        },
        '/':function(x,y){

            return x / y;
        },
        '^':function(x,y){
            return Math.pow(x,y)
        }
    }
    var result = function(operator,x,y){

        return oprs[operator](x,y);
    }
    return result;
}
Calculator.prototype.add = Prosses();
Calculator.prototype.subtract = Prosses();
Calculator.prototype.multiply = Prosses();
Calculator.prototype.divide = Prosses();
Calculator.prototype.run = Prosses();
module.exports = Calculator;
