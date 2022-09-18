function check(A, B, N) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    for (let i = 0; i < N; i++) {
        if (A[i] !== B[i]) {
            return 0
        }
    }
    return 1;
    // code here
}
function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let A = input[1].trim().split(" ").map(Number);
    let B = input[2].trim().split(" ").map(Number);
    check(A, B, N)
}

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`5
1 2 5 4 0
2 4 5 0 1`);
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