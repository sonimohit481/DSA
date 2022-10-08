
// // function ListNode(val, next) {
// //     this.val = (val === undefined ? 0 : val)
// //     this.next = (next === undefined ? null : next)
// // }
// // var addTwoNumbers = function (arr1, arr2) {
// //     // let demo1 = l1, demo2 = l2;
// //     // let arr1 = [], arr2 = [];
// //     // while (demo1.next !== null) {
// //     //     let x = demo1.val
// //     //     arr1.push(x);
// //     //     demo1 = demo1.next;
// //     // }
// //     // arr1.push(demo1.val);
// //     // while (demo2.next !== null) {
// //     //     let x = demo2.val;
// //     //     arr2.push(x);

// //     //     demo2 = demo2.next;
// //     // }
// //     // arr2.push(demo2.val);
// //     // console.log(arr2)





// //     // -----------------------------------
// //     let arr = [];
// //     let carry = 0, i = 0, j = 0;
// //     while (i < arr1.length && j < arr2.length) {
// //         let x = arr1[i] + arr2[j] + carry;

// //         if (x > 9) {
// //             let y = x % 10;

// //             arr.push(y);
// //             carry = Math.floor(x / 10);

// //         }
// //         else {
// //             arr.push(x);
// //             carry = 0
// //         }
// //         i++; j++;
// //     }

// //     while (i < arr1.length) {
// //         let x = arr1[i] + carry;
// //         if (x > 9) {
// //             let y = x % 10;
// //             arr.push(y);
// //             carry = x / 10;
// //         }
// //         i++;
// //     }
// //     while (j < arr2.length) {
// //         j
// //         let x = arr2[j] + carry;
// //         if (x > 9) {
// //             let y = x % 10;
// //             arr.push(y);
// //             carry = x / 10;
// //         }
// //         j++;
// //     }
// //     if (!carry == 0) {
// //         arr.push(carry);
// //     }
// //     return
// // };
// // let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// // addTwoNumbers(l1, l2)




// // -------submitted answer

// let head = new ListNode();
// let cur = head;
// let carry = 0;
// while (l1 || l2) {
//     let l1Val = l1 ? l1.val : 0;
//     let l2Val = l2 ? l2.val : 0;
//     let sum = l1Val + l2Val + carry
//     carry = sum > 9 ? 1 : 0;
//     if (l1) {
//         l1.val = sum % 10;
//         cur.next = l1;
//     } else {
//         l2.val = sum % 10;
//         cur.next = l2;
//     }
//     cur = cur.next;
//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
// }
// if (carry > 0) {
//     cur.next = new ListNode(1);
// }
// return head.next;