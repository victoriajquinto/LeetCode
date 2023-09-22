/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 /*
 general strategy:
  add s[r] to map - map.set()
  find window length at each iteration = r - l + 1
  determine count of most frequent character - by finding largest value in Map
  if windowLength - mostFreqCharCount <= k, r++, result=windowLength
  otherwise, l++, remove previous s[l] from map

 */
var characterReplacement = function(s, k) {
    // let result = 0; 
    let result = 0;
    // let map = new Map();
    let map = new Map();
    // let l = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      //update map to account for current character at r
        map.set(s[r], 1 + (map.get(s[r]) || 0))

      //calculate new window length
      let windowLength  = r - l + 1;
      
      let mostFreqCharCount = Math.max(...map.values());
      if(windowLength - mostFreqCharCount <= k) {
        result = Math.max(windowLength, result);
      } else {
        map.set(s[l], map.get(s[l]) - 1);
        l++;
      }
    }

    return result;
};