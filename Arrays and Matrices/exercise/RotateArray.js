function rotateArray(arr) {
    let numOfRotations = arr.pop();
    for (let i = 0; i < numOfRotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

rotateArray([1, 2, 3, 4, 2]);