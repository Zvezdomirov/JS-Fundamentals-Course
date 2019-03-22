function censorText(text, wordsArr) {
    const censorSymbol = '-';

    for (let word of wordsArr) {
        let replacement = censorSymbol.repeat(word.length);
        let regex = new RegExp(word, "g");

        text = text.replace(regex, replacement);
    }
    return text;
}

console.log(censorText('roses are red, violets are red blue', [', violets are', 'red']));