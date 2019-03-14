function printTriangle([num]) {

    let printStars = num => console.log("*".repeat(num));
    for (let i = 1; i <= num; i++) {
        printStars(i);
    }
    for (let i = num - 1; i > 0; i--) {
        printStars(i);
    }

}

printTriangle(['100']);