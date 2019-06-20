function sortByTwoCriteria(arr) {
    arr = arr.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a.length === b.length) {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        } else {
            return a.length - b.length;
        }
    });
    console.log(arr.join('\n'));
}

sortByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);