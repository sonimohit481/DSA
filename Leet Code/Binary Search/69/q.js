function runProgram(input) {
    mySqrt(input);
}
var mySqrt = function (x) {
    // second approach
    return Math.floor(Math.sqrt(x));
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`8`);
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