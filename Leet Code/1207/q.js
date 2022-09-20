// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var uniqueOccurrences = function (arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] >= 1) {
//             obj[arr[i]] = obj[arr[i]] + 1;

//         }
//         else {
//             obj[arr[i]] = 1
//         }
//     }
//     let obj2 = {};
//     for (let keys in obj) {
//         if (obj2[obj[keys]] >= 1) {
//             obj2[obj[keys]] = obj2[obj[keys]] + 1;

//         }
//         else {
//             obj2[obj[keys]] = 1
//         }
//     }
//     for (let keys in obj2) {
//         if (obj2[keys] > 1) {
//             return false
//         }
//     }
//     // console.log(obj2);
//     return true
// };
// -------------------------------------------- second solution
// const obj = {}
// for (let i in arr) {
//     obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
// }
// const ansArray = Object.values(obj)
// return !ansArray.filter((i, idx) => ansArray.indexOf(i) !== idx).length
// ---------------------
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    uniqueOccurrences(input);
}
var uniqueOccurrences = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] >= 1) {
            obj[arr[i]] = obj[arr[i]] + 1;

        }
        else {
            obj[arr[i]] = 1
        }
    }
    let obj2 = {};
    for (let keys in obj) {
        if (obj2[obj[keys]] >= 1) {
            obj2[obj[keys]] = obj2[obj[keys]] + 1;

        }
        else {
            obj2[obj[keys]] = 1
        }
    }
    for (let keys in obj2) {
        if (obj2[keys] > 1) {
            return false
        }
    }
    // console.log(obj2);
    return true
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`1 2 3 5 4 7`);
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