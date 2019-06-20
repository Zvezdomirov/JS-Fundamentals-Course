function isPointInsideTheBox([x, y, z]) {
    [x, y, z].map(Number);
    if (x >= 10 && x <= 50) {
        if (y >= 20 && y <= 80) {
            if (z >= 15 && z <= 50) {
                return true;
            }
        }
    }
    return false;
}

function checkPointsPosition(coordsArr) {
    let results = [];
    let currentPointPosition = "";
    for (let i = 0; i+2 < coordsArr.length; i += 3) {
        if (isPointInsideTheBox(
            [coordsArr[i],
                coordsArr[i + 1],
                coordsArr[i + 2]])) {
            results.push("inside");
        } else {
            results.push("outside");
        }
    }
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

checkPointsPosition([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]);