function runProgram(input) {
    input
    mySqrt(input);
}
var mySqrt = function (x) {
    // first approach

    // return Math.floor(Math.sqrt(x));
    let i = 0, j = x;
    let ans = -1;
    while (i < j) {
        i

        j
        let mid = Math.floor(i + (j - i) / 2);
        mid
        let s = mid * mid;
        s
        if (s === x) {
            mid
            return mid;
        }
        else if (s < x) {
            ans
            s
            mid
            ans = mid;
            i = mid + 1;
        }
        else {
            mid
            j = mid - 1;
        }

    }
    ans
    return ans;
    // -----therd
    // if (x === 0 || x === 1) return x;
    // let counter = 2;
    // while (true) { if (counter * counter > x) break; counter++ } return counter - 1;
};
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`9`);
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