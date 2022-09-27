// a classic back tracking problems.
function generateParenthesis(n) {
    // creating a resultant array
    const result = []
    // making a reecursion function
    function Change(opening, closing, str) {
        // if opening opening brackets and closing closing bracket become 0 we get our one solution 
        // because we one get ine and or n*2 lebgth 
        if (opening == 0 && closing == 0) {
            // pushing to the resultant array;
            result.push(str);
            return
        }
        // first applying the opening brackets
        if (opening > 0) {
            Change(opening - 1, closing, str + '(')
        }
        // backtracking point 
        if (closing > opening) {
            Change(opening, closing - 1, str + ')')
        }
    }
    Change(n, n, '')
    return result
}
function runProgram(input) {
    generateParenthesis(input);
}

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`6`);
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