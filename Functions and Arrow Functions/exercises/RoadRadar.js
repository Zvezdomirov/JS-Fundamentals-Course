function roadRadar([speed, area]) {
    speed = Number(speed);
    const residentialSpeedLimit = 20;
    const citySpeedLimit = 50;
    const interstateSpeedLimit = 90;
    const motorwaySpeedLimit = 130;

    if (area === "residential") {
        printSpeedingMessage(residentialSpeedLimit, speed);
    } else if (area === "city") {
        printSpeedingMessage(citySpeedLimit, speed);
    } else if (area === "interstate") {
        printSpeedingMessage(interstateSpeedLimit, speed);
    } else if (area === "motorway") {
        printSpeedingMessage(motorwaySpeedLimit, speed);
    }
}

function printSpeedingMessage(areaSpeedLimit, speed) {
    if (speed > areaSpeedLimit) {
        if (speed <= areaSpeedLimit + 20) {
            console.log("speeding");
        } else if (speed <= areaSpeedLimit + 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
}

roadRadar([20, "residential"]);