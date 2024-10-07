var areSentencesSimilar = function(sentence1, sentence2) {
  sentence1 = sentence1.split(' ');
  sentence2 = sentence2.split(' ');
  let l = 0;
  let r = -1;
  while(l < sentence2.length || sentence2.length !==0){
    if(sentence2[l] === sentence1[l]){
      sentence1.pop();
      sentence2.pop();
      l++
    }
    if(sentence2.at(r) === sentence1.at(r)){
      sentence1.unshift(sentence2.at(r));
      sentence2.unshift(sentence2.at(r));
      r--;
    }
  }
  return sentence1

};

console.log(areSentencesSimilar(sentence1 = "My name is Haley", sentence2 = "My Haley"));
console.log(areSentencesSimilar(sentence1 = "of", sentence2 = "A lot of words"));
