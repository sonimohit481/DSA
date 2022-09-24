function primeSumUp(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (prime(i)) {
            sum += i;
        }
    }
    console.log(sum)

}
function prime(n) {
    if (n >= 2) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
