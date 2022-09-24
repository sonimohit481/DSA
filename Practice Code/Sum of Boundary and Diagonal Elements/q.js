function sumOfBoundaryAndDiagonal(matrix) {
    let n = matrix.length;
    let sum = 0;
    let s = 0;
    let m = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
        sum += matrix[0][i] + matrix[n - 1][i];
        if (i > 0 && i < n - 1) {
            sum += matrix[i][0] + matrix[i][n - 1];
            s += matrix[i][i] + matrix[i][n - 1 - i];
        }

    }
    if (n % 2 === 0) {
        let result = sum + s
        console.log(result);
    }
    else {
        let result = sum + s - matrix[m][m]
        console.log(result);
    }
    return 0;
}
