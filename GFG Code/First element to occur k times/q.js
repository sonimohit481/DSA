function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);

    let arr = input[1].trim().split(" ").map(Number);
    firstElementKTime(arr, n, k);

}
function firstElementKTime(arr, n, k) {
    let obj = {};
    if (k > 1) {
        for (let i = 0; i < n; i++) {

            if (obj[arr[i]] >= 1) {
                obj[arr[i]] = obj[arr[i]] + 1;
                if (obj[arr[i]] === k) {
                    // arr[i]
                    return arr[i];
                }
            }

            else {
                obj[arr[i]] = 1;
            }
        }
        return -1
    }
    else {
        return arr[0]
    }

}
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`7 2
1 7 4 3 4 8 7`);
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