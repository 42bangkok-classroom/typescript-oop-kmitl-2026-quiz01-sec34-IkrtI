const Input = process.argv[2];

if (Input === "") {
    console.log("Invalid Input");
    process.exit();
}

const size = Number(Input);

for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}   