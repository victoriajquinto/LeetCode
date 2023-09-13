/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeft = [];
    let maxRight = [];
    let shorterWall = [];
    let totalVol = 0;
    let current = 0;
    //find max value on left side at each position, starting from the beginning of array
    for(let i = 0; i < height.length; i++){
        //push current into maxleft
        maxLeft.push(current);
        //compare current with current element, assign current to taller of the two
        current = Math.max(current, height[i]);
    };
    //reset current to 0
    current = 0;
    //find max value of right side at each position, starting from the end of array
    for (let i = height.length-1; i > -1; i--) {
        //push current into maxRight
        maxRight.push(current);
        //compare current with current element, assign current to taller of the two 
        current = Math.max(current, height[i]);
    };

    maxRight.reverse();
    //at each position, find the shorter of maxleft and maxRight
    for (let i = 0; i < height.length; i++) {
        //compare maxleft and maxRight, find min
        let shorter = Math.min(maxLeft[i], maxRight[i]);
        //push min into shorterWall;
        shorterWall.push(shorter);         
    }

    // at each position, compare min with element in height array
    for (let i = 0; i < height.length; i++) {
        //if min is greater than height, add difference to total volume
        if(shorterWall[i] - height[i] > 0) {
            totalVol += shorterWall[i] - height[i]
        }
    }

    return totalVol;
    
};