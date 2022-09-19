// cpp solution
// class Solution {
//     public:
//         int reverse(int x) {
//     int ans = 0, i = 0;
//             while (x != 0) {
//         int digit = x % 10;
//                 x = x / 10;
//                 if ((ans > INT_MAX / 10) || (ans < INT_MIN / 10)) {
//                     return 0;
//                 }
//                 ans = (10 * ans) + digit;
//                 i++;
//             }
//             return ans;
//         }
// };
function runProgram(input) {
    reverse(input)
}
var reverse = function (x) {
    let ans = 0, i = 0;
    while (x != 0) {
        let digit = x % 10;
        let c = x.length;
        x = Math.floor(x / 10)
        ans = ((10) * ans) + digit;
        i++;
    }
    return ans
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`123`);
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