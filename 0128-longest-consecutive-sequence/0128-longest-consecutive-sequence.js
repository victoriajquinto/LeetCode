/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) {
      return 0; 
  }

  //sort the array numerically 
    nums.sort((a,b) => {return a-b});

    return findLongest(nums);

  //return a call to helper function that takes the sorted array. helper function loops through the array to calculate longest streak


};

//HELPER FUNCTION
//declare helper function that calls array
function findLongest(nums) {
    //create variable to store maxScore, starting at 1
    let maxScore = 1;
    //create variable to store currentScore, starting at 1
    let score = 1;
    //loop through the array starting at the second element because we are comparing current with previous
    for(let i = 1; i < nums.length; i++) {
        let previous = nums[i-1];
        let current = nums[i];
        //if current element === previous
        if(current === previous) {
            //continue
            continue;
        // else if current element is consec follows previous
        } else if (previous === current - 1) {
            //increment currentScore, then continue
            score++;
            continue;
        // else 
        } else {
            //compare maxScore so far with currentScore so far, and reassign maxScore to the largest of the two
            maxScore = Math.max(maxScore, score);
            //because the streak is broken, reset score to 1
            score = 1;
        }
    }

    //once loop has concluded, recomapare maxScore one more time and return 
    return maxScore = Math.max(maxScore, score);
}
    

