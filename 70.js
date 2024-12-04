var climbStairs = function(n, memo = {}) {
  if(n in memo) return memo[n];
  if(n == 0 ) return 1;
  if(n < 0) return 0;
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};


console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(44));
