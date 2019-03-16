function findElemAtEvenPos(arr) {
    let result = arr
        .filter((el, ind) => ind % 2 === 0)
        .join(" ");
    console.log(result);
}

findElemAtEvenPos([1, 2, 3, 4, 5]);