const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quel est votre nom ?", (name) => {
  console.log(`Bonjour ${name} !`);
  rl.close();
});