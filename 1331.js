var arrayRankTransform = function(arr) {
  let sortedRank = [...new Set(arr)].sort((x,y) => x-y);
  l = 0;
  r = arr.length-1;
  let a = []
  while(l < r)  {
     a[l] = sortedRank.indexOf(arr[l])+1;
     a[r] = sortedRank.indexOf(arr[r])+1;
     l++;
     r--;
    }
    if(arr.length%2 !== 0) a[l]= sortedRank.indexOf(arr[l])+1;
  return a;
};

console.log(arrayRankTransform([40,10,20,30]));
console.log(arrayRankTransform([100,100,100]));
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));
//[5,3,4,2,8,6,7,1,3]


/*
 const rankMap = new Map();
    l = 0;
    r = sortedRank.length - 1;
    while(l <= r){
        rankMap.set(sortedRank[l],l+1)
        rankMap.set(sortedRank[r],r+1)
        l++;
        r--;
    }

    */
