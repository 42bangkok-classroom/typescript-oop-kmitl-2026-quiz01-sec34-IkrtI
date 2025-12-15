const inputs = process.argv.slice(2);

if (inputs.length === 0) {
    console.log("Invalid Input");
    process.exit();
}

let largestNumber = Number(inputs[0]);

for (let i = 1; i < inputs.length; i++) {
    const currentNumber = Number(inputs[i]);
    if (currentNumber > largestNumber) {
        largestNumber = currentNumber;
    }
}

console.log(largestNumber);