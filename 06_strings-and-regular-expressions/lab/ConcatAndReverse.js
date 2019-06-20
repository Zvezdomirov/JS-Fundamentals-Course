function concatReverse(arrOfStr) {
    return Array.from(arrOfStr
        .join(''))
        .reverse()
        .join('');
}

console.log(concatReverse(['I', 'am', 'student']));;