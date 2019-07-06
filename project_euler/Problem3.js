function primeFactors(num) {
	let factors = [];

	for(let i = 0; i <= Math.sqrt(num); i++){
		if(num % i == 0) {
			factors.push(i);
		}
	}

	console.log("finished finding factors");

	let primeFactors = [];
	factors.forEach(factor => {
		if(isPrime(factor)){
			primeFactors.push(factor);
		}
	});

	return primeFactors;
}

const fs = require("fs");
const primesJSON = JSON.parse(fs.readFileSync("primes.json"));
const primeList = primesJSON.primes;

function isPrime(num) {
	if(primeList.includes(num))
		return true;
	return false;
}

console.log(primeFactors(600851475143));
