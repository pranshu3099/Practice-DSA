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

function reverse(current,prev=null){
    if(current === null){
        return prev;
    }
    let forward = current.next;
    current.next = prev;
    prev = current;
    current = forward;
    return reverse(current,prev)
}

function findKthNode(temp,k){
    k-=1;
    while(k>0 && temp!=null){
        k--;
        temp = temp.next;
    }
    return temp;
}

var reverseKGroup = function(head, k) {
    if(head === null || head.next===null)return head;
    let temp = head;
    let prevNode = null;
    while(temp!==null){
        let kthNode = findKthNode(temp,k);
        if(kthNode === null){
            if(prevNode)prevNode.next = temp;
            break;
        }
        let NextNode = kthNode.next;
        kthNode.next = null;
        reverse(temp);
        if(temp === head){
            head = kthNode;
        }
        else{
            prevNode.next = kthNode;
        }
        prevNode = temp;
        temp = NextNode;

    }
    return head;
};