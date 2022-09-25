// (method) Array < any >.unshift(...items: any[]): number
// Inserts new elements at the start of an array, and returns the new length of the array.
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`1010
    1011`);
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
function runProgram(input) {
    input = input.trim().split("\n");
    let a = input[0].trim();
    let b = input[1].trim();
    // addBinary(a,b);
    addBinary(a, b)
}
function addBinary(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let c = 0;
    let ans = [];
    while (i >= 0 || j >= 0) {
        i
        j
        // getting only first value 
        let n1 = +a[i] || 0;
        let n2 = +b[j] || 0;
        let sum = n1 + n2 + c;
        // checking the sum
        if (sum === 0) {
            // adding the value in first so we dont have to reverse the result at the end;
            ans.unshift(0);
            c = 0;
        }
        else if (sum === 1) {
            ans.unshift(1);
            c = 0;
        }
        else if (sum === 2) {
            ans.unshift(0);
            c = 1;
        }
        else if (sum === 3) {
            ans.unshift(1);
            c = 1;
        }
        i--;
        j--;
    }
    if (c === 1) {
        ans.unshift(1);
    }
    return ans;
};
