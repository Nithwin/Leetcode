
var checkInclusion = function(s1, s2) {
  let map = new Map();
  for(i of s1){
    if(!map.has(i)) map.set(i,0);
    map.set(i,map.get(i)+1);
  }
  let n1 = s1.length;
  let n2 = s2.length;
  for(let i = 0;i <= n2 - n1;i++){
    let tmp = new Map(map);
    let j = 0;
    for(j = i;j< i+n1;j++){
      let c = s2[j];
      if(tmp.has(c) && tmp.get(c) > 0){
        tmp.set(c,tmp.get(c)-1);
      }
      else break;
    }
    if(j == i+n1) return true;
  }
  return false;
};


console.log(checkInclusion(s1 = "ab", s2 = "eidbaooo"));

