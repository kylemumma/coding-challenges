function sockMerchant(n, ar) {
    let amountOfEachSock = {};
    for (let i = 0; i < n; i++) {
        if (!(ar[i].toString() in amountOfEachSock)) {
            amountOfEachSock[ar[i].toString()] = 0;
        }
        amountOfEachSock[ar[i].toString()]++;
    }

    let numOfPairs = 0;
    for (let key in amountOfEachSock) {
        numOfPairs += parseInt(amountOfEachSock[key] / 2);
    }
    
    return numOfPairs;
}