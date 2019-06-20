function countEqualNeighbors(matrix) {
    let neighbors = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length - 1; j++) {
            if (matrix[i][j] == matrix[i + 1][j]) {
                neighbors++;
            }
            if (matrix[i][j] == matrix[i][j + 1]) {
                neighbors ++;
            }
        }
    }
    console.log(neighbors);
}

countEqualNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);