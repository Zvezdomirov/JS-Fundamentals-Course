function printMatrixDiagonalsSum(matrix) {
    let mainDiagSum = 0;
    let secondaryDiagSum = 0;
    matrix
        .forEach((row, i) => {
                mainDiagSum += row[i];
            secondaryDiagSum += row[row.length - 1 - i];
        });
    console.log(mainDiagSum + ' ' + secondaryDiagSum);
}

printMatrixDiagonalsSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);