function countOccurrences(str, text) {
    let currentIndex = 0;
    let occurrences = 0;
    while ((currentIndex = text.indexOf(str, currentIndex)) >= 0) {
        occurrences++;
        currentIndex++;
    }
    return occurrences;
}

console.log(countOccurrences(
    "the",
    "the quick brown fox jumps over the lazy dog"));