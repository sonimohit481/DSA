// c++ sol

// class Solution {
//     public:
//         int bitwiseComplement(int n) {
//             if (n == 0) {
//                 return 1;
//             }
//         int m = n;
//         int mask = 0;
//             while (m != 0) {
//                 mask = (mask << 1) | 1;
//                 m = m >> 1;
//             }
//         int ans = (~n) & mask;
//             return ans;
//         }
// };
/**
//  * @param {number} n
//  * @return {number}
//  */
// var bitwiseComplement = function (n) {
//     //     this is the edge case 
//     if (n == 0) {
//         return 1;
//     }
//     // actuall for eg let n=5 ==> 000....0101 ===>32 bit representation then doing 
//     // the negation it become 1111....1010 and after adding some mask bit we can get the desired output  so we are mking the make bit of size n while n!=0 so we can change it 


//     let m = n;
//     let mask = 0;
//     while (m != 0) {
//         mask = (mask << 1) | 1;
//         m = m >> 1;
//     }
//     let ans = (~n) & mask;
//     return ans;
// };

// // best eg 5= 101 negative is 010 that is 2 which is the desired out put 
function runProgram(input) {
}
var bitwiseComplement = function (n) {
    //     this is the edge case
    if (n == 0) {
        return 1;
    }
    // actuall for eg let n=5 ==> 000....0101 ===>32 bit representation then doing
    // the negation it become 1111....1010 and after adding some mask bit we can get the desired output  so we are mking the make bit of size n while n!=0 so we can change it


    let m = n;
    // making a bit so it can chane the left part of the ans
    let mask = 0;
    while (m != 0) {
        mask = (mask << 1) | 1;
        m = m >> 1;
    }
    let ans = (~n) & mask;
    return ans;
};

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}