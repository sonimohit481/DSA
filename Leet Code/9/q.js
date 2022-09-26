function runProgram(input) {
    isPalindrome(input);
}
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (n) {
    let ans = n.toString();
    let x = 0, y = ans.length - 1;
    while (x < y) {
        if (ans[x] === ans[y]) x++, y--;
        else return false;
    }
    return true;
};

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`121`);
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