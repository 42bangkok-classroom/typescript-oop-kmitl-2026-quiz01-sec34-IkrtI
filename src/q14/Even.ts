const Input = process.argv[2];

if (Input === "") {
  process.exit();
}

const N = Number(Input);

if (isNaN(N)) {
  process.exit();
}

for (let i = 0; i <= N; i += 2) {
  console.log(i);
} 
