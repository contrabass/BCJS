function compareToTen (n) {
    let p = new Promise((resolve, reject) => {
        n > 10 ? resolve(`${n} is greater than 10`) :
        reject(`nope, ${n} is not greater than 10`);
    }
    );
    return p;
}

compareToTen("12")
    .then(result => console.log(result))
    .catch(error => console.log(error));