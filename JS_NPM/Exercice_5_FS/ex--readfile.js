// CONSIGNE
//
// 1/ Le programme vous invite à saisir le nom d'un fichier
// 2/ Puis il affiche le contenu du fichier s'il existe

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez le nom du fichier à lire: ", function (fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier:", err);
      rl.close();
      return;
    }
    console.log("Contenu du fichier", fileName, ":");
    console.log(data);
    rl.close();
  });
});