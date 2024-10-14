var trap = function(height) {
  let la = [], ra = [];
  let count = 0;
  let l_max = -1, r_max = -1
  let l = 0;
  let r = height.length - 1;
  while(l < height.length){
    l_max = Math.max(height[l++],l_max);
    la.push(l_max);
    r_max = Math.max(height[r--],r_max);
    ra.unshift(r_max);
  }
  height.forEach((i,index) => count += (Math.min(la[index],ra[index]) - i))
  return count;
};



console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected output: 6
console.log(trap([4,2,0,3,2,5])); // 9
