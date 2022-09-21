// accepted ans
// 
// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var peakIndexInMountainArray = function (arr) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         let mid = Math.floor(start + (end - start) / 2);
//         if (arr[mid] < arr[mid + 1]) {
//             start = mid + 1;
//         }
//         else {
//             end = mid
//         }
//     }
//     return start;
// };


// there arde only three conditions are possible for this solution 1the startting accending array the pean and the last the descendong array
// link 1.arr[i]<arr[i + 1]
//      2.arr[i-1]<arr[i]>arr[i+1]
//      3.arr[i]>arr[i+1]

var peakIndexInMountainArray = function (arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        // checking if the mid value lie on acc part peak part or the dec part
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else {
            // neglecting the other condn and doing this because if the mid value lies in the dec part and we do a s=m+1 then miss the miod value
            // also if accdinf to ablove we do ens =mid-1; we will also loose the middle value
            end = mid
        }
    }
    return start;
};
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    peakIndexInMountainArray(input)
}

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`0 2 1 0`);
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