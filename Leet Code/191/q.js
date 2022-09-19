function runProgram(input) {
    input = +input;
    hammingWeight(input)
}
var hammingWeight = function (n) {
    let count = 0;
    while (n != 0) {
        if (n & 1) {
            count++;
        }
        n = n >> 1
    }
    return count;
    // return n

};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`11111111111111111111111111111101`);
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