/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //i array
    //o boolean
    //c 
    //e may contain negative integers

    //**approach 1 - loop through array. for each element, call indexOf after that index. 
        //if returned index > 0, return true
    //approach 2 - sort array ascending. if two adjacent numbers are equal, return true

    for(let i = 0; i < nums.length; i++) {
        debugger;
        let currentItem = nums[i];
        if (nums.indexOf(currentItem, i+1) > 0) return true;
    }
    return false;
    
};