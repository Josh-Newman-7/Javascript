const rl = require("./rl");
const { arch, platform, tmpdir, totalmem, cpus } = require("os");

const map = new Map([
  ["arch", `Architecture du système: ${arch()}`],
  ["platform", `Plateforme du système: ${platform()}`],
  ["cpus", "Informations sur les CPUs:"],
  ["memory", `Mémoire totale du système: ${totalmem()} octets`],
  ["tmpdir", `Répertoire temporaire du système: ${tmpdir()}`],
]);

runApp();

function runApp() {
  rl.question(
    "\nQuelle info système souhaitez-vous récupérer ?\n(arch, platform, cpus, memory, tmpdir): ",
    (line) => {
      if (line === "exit") return rl.close();
      console.log(" --> ", map.get(line));
      if (line === "cpus") console.table(cpus());
      runApp();
    }
  );
}