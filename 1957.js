
var makeFancyString = function(s) {
  let c = 1,i;
  let str = "";
  for(i = 0;i<s.length-1;i++){
      if(s[i] != s[i+1]){
        str += s[i];
      }
      else if(c < 3){
        str += s[i];
        c++;
      }
      else{
        c=0;
      }
  }
  if(s[i] != s[i-1]){
    str += s[i];
  }
  console.log(str);
};


console.log(makeFancyString("leeetcode"));
