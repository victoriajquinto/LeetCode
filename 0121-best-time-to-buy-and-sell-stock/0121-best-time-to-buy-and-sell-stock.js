/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0; //index of left pointer
    let right = 1; //index of right pointer
    let maxProfit = 0;

    //while left is to the left of right
    for(let i = 0; i < prices.length; i++){
        //if value at left is greater than value at right
        if(prices[left] > prices[right]) {
            //reassign left to where right is
            left = right;  
            //increment right to be value after left
            right = left + 1;
        //else if value at left is less than value a right
        } else {
            //if difference between values at pointers is greater than current maxProfit
            if (prices[right] - prices[left] > maxProfit) {
                //reassign maxProfit to that difference
                maxProfit = prices[right] - prices[left];
            }
            //increment right
            right++;
        }
    
    }
    return maxProfit;
};