// Implement stack using two queues. The operations of stack should be supported by using only the standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
// Applying the above operations, implement a last-in-first-out (LIFO) stack using queues. You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift());
    }
    let ans = this.q1.shift();
    
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift());
    }
    let lastEl = this.q1.shift();
    this.q2.push(lastEl);

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return lastEl;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// Implement stack using one queue. The operations of stack should be supported by using only the standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.


var MyStack = function() {
    this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q1.push(this.q1.shift());
    }
    let ans = this.q1.shift();
    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q1.push(this.q1.shift());
    }
    let ans = this.q1.shift();
    this.q1.push(ans);
    return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

