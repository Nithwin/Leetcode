function canAliceWin(nums) {
    var s = 0;
    var d = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            s += nums[i];
        }
        else {
            d += nums[i];
        }
    }
    console.log(s, d);
    return (s === d) ? false : true;
}
;
console.log(canAliceWin([1, 2, 3, 4, 10])); //false
console.log(canAliceWin([1, 2, 3, 4, 5, 14])); //true
console.log(canAliceWin([5, 5, 5, 25])); //true
