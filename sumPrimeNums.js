function sumPrimes(num) {
  let result = 0; //initial result
  
  function getPrimes (max) {
      
      let primes = [];  //to hold prime nums
      let notPrimes = []; //to hold composite nums
      let i, j; //i = placeholder for 2 (1st prime)/j = iterators to check for prime
      
      for (i = 2; i <= max; i++) {
        if (!notPrimes[i]) {
        // i which is 2 has not been marked yet as prime 
        primes.push(i);  //= prime so push 2 to primes array
        
        //j is the next num to check
        for (j = 2*i; j <= max; j += i) {
          notPrimes[j] = true; //j will be notPrimes
        }
      }
    }

    return primes; //returns array of prime nums up till the max num param
  }
	
	//now, add nums in primes array to get total
	let primes = getPrimes(num);
  for (let p = 0; p < primes.length; p++) {
    result += primes[p];
  }

  return result;
}

// test here
sumPrimes(10);

 