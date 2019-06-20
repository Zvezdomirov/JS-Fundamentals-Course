function splitExpression(expression) {
    let splitPattern = /[.;,()\t\n\s]/g;
    return expression
        .split(splitPattern)
        .filter(token => token.length !== 0)
        .join('\n');
}

console.log(splitExpression('let sum = 4 * 4, let b = "wow";'));