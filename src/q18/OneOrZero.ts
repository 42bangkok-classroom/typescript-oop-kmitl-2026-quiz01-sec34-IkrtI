const Input = process.argv[2];

if (Input === "") {
    console.log("Invalid Input");
    process.exit();
}

const size = Number(Input);

for (let i = 1; i <= size; i++) {
    let line = "";
    const charToPrint = i % 2 === 1 ? "1" : "0";
    for (let j = 1; j <= size; j++) {
        line += charToPrint;
    }
    console.log(line);
}
