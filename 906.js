

function reverse(n){
  let sum = 0;
  while(n !== 0){
    sum *= 10;
    sum += n%10;
    n = Math.floor(n/10);
    console.log(n);
  }
  return sum;
}

function isPalindrome(k){
  return  reverse(k) === k;
}


function asd(k){
  let c = 0;
  for(let i = 1;i<k;i++){
    if(isPalindrome(i**2) && i**2 < k){
      c++;
      console.log(i**2);
    }
  }
  return c;
}

console.log(asd(1));




console.log(reverse(5432));
