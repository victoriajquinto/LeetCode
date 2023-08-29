/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //if s is empty string, return true

  //remove spaces and punctuation from string
  s = s.replace(/[^A-Z0-9]/ig, '').toLowerCase();

  //find the halway point of the length of the string. round up to nearest integer
  let numOfComparisons = Math.ceil(s.length/2) + 1;
  
  //create left pointer and right pointer that are set to the characters at ends of the string, respectively
  let [leftPointer, rightPointer] = [0, s.length-1];

  //loop through the string, where final expression ==== i < midpoint + 1 
  for(let i = 0; i < numOfComparisons; i++) {
    //if char at leftpointer === char at rightpointer,
    if (s[leftPointer] === s[rightPointer]) {
      //increment leftPointer, 
      leftPointer++;
      //decrement rightPointer
      rightPointer--;
      //continue
      continue;
    //otherwise, 
    } else {
      //return false
      return false;
    }

    
  }
  //if loop concludes, i.e., else statement isn't triggered, return true
  return true;
};