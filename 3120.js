var numberOfSpecialChars = function(word) {
  word = [...new Set(word.split(''))];
  let c = 0;
  let lower = new Map(),upper = new Map();
  for(i of word){
    if(i >= 'A' && i <= 'Z'){
      upper.set(i,0);
    }
    else{
      lower.set(i,0)
    }
  }
  for(i of lower){
    if(upper.has(i[0].toUpperCase())){
      c++;
    }
  }
  return c;
}

console.log(numberOfSpecialChars("aaAbcBC"));
