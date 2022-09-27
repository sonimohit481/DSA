/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    s = s.trim().split("");
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "}" || s[i] === "]" || s[i] === ")") {
            if (ans.length === 0) {
                return false;
            }
            else {
                if (ans[ans.length - 1] === "(" && s[i] === ")") {
                    ans.pop();
                }
                else if (ans[ans.length - 1] === "[" && s[i] === "]") {
                    ans.pop();
                }
                else if (ans[ans.length - 1] === "{" && s[i] === "}") {
                    ans.pop();
                }
                else {
                    return false;
                }
            }
        }
        else {
            ans.push(s[i]);
        }
    }
    if (ans.length === 0) {
        return true;
    }
    else {
        return false;
    }


};
function runProgram(input) {
    isValid(input)
}

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`()[]{}}`);
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