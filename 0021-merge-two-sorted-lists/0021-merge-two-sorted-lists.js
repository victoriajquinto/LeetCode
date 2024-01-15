/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //declare an array to store values of both lists
    
    if (list1 === null && list2 === null) {
        return null;
    }
    
    let values = [];
    
    let node1 = list1;
    let node2 = list2; 
    
    let res = {};
    let resNode = res;
    
    //iterate through list1, push values into values array
    while (node1) {
        values.push(node1.val);
        node1 = node1.next;
    }
    
    //iterate through list2, push values into values array
    while (node2) {
        values.push(node2.val);
        node2 = node2.next;
    }
    
    //sort values array
    values.sort((a,b) => a-b);
    
    //rebuild a new list referencing sorted values array
    for(let i = 0; i < values.length; i++) {
        resNode.val = values[i];
        
        if(i < values.length - 1) {
            resNode.next = {};
        } else {
            resNode.next = null;
        }
        
        resNode = resNode.next;
    }
    
    return res;
};