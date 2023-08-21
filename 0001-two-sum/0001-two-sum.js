/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let A, B, indexA, indexB; 
    //loop through nums
    for(let i = 0; i < nums.length; i++) { 
        debugger;
        //assign A to current element at i
        A = nums[i];
        indexA = i;
        //B = target - A
        B = target - A;
        indexB = nums.indexOf(B);
        // if B exists in nums and isn't at the same location as A,
        if(indexB !== -1 && indexB !== indexA) {
            return [indexA, indexB];
        }
    }
    
};