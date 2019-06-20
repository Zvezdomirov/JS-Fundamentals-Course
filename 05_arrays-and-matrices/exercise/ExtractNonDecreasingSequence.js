function extractNonDecreasing(arr) {
    let currentBiggest = arr[0];
    console.log(arr
        .filter(num => {
            if (num >= currentBiggest) {
                currentBiggest = num;
                return true;
            }
            return false;
        })
        .join('\n')
    );
}

extractNonDecreasing([1, 3, 8, 4, 10, 12, 3, 24]);