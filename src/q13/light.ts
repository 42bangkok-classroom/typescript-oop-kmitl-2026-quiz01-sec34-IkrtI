const Input = process.argv[2];

if (Input === "") {
  console.log("Unknown");
  process.exit();
}

const color = Input.toLowerCase();

if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Caution");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("Unknown");
}
