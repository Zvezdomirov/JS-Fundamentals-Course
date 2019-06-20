function distributeNumbers(numArr) {
    let distributed = [];
    numArr
        .forEach(num => num < 0 ?
            distributed.unshift(num) :
            distributed.push(num));
    distributed
        .forEach(n => console.log(n));
}

distributeNumbers([3, -2, 0, -1]);