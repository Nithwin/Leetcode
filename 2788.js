
var splitWordsBySeparator = function(words, separator) {
  let a = [];
  for(i of words){
      a.push(... (i.split(separator)).filter(i => i !== ''))
  }
  return a;
};

console.log(splitWordsBySeparator(words = ["one.two.three","four.five","six"], separator = "."));
console.log(splitWordsBySeparator(words = ["$easy$","$problem$"], separator = "$"));
