const Input = process.argv[2];

if (Input === "") {
  console.log("Invalid Input");
  process.exit();
}

let number = Number(Input);

if (number > 30) {
  console.log("Hot");
} else {
  console.log("Normal");
}
