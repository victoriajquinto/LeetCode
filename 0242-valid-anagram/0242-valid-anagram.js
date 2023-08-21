/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        //split s into array and sort
    let sArray = s.split('').sort()
    //split t into array and sort
    let tArray = t.split('').sort();
    //compare length
    if(sArray.length === tArray.length){
        //loop through s. for each element: 
        for(let i = 0; i < sArray.length; i++) {
            //if s[i] doesn't match t[i]
            if(sArray[i] !== tArray[i]) return false;
        }
        return true;
    } else { //length not equal -> false
        return false;
    } 
    
};