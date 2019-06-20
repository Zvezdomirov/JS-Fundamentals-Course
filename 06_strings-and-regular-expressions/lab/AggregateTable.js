function sumTownIncomes(tables) {
    let regexp = /\|\s/;
    let towns = [];
    let totalIncome = 0;

    for (let row of tables) {
        let tokens = row.split(regexp);
        towns.push(tokens[1].trim());
        totalIncome += Number(tokens[2]);
    }
    console.log(towns.join(", "));
    console.log(totalIncome);
}

sumTownIncomes(["| Sofia | 300",
    "| Veliko Tarnovo | 500",
    "| Yambol | 275"]);
