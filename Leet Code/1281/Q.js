function runProgram(input) {
    subtractProductAndSum(input)
}
var subtractProductAndSum = function (n) {
    let product = 1;
    let sum = 0;
    while (n != 0) {
        let digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10)
    }
    return (product - sum)
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`234`);
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