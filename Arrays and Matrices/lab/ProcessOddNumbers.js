function processOddNums(arr) {
    let result = arr
        .filter((n, i) => i % 2 === 1)
        .map(n => n * 2)
        .reverse()
        .join(" ");
    console.log(result);
}

processOddNums([3, 0, 10, 4, 7, 3]);