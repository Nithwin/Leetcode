function SqSum(num){
  sum = 0;
  while(num > 0){
    sum += Math.pow(num%10,2);
    num =  Math.floor(num/10);
  }
  return sum;
}

var isHappy = function(n) {
  while(n>3){
     n = SqSum(n);
     console.log(n);
  }
  return n===1;
};

console.log(isHappy(n = 1111111));
