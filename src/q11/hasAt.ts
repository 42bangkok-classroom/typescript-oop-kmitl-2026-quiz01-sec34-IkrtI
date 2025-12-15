const Input = process.argv[2];

if(Input === ""){
    console.log("Invalid Input");
    process.exit();
}

if (Input.includes("@")) {
    console.log("Has @");
} else {
    console.log("No @");
}