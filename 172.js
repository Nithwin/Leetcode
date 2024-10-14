function fact(n){
  if(n <= 1 ) return 1;
  return n*fact(n-1);
}


var trailingZeroes = function(n) {
  let s = fact(n).toString();
  let count = 0;
  while(s.includes("0")){
      s = s.replace('0','');
      count++;
  }
  return count;
};

console.log(fact(7));
