/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

//CHECK ROWS
    
    let rowArray = [];
    //for each row
    for (let row = 0; row < 9; row++) {
        //for each element in row
        for (let col = 0; col < 9; col++) {
            //convert each element to number.
            let num = parseInt(board[row][col]);
            if (num) {
                //if row @ element is undefined,
                if (!rowArray[num]) {
                    //assign it to 1
                    rowArray[num] = 1;
                //otherwise, 
                } else {
                    //increment row @ element
                    rowArray[num]++;
                    //if value at row @ element = 2
                    if (rowArray[num] === 2) {
                        debugger;
                       return false; 
                    }
                    
                } 
            }
        }
        //reset row to empty array
        rowArray = [];
    }
        
            
//CHECK COLUMNS 
    let columnArray = [];
    //for each column
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            // convert element to number
            let num = parseInt(board[row][col]);
            //if converted element is an actual number via parseInt() 
            if (num) {
                //if columnArray at element is undefined
                if (!columnArray[num]) {
                    //assign it to one
                    columnArray[num] = 1;
                //otherwise,
                } else {
                    //incremenet columnArray at element
                    columnArray[num]++
                    //if value at columnArray at element = 2
                     if (columnArray[num] === 2) {
                         debugger;
                         return false;
                     }
                }
            }
        }
        //reset columnArray to empty array
        columnArray = [];
    }

// CHECK BOXES
    let boxNumCount = {};
    for (let superRow = 0; superRow < 9; superRow += 3) {
        for(let superCol = 0; superCol < 9; superCol += 3) {
            for (let row = superRow; row < superRow + 3; row++) {
                for(let col = superCol; col < superCol + 3; col++) {
                    if(col % 3 === 0 && row % 3 === 0) {
                        // debugger;
                        boxNumCount = {};
                    };
                    // debugger;
                    let num = parseInt(board[row][col]);
                    if (num) {
                        if (!boxNumCount[num]) {
                            boxNumCount[num] = 1;
                        } else {
                            boxNumCount[num]++
                                if (Object.values(boxNumCount).includes(2)){
                                    debugger;
                                    return false;
                                };
                        }
                    }
                }
            }
        }
    }

    return true;

};