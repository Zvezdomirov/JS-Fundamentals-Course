function calcDistBetweenPoints([x1, y1, x2, y2]) {
    let xDiff = Math.abs(x1 - x2);
    let yDiff = Math.abs(y1 - y2);

    return Math.sqrt(
        Math.pow(xDiff, 2) + Math.pow(yDiff, 2)
    );
}

function checkPointsValidity([x1, y1, x2, y2]) {
    let pointsDistMessage = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
    let firstOriginDistMessage = `{${x1}, ${y1}} to {0, 0} is `;
    let secondOriginDistMessage = `{${x2}, ${y2}} to {0, 0} is `;

    let distBetweenPoints = calcDistBetweenPoints([x1, y1, x2, y2]);
    pointsDistMessage += Number.isInteger(distBetweenPoints) ?
        "valid" : "invalid";

    let firstDistToOrigin = calcDistBetweenPoints([x1, y1, 0, 0]);
    firstOriginDistMessage += Number.isInteger(firstDistToOrigin) ?
        "valid" : "invalid";

    let secondDistToOrigin = calcDistBetweenPoints([x2, y2, 0, 0]);
    secondOriginDistMessage += Number.isInteger(secondDistToOrigin) ?
        "valid" : "invalid";

    console.log(firstOriginDistMessage);
    console.log(secondOriginDistMessage);
    console.log(pointsDistMessage);
}
checkPointsValidity([2, 1, 1, 1]);