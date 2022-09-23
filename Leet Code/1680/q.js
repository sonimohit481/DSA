function runProgram(input) {
    concatenatedBinary(input)
}
var concatenatedBinary = function (n) {
    if (n === 1) {
        return 1;
    }
    let m = (10 ** 9) + 7;
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += tobinary(i);
    }
    // str = parseInt(str)
    str = str.split("").map(Number);
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        sum += ((2 ** (str.length - i - 1)) * str[i]) % m;
    }
    return (sum % m);
};
// for converting to binary format
function tobinary(n) {
    let arr = [];
    while (n != 0) {
        arr.push(n % 2);
        n = Math.floor(n / 2);
    }
    // converting in reverse order to get the answer
    arr = reverse(arr);
    return arr.join("");
}
// for reversing the array back 
function reverse(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++; j--;
    }
    return arr;
}
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`12`);
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