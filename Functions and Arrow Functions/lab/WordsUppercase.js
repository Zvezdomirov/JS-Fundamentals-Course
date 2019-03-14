function wordsUpperCase(sentence) {
    return sentence
        .toUpperCase()
        .split(/\W+/)
        .filter(Boolean)
        .join(', ');
}

console.log(wordsUpperCase("Hello, how are you?"));