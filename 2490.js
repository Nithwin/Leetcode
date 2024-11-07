
var isCircularSentence = function(sentence) {
  let s = sentence.split(' ');
  let prev = s[0].at(-1);
  for(let i = 1;i<s.length;i++){
      if(prev != s[i].at(0)) return false;
      prev = s[i].at(-1)
  }
  return true;
};

console.log(isCircularSentence(sentence = "leetcode exercises sound delightful"));
console.log(isCircularSentence(sentence = "eetcode"));
console.log(isCircularSentence(sentence = "Leetcode is cool"));


console.log("hello".at(0));


console.log([1,2,3].at(-1));
