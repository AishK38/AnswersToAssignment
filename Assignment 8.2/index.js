function checkIfPrime(x) {
    let flag = true;
    for (i = 2; i <= x - 1; i++)
        if (x % i == 0) {
            flag = false;
            break;
        }
    return flag;
}

function findNextPrime(x) {

    if (x <= 1)
        return 2;

    let prime = x;
    let found = false;

    while (!found) {
        prime++;

        if (checkIfPrime(prime))
            found = true;
    }

    return prime;
}

console.log(checkIfPrime(7));
console.log(findNextPrime(7) - 7);