function sumFirstLast(numArr) {
    numArr = numArr.map(Number);
    return numArr[0] + numArr[numArr.length - 1];
}

console.log(sumFirstLast(['1', '2', '3']));