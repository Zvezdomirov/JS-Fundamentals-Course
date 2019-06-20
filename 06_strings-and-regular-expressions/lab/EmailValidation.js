function isEmailValid(email) {
    if (email == null) {
        return undefined;
    }
    const emailPattern = /^\w+@[a-z]+(\.[a-z]+)+$/g;

    return emailPattern.test(email)?
        "Valid" :
        "Invalid";
}

console.log(isEmailValid("pesho@abv.bg.sdf"));
