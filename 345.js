const { log } = require("console");

function isVowel(a){
  return ['a','e','i','o','u'].includes(a.toLowerCase())
}

var reverseVowels = function(s) {
    let v = [];
    s = s.split('');
    for(let i = 0;i<s.length;i++){
        if(isVowel(s[i])) v.unshift(s[i]);
    }
    for(let i =0;i<s.length;i++){
        if(isVowel(s[i])) s[i] = v.shift();
    }
    return s.join('');
};

console.log(reverseVowels("IceCreAm"));
