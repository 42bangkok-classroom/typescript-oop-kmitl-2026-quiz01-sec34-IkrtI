const Input = process.argv[2];

if (Input === "") {
  process.exit();
}

let reversed = "";
for (let i = Input.length - 1; i >= 0; i--) {
  reversed += Input[i];
}

console.log(reversed);