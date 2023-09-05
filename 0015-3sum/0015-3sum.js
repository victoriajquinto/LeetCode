/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //i: array of numbers
 //o: an array of nested arrays, each containing 3 unique elements that sum to 0 
 //c: may contain negative numbers, input array length between 3 and 3000 inclusive
 //e: no possible solution -> return empty array
 //if a+b+c = 0, then a = b+c, where a is a given element
 //at a given element, find two other elements sum to that element
    //if found, add all three elements to results array
    //otherwise, continue to the next element
var threeSum = function(nums) {
    //declare results array
    let results = [];
    //sort nums asc
    nums.sort((a,b) => {return a-b});
    //loop through nums array
    for(let i = 0; i < nums.length; i++) {
        //assign a to number at incrementer
        let a = nums[i];
        //if a is greater than 0, break
        if (a > 0) break;
        // if (a === previous) continue;
        if (i > 0 && a === nums[i-1]) continue;
        let [ left, right ] = [i+1, nums.length-1];
        //while left < right
        while (left < right) {
            let tripletSum = a + nums[left] + nums[right];
            if (tripletSum < 0) {
                left++;
            } else if ( tripletSum > 0) {
                right--;
            //if sum === 0, push [a,b,c] into results array
            } else {
                results.push([a, nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left-1] && left < right){
                    left++;
                } 
            }
        }
    }
    return results;
};