
var MinStack = function() {
   this.stack = []
   this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    //if val < this.min last value, push val into this.min. otherwise, push last value
    let minLast = this.min[this.min.length-1];
    //(val < minLast) ? this.min.push(val) : this.min.push(minLast)
    if (val < minLast || minLast === undefined) {
        this.min.push(val)
    } else {
        this.min.push(minLast)
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let last = this.stack[this.stack.length-1];
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //return Math.min(...this.stack)
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */