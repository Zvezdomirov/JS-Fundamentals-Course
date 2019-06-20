function locateTreasure(coordinates) {
    const islandCoords = {
        "Tonga": [0, 6, 2, 8],
        "Tuvalu": [1, 1, 3, 3],
        "Cook": [4, 7, 9, 8],
        "Samoa": [5, 3, 7, 6],
        "Tokelau": [8, 0, 9, 1]
    };
    let xCoord;
    let yCoord;
    for (let i = 0; i + 1 < coordinates.length; i += 2) {
        let message = "";
        xCoord = coordinates[i];
        yCoord = coordinates[i + 1];

        for (let key in islandCoords) {
            if (isPointInArea([xCoord, yCoord],
                islandCoords[key])) {
                message = key;
            }
        }
        if (message === "") {
            console.log("On the bottom of the ocean");
        } else {
            console.log(message);
        }
    }
}

function isPointInArea([pointX, pointY],
                       [areaLLeftX, areaLLeftY,
                           areaURightX, areaURightY]) {
    if (pointX >= areaLLeftX && pointX <= areaURightX) {
        if (pointY >= areaLLeftY && pointY <= areaURightY) {
            return true;
        }
    }
    return false;
}
locateTreasure([6, 4]);