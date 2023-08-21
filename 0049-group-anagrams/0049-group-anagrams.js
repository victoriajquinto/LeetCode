/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     //if strs is empty or only has one element
    if(!strs.length || strs.length === 1) {
        //return [[strs]]
        return [strs];
    }
    //create an object to store anagrams list
    let anagramsList = {};
    //loop through the strs array. for each word: 
    for(let i = 0; i < strs.length; i++) {
        //copy, split, and sort chracters in each word
        let key = strs[i].split('').sort();
        //if sorted word exists in anagrams list, 
        if(anagramsList[key]){
            //push element into corresponding property's value
            anagramsList[key].push(strs[i]);
        //otherwise, if sorted word does not exists in anagrams list, 
        } else {
            //create property and set value as empty array
            anagramsList[key] = [strs[i]];
        }
    }
    //use Object.values(anagrams list) to return output nested inside a larger array
    return Object.values(anagramsList);
    
};