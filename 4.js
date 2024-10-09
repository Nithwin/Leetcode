var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0;
  let j = 0;
  let m = []
  while(i < nums1.length && j < nums2.length){
    (nums1[i] < nums2[j]) ? m.push(nums1[i++]) : m.push(nums2[j++]);
  }
  for(i;i < nums1.length;m.push(nums1[i]),i++);
  for(j;j < nums2.length;m.push(nums2[j]),j++);
  const f = Math.floor;
  return (m.length%2!==0) ?  m[f(m.length/2)] : (m[f(m.length/2)]+m[f(m.length/2)-1])/2;
};


console.log(findMedianSortedArrays(nums1 = [1,3], nums2 = [2]));
console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4]))
console.log(findMedianSortedArrays(nums1 = [3], nums2 = [-2,-1]))
