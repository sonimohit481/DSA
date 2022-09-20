function runProgram(input) {
    input = input.trim().split("\n")
    let [n, p, q] = input[0].trim().split(" ").map(Number);
    if (p && q) {
        return Loser;
    }

    let parr = input[1].trim().split(" ").map(Number);
    let qarr = input[2].trim().split(" ").map(Number);
    let newarr = performmerge(parr, qarr);
    let obj = {};
    for (let i = 0; i < newarr.length; i++) {
        if (obj[newarr[i]] >= 1) {
            obj[newarr[i]] = obj[newarr[i]] + 1
        }
        else {
            obj[newarr[i]] = 1;
        }
    }
    var size = Object.keys(obj).length;
    if (size === n) {
        console.log("Winner");
    }
    else {
        console.log("Loser");

    }
}

function performmerge(arr1, arr2) {
    var sorted = []
    var left = 0, right = 0, count = 0;
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] <= arr2[right]) {
            sorted[count] = arr1[left];
            left++;
            count++;
        }
        else {
            sorted[count] = arr2[right];
            right++;
            count++;
        }
    }
    while (left < arr1.length) {
        sorted[count] = arr1[left];
        left++;
        count++;
    }
    while (right < arr2.length) {
        sorted[count] = arr2[right];
        right++;
        count++;
    }
    sorted
    return sorted;
}
if (process.env.USERNAME === "Mohit Soni") {
    runProgram(`4 3 2
1 2 3
2 3`);
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