function f(y) {
    if(y >= 0) {
        return Math.floor(y);
    }
    return Math.ceil(y);
}

function minSum(arr, x) {
    console.log('arr:', arr, '\nx:', x);
    const arrMap = arr.map(element => (f(element / x) * x));
    console.log('mapped arr:', arrMap);
    console.log('summed arr:', arrMap.reduce((total, currentVal) => total + currentVal));
    return Math.min(sumArr(arr), sumArr(arrMap));
}

function sumArr(arr) {
    return arr.reduce((total, currentVal) => total + currentVal);
}

console.log(minSum([-7, 12, 18, -2, 9, 2, -18, -23], 3));
