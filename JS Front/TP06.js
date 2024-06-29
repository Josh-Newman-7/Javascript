let societe = {
    nom: "Google",
    siegeSocial: "Googleplex, Mountain View, California, United States",
    fondateurs: [
        { nom: "Larry Page", dateNaissance: "26/03/1973", lieuNaissance: "East Lansing, Michigan" },
        { nom: "Sergey Brin", dateNaissance: "21/08/1973", lieuNaissance: "Moscou, Union Soviétique" }
    ],
    chiffreAffaires: {
        2008: 16.49,
        2012: 37.97,
        2016: 89.46,
        2018: 136.2
    }
};

console.log("Fondateurs de la société :");
for (let fondateur of societe.fondateurs) {
    console.log(`Nom: ${fondateur.nom}, Né(e) le: ${fondateur.dateNaissance} à ${fondateur.lieuNaissance}`);
}

console.log("\nChiffres d'affaires de la société (en milliards de $) :");
for (let annee in societe.chiffreAffaires) {
    console.log(`Année: ${annee}, Chiffre d'affaires: ${societe.chiffreAffaires[annee]}`);
}
