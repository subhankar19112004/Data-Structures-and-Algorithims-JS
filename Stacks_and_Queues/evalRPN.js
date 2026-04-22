// 150. Evaluate Reverse Polish Notation
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.


var evalRPN = function (s) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(['+', '-', '*', '/'].includes(s[i])){
            let a = stack.pop();
            let b = stack.pop();
            let ans = Math.trunc(eval( `${b} ${s[i]} ${a}`));
            stack.push(ans);
        } else {
            stack.push(s[i]);
        }
    }
    return +stack.pop();
}

console.log(evalRPN(["2","1","+","3","*"])); // 9
console.log(evalRPN(["4","13","5","/","+"])); // 4 + (13 / 5) = 4 + 2 = 6    
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22
  

//Optimizing the code by using map to store the operations instead of using eval
var evalRPN2 = function (s) {
    let stack = [];
    let map = {
        '+' : (a, b) => (b + a),
        '*' : (a, b) => (b * a),
        '-' : (a, b) => (b - a),
        '/' : (a, b) => Math.trunc(b / a),
    }

    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[s[i]](+a, +b);
            stack.push(ans);
        } else {
            stack.push(s[i]);
        }
    }
    return +stack.pop();
}

console.log(evalRPN2(["2","1","+","3","*"])); // 9
console.log(evalRPN2(["4","13","5","/","+"])); // 4 + (13 / 5) = 4 + 2 = 6
console.log(evalRPN2(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22