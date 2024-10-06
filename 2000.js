var reversePrefix = function(word, ch) {
  let index = -1,i;
  let x=0;
  let y=1;
  while(x!==word.length && y!==word.length){
    if(word[x] === ch) {
      index = x;
      break;
    }
    if(word[y] === ch){
      index = y;
      break;
    }
    x+=2;
    y+=2;
  }
  i = index;
  if(index === -1) return word;
  let a = "";
  let e = "";
  index++;
  while(i!==-1 || index!==word.length){
    if(i!==-1){
      a += word[i];
      i--;
    }
    if(index!==word.length){
      e += word[index];
      index++;

    }

  }
  return a + e;
};

console.log(reversePrefix("abcdefd","d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix( "abcd","z"));

