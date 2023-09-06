/**
 * @param {number[]} height
 * @return {number}
 */
 //i: array of bar heights
 //o: max area
 //c: input array has at least 2 numbers, input array values always zero or more
var maxArea = function(height) {
    //declare a variable that holds max val so far
    let maxArea = 0;
    //create a left pointer at left most index
    //create a right pointer at right most index
    //use for loop to loop through the array
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        //find w
        let w = right - left;
        //fight h
        let h = Math.min(height[left], height[right]);
        if (w * h > maxArea) {
            maxArea = w * h;
        };
        if (height[right] < height[left]) {
            right--;
        } else {
            left++;
        };
    }
    return maxArea;
};