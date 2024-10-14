function isNum(s){
  return ( Number(s) > 0 && Number(s) <= 9) ? true : false;
}

var myAtoi = function(s) {
  let sign =1;
  if(s[0] === '-') sign = -1;
  let n = '';
  for(i of s){
    n += (isNum(i) === true ) ? i : '';
  }
  if(Number(n) < 2**32){
    return 2*32*sign;
  }
  else{
    return Number(n)*sign
  }
};

console.log(isNum("9"));

console.log(myAtoi( s = "13379c0d3"));
console.log(Math.round(myAtoi( "-91283472332")),2**31);
