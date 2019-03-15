/*Got stuck on this method,
but it's not as hardcoded as the bottom one*/

// function getDistBetweenPoints([x1, y1],
//                               [x2, y2]) {
//     let xDist = Math.abs(x1 - x2);
//     let yDist = Math.abs(y1 - y2);
//     return Math.sqrt(
//         Math.pow(xDist, 2) +
//         Math.pow(yDist, 2));
// }
//
// function printShortestPath(coordinates) {
//     let pointDistances = {};
//     let currentFirstPoint;
//     let currentSecondPoint;
//     for (let i = 0; i + 1 < coordinates.length; i += 2) {
//         currentFirstPoint = (coordinates.length - i) %
//             (coordinates.length / 2);
//         let currentX1 = coordinates[i];
//         let currentY1 = coordinates[i + 1];
//         for (let j = i + 2; j + 1 < coordinates.length; j += 2) {
//             currentSecondPoint = (coordinates.length - j) %
//                 (coordinates.length / 2);
//             let currentX2 = coordinates[j];
//             let currentY2 = coordinates[j + 1];
//             let currentDist = getDistBetweenPoints(
//                 [currentX1, currentY1],
//                 [currentX2, currentY2]);
//             pointDistances[[currentFirstPoint, currentSecondPoint]] =
//                 currentDist;
//         }
//     }
//
//     for (let i = 0; i < coordinates.length / 2; i++) {
//         for (let key in pointDistances) {
//
//         }
//     }
// }
//
// printShortestPath([0, 0, 2, 0, 4, 0]);
function findShortestWay([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
    }
    let dist1_2 = findDistance(x1, y1, x2, y2);
    let dist2_3 = findDistance(x2, y2, x3, y3);
    let dist1_3 = findDistance(x1, y1, x3, y3);

    if (dist1_2 <= dist2_3 && dist2_3 > dist1_3) {
        console.log(`2->1->3: ${dist1_2 + dist1_3}`);
    } else if (dist1_2 <= dist1_3 && dist1_3>= dist2_3){
        console.log(`1->2->3: ${dist1_2 + dist2_3}`);
    } else {
        console.log(`1->3->2: ${dist1_3 + dist2_3}`);
    }
}