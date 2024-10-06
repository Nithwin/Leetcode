function generate(numRows) {
    var num = [];
    for (var i = 0; i < numRows; i++) {
        var a = [];
        if(i!=0) a.push(1);
        for (var j = 1; j < i;a.push(num[i - 1][j-1] + num[i - 1][j]), j++);
        num.push([...a,1]);
    }
    return num;
}
;
console.log(generate(10));
