function printBill(purchaseArr) {
    let purchases = purchaseArr
        .filter((p, i) => i % 2 === 0);
    let totalPrice = purchaseArr
        .filter((p, i) => i % 2 !== 0)
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${totalPrice}`);
}

printBill(["Beer Zagorka", "2.65", "Tripe soup", "7.80", "Lasagna", "5.69"]);