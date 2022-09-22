function runProgram(input) {
    reverseWords(input);
}

var reverseWords = function (s) {
    s = s.trim().split(" ");
    s
    for (let i = 0; i < s.length; i++) {
        let arr = reverse(s[i])
        s[i] = arr;
    }
    s = s.join(" ");
    return s;
};

function reverse(array) {
    array = array.trim().split("");
    let i = 0, j = array.length - 1;
    while (i < j) {
        [array[i], array[j]] = [array[j], array[i]]
        i++; j--;
    }
    array = array.join("");
    array
    return array;
}
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`Let's take LeetCode contest`);
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