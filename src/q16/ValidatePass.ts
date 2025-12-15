const Input = process.argv[2];

if (Input === "") {
    console.log("Invalid");
    process.exit();
}

const hasMinLength = Input.length >= 8;
const hasNumber = /\d/.test(Input);
const hasUppercase = /[A-Z]/.test(Input);
const hasLowercase = /[a-z]/.test(Input);

if (hasMinLength && hasNumber && hasUppercase && hasLowercase) {
    console.log("Valid");
} else {
    console.log("Invalid");
} 
