function sumFibs(num) {
  let first = 1;
  let second = 1;
  let third = 2;
  let sum = 2;
  // console.log('test')

  for (;third <= num;) {
    if(third % 2 !== 0) {
      sum += third; 
      console.log(sum)
    }
    third = first + second;
    console.log("third = " + third);

    first = second;
    second = third;

    
  }
    
  return sum;
}

sumFibs(75025);