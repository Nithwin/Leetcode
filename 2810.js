var finalString = function(s) {
  let a = '';
  for(let i = 0;i<s.length;i++){
    if(s[i] === 'i'){
      let tmp = '';
      for(let j = a.length -1;j>=0;j--){
        tmp += a[j];
      }
      a = tmp;
    }
    else{
      a += s[i];
    }

  }
  return a;
};

console.log(finalString( s = "string"));
