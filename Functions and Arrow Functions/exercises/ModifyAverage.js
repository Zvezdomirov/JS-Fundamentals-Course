function avgOfDigits(num) {
    num = String(num);
    let sumOfDigits = 0;
    for (const digit of num) {
        sumOfDigits += Number(digit);
    }
    return sumOfDigits / num.length;
}

function modifyAverage(num) {
    let average = avgOfDigits(num);
    while (average <= 5) {
        num += "9";
        average = avgOfDigits(num);
    }
    return num;
}

console.log(modifyAverage(101));
