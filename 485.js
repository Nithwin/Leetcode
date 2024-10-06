var findMaxConsecutiveOnes = function(nums) {
  let a= nums.join('').split('0');
  a = a.map(i => i.length)
  return Math.max(...a) ;

}
console.log(findMaxConsecutiveOnes( [1,1,0,1,1,1]));
