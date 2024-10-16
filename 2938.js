
var minimumSteps = function(s) {
  let wc = 0;
  let swap = 0;
  for(let c = 0;c<s.length;c++){
    if(s[c] === '0'){
      swap +=  c -wc ;
      wc++;
    }
  }
  return swap;
};


console.log(minimumSteps("101"));//1
console.log(minimumSteps("100"));//2
console.log(minimumSteps("0111"));//0
console.log(minimumSteps("11000111"));//6
