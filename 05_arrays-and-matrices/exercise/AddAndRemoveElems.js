function addRemoveElems(commandArr) {
    let count = 1;
    let result = [];
    for (let c of commandArr) {
        if (c === 'add') result.push(count);
        else if (c === 'remove') result.pop();
        count++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join('\n'));
    }
}

addRemoveElems(
    ["add", "add", "remove", "add", "add"]);