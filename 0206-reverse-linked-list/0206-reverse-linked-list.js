/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let res = {}; 
    let values = [];
    let linkCount = 1;
    let node = head;
    let reversedNode = res;
    
    if(head === null || node.next === null) return head;
    
    do {
        values.push(node.val);
        node = node.next;
        linkCount++
    } while (node.next !== null)
    
    values.push(node.val);
    let reversed = values.reverse();
    
    for(let i = 0; i < linkCount; i++) {
        reversedNode.val = reversed[i];
        if(i < linkCount - 1) {
            reversedNode.next = {}
        } else {
            reversedNode.next = null;
        }
        
        reversedNode = reversedNode.next;
    }
    

    return res;
};