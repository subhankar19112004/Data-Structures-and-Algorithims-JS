// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class: 
// MinStack() initializes the stack object.
// void push(val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.
var MinStack = function() {
    this.s1 = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.s1.length == 0){
        this.s1.push([val, val]);
    } else {
        let lastMin = this.s1[this.s1.length - 1][1];
        let minVal = Math.min(lastMin, val);
        this.s1.push([val, minVal]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1[this.s1.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s1[this.s1.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */