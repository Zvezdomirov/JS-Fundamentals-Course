function aggregateElements(arrOfNums) {

    let basicSum = function(numArr) {
        let sum = 0;
        for (let num of numArr) {
            sum += num;
        }
        return sum;
    };

    let inverseValueSum = function(numArr) {
      let sum = 0;
      for (let num of numArr) {
          sum += (1 / num);
      }
      return sum;
    };

    let concat = function (strArr) {
        let result = "";
        for (let str of strArr) {
            result += str;
        }
        return result;
    };
    console.log(basicSum(arrOfNums));
    console.log(inverseValueSum(arrOfNums));
    console.log(concat(arrOfNums));
}

aggregateElements([1, 2, 3]);
