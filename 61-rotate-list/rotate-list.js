/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function findNthNode(temp,n){
    n = n-1;
    while(n>0 && temp!=null){
        temp = temp.next;
        n--;
    }
    return temp;
}

var rotateRight = function(head, k) {
    if(head===null || k===0)return head;
    let tail = head;
    let len = 1;
    while(tail.next!==null){
        tail = tail.next;
        len+=1;
    }
    if(k%len===0)return head;
    k = k%len;
    tail.next = head;
    let newLastNode = findNthNode(head,len-k);
    head = newLastNode.next;
    newLastNode.next = null;
    return head;
};