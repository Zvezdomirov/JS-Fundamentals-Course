//TODO: Fix it! It should work with multiple dots at the end.
function generateUsernames(emailArr) {
    let regex = /(.*?)@(.).*?\.(.).*?/;
    let usernameArr = [];
    let currentMatch = null;
    if (emailArr != null) {
        for (let email of emailArr) {
            currentMatch = email.match(regex);
            usernameArr.push(
                currentMatch[1] +
                "." +
                currentMatch[2] +
                currentMatch[3]);
        }
        console.log(usernameArr.join(", "));
    }
}

generateUsernames(["peshoo@gmail.com", "todor_43@mail.dir.bg", "foo@bar.com"]);