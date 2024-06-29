const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Entrez autant de lignes souhaitées ('exit' pour quitter)");

rl.on("line", (line) => {
  if (line === "exit") {
    return rl.close();
  }
  console.log(`Ligne entrée: ${line}`);
});