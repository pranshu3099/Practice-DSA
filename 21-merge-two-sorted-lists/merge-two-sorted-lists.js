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
    if(list1===null)return list2;
    else if(list2===null)return list1;
    let temp1 = list1;
    let temp2 = list2;
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;
    while (temp1 !== null && temp2 !== null) {
      if (temp1.val < temp2.val) {
        temp.next = temp1;
        temp = temp1;
        temp1 = temp1.next;
      } else {
        temp.next = temp2;
        temp = temp2;
        temp2 = temp2.next;
      }
    }
    if (temp1) temp.next = temp1;
    if (temp2) temp.next = temp2;
    return dummyNode.next;
};