function toHtmlList(strArr) {
    let result = '<ul>\n';
    for (let row of strArr) {
        result += '\t<li>' + htmlEscape(row) + '</li>\n';
    }
    result += '</ul>';
    return result;
}

function htmlEscape(str) {
    return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot')
        .replace(/&/g, '&amp;');
}
console.log(toHtmlList(['<b>unescaped text</b>', 'normal text']));