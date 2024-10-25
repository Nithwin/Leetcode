var index = 0;
var parseBoolExpr = function(expression) {
    let curr = expression.charAt(index++);

    if (curr === 't') {
        return true;
    }
    if (curr === 'f') {
        return false;
    }

    if (curr === '!') {
        index++;
        let result = !parseBoolExpr(expression);
        index++;
        return result;
    }

    let a = [];
    index++;
    while (expression.charAt(index) !== ')') {
        if (expression.charAt(index) !== ',') {
            a.push(parseBoolExpr(expression));
            console.log(a);
        } else {
            index++;
        }
    }
    index++; 

    if (curr === '&') {
        for (let i of a) {
            if (!i) {
                return false;
            }
        }
        return true;
    }

    if (curr === '|') {
        for (let i of a) {
            if (i) {
                return true;
            }
        }
        return false;
    }

    return false;
};



console.log(parseBoolExpr("&(|(f))"));
console.log(parseBoolExpr( "|(f,f,f,t)"));
