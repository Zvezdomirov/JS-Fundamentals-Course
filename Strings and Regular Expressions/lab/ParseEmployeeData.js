function parseEmployeeData(empData) {
    let pattern = /^([A-Z][a-z]+) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/;
    let parsed = [], match;
    for (let current of empData) {
        if ((match = pattern.exec(current))) {
            parsed.push(
                `Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
    console.log(parsed.join('\n'));
}

parseEmployeeData(
    ['Isacc - 1000 - CEO',
        'Ivan - 500 - Employee',
        'Peter - 500 - Employee']);