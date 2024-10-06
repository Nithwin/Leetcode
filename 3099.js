var sumOfTheDigitsOfHarshadNumber = function(x) {
  let sum = 0;
  let a = x;
  while(x>0){
      sum += x%10;
      console.log(sum);
      x= Math.floor(x/10);
      console.log(x);
  }
  console.log(sum,x,a);
  if((a%sum) === 0){
      return sum;
  }
  else{
      return -1;
  }
};

console.log(sumOfTheDigitsOfHarshadNumber(18))
