/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //create a set
    let substring = new Set();
    let longest = 0;
    let left = 0;

    //loop through s where i = right
    for (let right = 0; right < s.length; right++) {
        while(substring.has(s[right])) {
            substring.delete(s[left]);
            left++;
        }
        substring.add(s[right]);

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};