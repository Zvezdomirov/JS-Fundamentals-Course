function findMaxInMatrix(matrix) {
    let result = Math.max.apply(
        null,
        matrix
            .map(row => Math.max.apply(null, row)));

    console.log(result);
}

findMaxInMatrix([
    [1, 2, 3, 0],
    [1, 0, 7, -5]
]);