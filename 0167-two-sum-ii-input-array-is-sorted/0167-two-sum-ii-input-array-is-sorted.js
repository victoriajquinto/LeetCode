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

  //loop through the array. for each element
  for(let left = 0; left < numbers.length; left++) {
    let leftAddend = numbers[left];
    for(let right = numbers.length-1; right > left; right--) {
        let rightAddend = numbers[right];
        if(leftAddend + rightAddend === target) {
            return [left+1, right+1];
        }
    }
    
  }
};