function parseQaToXml(arrOfQa) {

    let resultArr = [];
    let currentQuestion = "";
    let currentAnswer = "";
    for (let i = 0; i + 1 < arrOfQa.length; i += 2) {
        resultArr.push(`<question>\n${arrOfQa[i]}\n</question>\n` +
            `<answer>\n${arrOfQa[i + 1]}\n</answer>\n`);
    }

    let xmlTemplate =
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>\n" +
        `${resultArr.join("")}` +
        "</quiz>";
    console.log(xmlTemplate);
}

parseQaToXml(["Hello?", "Yes.",
    "Are you there?", "One more \"yes\" from me"]);