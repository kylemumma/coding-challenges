function gcd(a, b) {
    for(let i = Math.min(a, b); i >= 1; i--) {
        if(a % i == 0 && b % i == 0) {
            return i;
        }
    }
    return null;
}

function coprime(n) {
    for(let a = n - 2; a >= 1; a--){
        if(gcd(a, n) == 1) {
            return a;
        }
    }
    return null;
}

console.log(coprime(4));