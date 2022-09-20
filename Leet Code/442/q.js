// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDuplicates = function (nums) {

//     let obj = {};
//     let arr = [];
//     for (let i in nums) {
//         obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
//         if (obj[nums[i]] > 1) {
//             arr.push(nums[i])
//         }
//     }
//     // console.log(arr)
//     return arr;
// };
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    findDuplicates(input)
}
var findDuplicates = function (nums) {

    let obj = {};
    let arr = [];
    for (let i in nums) {
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
        if (obj[nums[i]] > 1) {
            arr.push(nums[i])
        }
    }
    // console.log(arr)
    return arr;
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`1 1 2  3 3 5 6 9 8 4 7`);
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