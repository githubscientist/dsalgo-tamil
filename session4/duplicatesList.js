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
// var deleteDuplicates = function(head) {
//     // copy the current head to a temporary head <- thead
//     let thead = head;

//     // do the following until either thead becomes null or thead.next becomes null
//     while(thead!=null && thead.next!=null){
//         // check if the thead.val is equal to the thead.next.val
//         if(thead.val == thead.next.val){
//             // if true => make thead.next = thead.next.next
//             thead.next = thead.next.next;
//         } else {
//             // else => thead = thead.next
//             thead = thead.next;
//         }
//     }
//     // return the original head
//     return head;
// };

var deleteDuplicates = function(head) {
    let thead = head;
    while(thead!=null && thead.next!=null) thead.val == thead.next.val ? thead.next = thead.next.next : thead = thead.next;
    return head;
};