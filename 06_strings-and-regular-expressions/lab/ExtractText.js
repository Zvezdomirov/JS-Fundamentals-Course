function extractTextInParentheses(str) {
    let regexp = /\((.*?)\)/g;
    let matches = str.match(regexp);
    let result = [];
    if (matches != null) {
        matches
            .forEach(r => result.push(
                r.substring(1, r.length - 1)));
        console.log(result.join(", "));
    } else {
        return undefined;
    }
}

extractTextInParentheses(
    "Rakiya (Bulgarian brandy is self-made liquor (alcoholic drink");