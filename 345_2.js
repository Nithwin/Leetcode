

function isVowel(a){
  return ['a','e','i','o','u'].includes(a.toLowerCase())
}

var reverseVowels = function(s) {
    s = s.split('');

    let l = 0;
    let r = s.length -1;
    while(l < r){
        if(isVowel(s[l])){
          while(!isVowel(s[r])){
            r--;
          }
          [s[l],s[r]] = [s[r],s[l]];
        }
        else if(isVowel(s[r])){
          while(!isVowel(s[l])){
            l++;
          }
          [s[l],s[r]] = [s[r],s[l]];
        }

        l++;
        r--;
    }
    return s.join('');
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
