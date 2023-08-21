/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //create output array
    let output = [];
    //loop through nums (i)
    for(let i = 0; i < nums.length; i++){
        //create product = 1
        let product = 1;
        //loop through nums again (j)
        for(let j = 0; j < nums.length; j++){

            if( i === nums.length-1 && j === nums.length-1) {
                output.push(product);
                return output;
            } else if (j === i) {
                continue;
            } 
            
            //multiply product by current num (num[j])
            product *= nums[j];
            //if at the last element of nums
            if(j === nums.length-1) {
                //push product into output array
                output.push(product);
            }
        }
    }
    
};