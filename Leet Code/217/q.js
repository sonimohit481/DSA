// accepted answer
/**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {

//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]] >= 1) {
//             obj[nums[i]] = obj[nums[i]] + 1
//         }
//         else {
//             obj[nums[i]] = 1
//         }
//     }
//     // console.log(obj)
//     for (let key in obj) {
//         if (obj[key] >= 2) {
//             return true;
//         }
//     }
//     return false;
// };
// --------------------
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    containsDuplicate(input)
}
var containsDuplicate = function (nums) {

    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] >= 1) {
            obj[nums[i]] = obj[nums[i]] + 1
        }
        else {
            obj[nums[i]] = 1
        }
    }
    // console.log(obj)
    for (let key in obj) {
        if (obj[key] >= 2) {
            return true;
        }
    }
    return false;
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`1 2 3 1`);
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