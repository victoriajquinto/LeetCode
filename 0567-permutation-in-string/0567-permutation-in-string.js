/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
   let s1CharCount = mapString(s1); 

   for(let l = 0; l < s2.length; l++) {
        let r = l + s1.length;
        let substring = s2.substring(l, r);
        let substringCharCount = mapString(substring);

        if (s1CharCount === substringCharCount) return true;

   }

   return false;
};

var mapString = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        } else {
            map.set(s[i], map.get(s[i]) + 1);
        }
    }
    const count = Array.from(map).sort((a,b) => a[0].localeCompare(b[0]));
    return JSON.stringify(count);
}


//determine the length of s1
//create a map of s1
//sort keys of s1 set alphabetically, then json.stringify
    
//loop through s2. for each iteration, starting with l at 0 and right at l + s1Length - 1
    //create a map of substring
    //sort keys of s1 set alphabetically, then json.stringify
    //if map of s1 stringified === map of substring stringified, return true
//if loop concludes prior to if statement triggering, return false
