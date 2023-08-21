/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
       //create elements array
    let elements = [];
    //create counts array
    let counts = [];
    //loop through nums. for each element
    for(let i = 0; i < nums.length; i++) {
        //create variable to house value of indexOf element
        let index = elements.indexOf(nums[i]);
        //if variable < 0, 
        if(index < 0) {
            //push element into elements array
            elements.push(nums[i]);
            //push 1 into count array
            counts.push(1);
        //otherwise, 
        } else {
            //increment count at variable
            counts[index]++;
        }
    }
    //create output array
    let output = [];

    //loop k-1 times:
    for(let j = 0; j < k; j++){
        //find indexOf(Math.max(count)) to find the index in count with the largest number
        let indexOfMax = counts.indexOf(Math.max(...counts));
        //push elements at that index into output array
        output.push(elements[indexOfMax]);
        //splice both the element and its count from respective arrays
        elements.splice(indexOfMax, 1);
        counts.splice(indexOfMax, 1);
    }

    return output;
    
};