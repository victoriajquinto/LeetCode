/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create a stack array
    const stack = [];
    //create a reference object with bracket pairs
    const reference = {
        "}": "{",
        ")": "(",
        "]": "[",
    };

    //convert s to array
    s = s.split('');
    //loop through s
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        //if char = (, {, or [,
        if (char === '(' || char ==='{' || char ==='[') {
            //push char into stack
            stack.push(char);
        } else if (stack[stack.length - 1] === reference[char]) {
            //pop last char from stack
            stack.pop();
        } else {
            return false;
        };
    }
    //if stack is empty and s is empty, return true, otherwise, return false
        return (stack.length === 0) ? true : false;
};

