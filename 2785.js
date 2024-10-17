var isVowel = function(v){
  return 'aeiou'.includes(v.toLowerCase());
}

var sortVowels = function(s) {
  let v = [];
  s = s.split('');
  for(let i = 0; i<s.length;i++){
    if(isVowel(s[i])){
      v.push(s[i]);
      s[i] = '_';
    }
  }
  console.log(v);
  v = v.sort((x,y) => x.charCodeAt(0) - y.charCodeAt(0));
  console.log(v);
  let j = 0;
  for(let i = 0;i<s.length;i++){
    if(s[i] === '_'){
      s[i] = v[j++];
    }
  }
  console.log(v);
  return s.join('');
};


console.log(sortVowels("lEetcOde"));
console.log(sortVowels("lYmpH"));

