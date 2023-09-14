/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //create a new set
    let substring = new Set();
    //create left pointer set to first index of s
    let left = 0;
    //create longest length variable, set to 0;
    let longest = 0;

    //loop through s with incrementer = right pointer
    for(let right = 0; right < s.length; right++) {
        //while set includes current letter
        while (substring.has(s[right])) {
            //remove index at left pointer
            substring.delete(s[left]);
            //increment left pointer
            left++;
        }
        //add current character to set 
        substring.add(s[right]);
        // if size of substring > longest,
        if(substring.size > longest){
            //longest = size of substring
            longest = substring.size;
        }
    }

    return longest;
};