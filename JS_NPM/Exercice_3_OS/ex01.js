const rl = require("./rl");
const { arch, platform, cpus, totalmem, tmpdir } = require("os");


rl.question("Quelle information sur le système souhaitez-vous récupérer ? (arch, platform, cpu, memory, tempdir)", (line) => {
  if (line === "exit") {
    return rl.close();
  }

  switch (line) {
    case "arch":
      console.log("Architecture du système:", arch());
      break;
    case "platform":
      console.log("Plateforme du système:", platform());
      break;
    case "cpu":
      console.log("Informations sur les CPUs:");
      console.table(cpus());
      break;
    case "memory":
      console.log("Mémoire totale du système:", totalmem(), "octets");
      break;
    case "tempdir":
      console.log("Répertoire temporaire du système:", tmpdir());
      break;
    default:
      console.log("Choix invalide...");
  }
});