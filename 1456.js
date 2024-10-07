const isVowel = (s)=>{
  return new Set(['a','e','i','o','u']).has(s);
}

var maxVowels = function(s, k) {
  let n = s.length;
  let arr = new Array(n+1).fill(0);
  for(let i = 1 ;i<=n;i++){
    arr[i] = arr[i-1] + Number(isVowel(s[i-1]));
  }
  let max = 0;
  for(let i = k;i<=n;i++){
     max = Math.max(arr[i] - arr[i-k],max);
  }
  return max;
};


console.log(maxVowels("ramadan",2));

