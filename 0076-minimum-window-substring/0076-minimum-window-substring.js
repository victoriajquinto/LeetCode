/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 
const minWindow = function(s, t) {
    //if s or t are empty or if t is longer than is, return ""
    const missingConditions = !s.length || !t.length || (t.length > s.length)
    if (missingConditions) return '';

    //declare a variable that stores frequency map (a return value of a function)
    let freqMap = getFreqMap(t);
    //declare start and end pointers (return values of a function)
    let [start, minLength] = getPointers(s, t, freqMap)

    //return a function call takes s, start, and end. this function should return a substring of s from start to end

    return getSubstring(s, start, minLength);
    
};
//get character count for letters in t
const getFreqMap = (t) => {
    //create a map object
    let freqMap = new Map();

    //loop through t
    for(let char of t) {
        //set count in map at char
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    return freqMap;
};

const getPointers = (s, t, freqMap) => {
    //declare left pointer, right pointer, # count matches, start index, and end index
    let [ left, right, matches, start, minLength ] = [ 0, 0, 0, 0, s.length + 1 ];

    //while right pointer is less than length of s
    while(right < s.length){

        //define matches as addRightFreq(s, right, freqMap, matches) - should return a number
        matches = addRightFreq(s, right, freqMap, matches)

        //while matched === length of t 
        while (matches === t.length) {
            //define window as right - left + 1;
            window = right - left + 1; 
            //if window length is less than minLength
            if (window < minLength) {
                //start = left, //end = window
                [ start, minLength ] = [ left, window ]
                
            }
            //redefined matches = subtractLeftFreq(s, left, freqMap, matched) -- will return a number
            matches = subtractLeftFreq(s, left, freqMap, matches)
            //incremenet left
            left++
        }
        //increment right 
        right++
    }
    return [start, minLength];
};

const addRightFreq = (s, right, freqMap, matches) => {
    const char = s[right];
     //if freqMap has char
     if(freqMap.has(char)){
        //decrement value for char
        freqMap.set(char, freqMap.get(char) - 1);
        //if count for char in freqmap >= 0
        const isInWindow = 0 <= freqMap.get(char);
        if (isInWindow) matches++;
     }
    return matches;
};

const subtractLeftFreq = (s, left, freqMap, matches) => {
    const char = s[left];
    //if freqMap has char
    if (freqMap.has(char)){
        //if freqMap count for that char is 0
        const isOutOfWindow = freqMap.get(char) === 0;
        if (isOutOfWindow) matches--;
    //increment freqMap for char - use .set() and .get()
    freqMap.set(char, freqMap.get(char)+1);
    }

    return matches;
   
};
const getSubstring = (s, start, minLength) => minLength <= s.length ? s.slice(start, start + minLength) : '';


