/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  //i: numbers === array of sorted numbers, 1-indexed
  //o: array of two indices, 1 indexed
  //c: smaller index goes first
  //e: empty array, negative numbers

    //assign left and right pointers to ends of array
    let [ left, right ] = [0, numbers.length-1];
  //loop through the array. left pointer will always be less than right pointer
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) return [left+1, right+1];
        if (sum < target) left++;
        if (sum > target) right--;
    };
};