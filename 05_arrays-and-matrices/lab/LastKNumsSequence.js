function getKSequence(size, k) {
    let result = [1];
    for (let i = 1; i < size; i++) {
        let nextElement = 0;
        for (let j = i - k; j < result.length; j++) {
            if (j < 0) continue;
            nextElement += result[j];
        }
        result[i] = nextElement;
    }
    console.log(result);
}

getKSequence(8, 2);