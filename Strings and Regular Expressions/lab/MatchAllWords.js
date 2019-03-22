function matchWords(text) {
    let pattern = /([A-Za-z0-9_]+)/g;
    console.log(text.match(pattern).join("|"));
}

matchWords('A Regular Expression needs to have the global flag in order to match all\n' +
    'occurrences in the text');