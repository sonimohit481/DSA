function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let t = 0; t < test; t++) {
        let N = +input[line].trim();
        line++;
        let array1 = input[line].trim().split(" ").map(Number);
        line++;
        let array2 = input[line].trim().split(" ").map(Number);
        line++;
        // let obj = {}
        let i = 0, j = N - 1, count = 0;
        // insertation in two sorted
        // || is changed with && 
        while (i < N && j >= 0) {
            if (array1[i] === array2[j]) {
                // obj[array1[i]] ? obj[array1[i]]++ : obj[array1[i]] = 1;
                count++;
                // count
                i++;
                // i
                j--;
                // j
            }
            else if (array1[i] > array2[j]) {
                j--;
                // j
            }
            else if (array1[i] < array2[j]) {
                i++;

                // i
            }
            // i
            // j
            // count
            // obj

        }
        console.log(count)
    }
}

if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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