
function generateLowercase() {

  let lowercase = "abcdefghijklmnopqrstuvwxyz";

  let result = "";

  for (let i = 0; i < 4; i++) {

    result += lowercase[Math.floor(Math.random() * 26)];
  }
  return result;
}

function generateSpecialChar() {
  let specialChars = "-_.,@";
  return specialChars[Math.floor(Math.random() * 5)];
}

function generateNumber() {

  let result = "";

  for (let i = 0; i < 4; i++) {

    result += Math.floor(Math.random() * 10);
  }
  return result;
}

function generatePassword() {

  return generateLowercase() + generateSpecialChar() + generateNumber();
}
let password = generatePassword();

console.log(password);
