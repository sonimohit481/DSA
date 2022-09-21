var pivotIndex = function (nums) {
    // solved solution
    let currentSum = 0;
    // finding total sum
    const sum = nums.reduce((acc, cur) => acc + cur)

    for (let i = 0; i < nums.length; i++) {
        // checking  the left sum with the rest sum no need to  assign right sum its auto do it
        if (currentSum === sum - currentSum - nums[i]) {
            return i
        }
        currentSum += nums[i]
    }
    return -1
    // ---second approach
    // var total = nums.reduce(function (x, y) {
    //     return x + y;
    // }, 0);

    // let leftsum = 0, rightsum = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     rightsum = total - leftsum - nums[i];
    //     if (rightsum == leftsum) {
    //         return i;
    //         break;
    //     }
    //     leftsum += nums[i];
    // }
    // return -1;
};
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    pivotIndex(input);
}

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`1 7 3 6 5 6`);
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