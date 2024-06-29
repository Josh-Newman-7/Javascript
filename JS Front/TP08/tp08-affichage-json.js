function initialiserDonnees() {
    let data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [
            { "nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn" },
            { "nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us" },
            { "nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in" },
            { "nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru" },
            { "nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp" },
            { "nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de" },
            { "nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr" },
            { "nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir" },
            { "nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca" }
        ]
    };

    let titreElement = document.querySelector('#titre');
    titreElement.textContent = `Polluant : ${data.polluant} (${data.unite})`;

    let anneeElement = document.querySelector('#annee');
    anneeElement.textContent = `Année : ${data.annee}`;

    let listePaysElement = document.querySelector('#listePays');
    let contenuPays = '';
    data.pays.forEach(pays => {
        contenuPays += `
            <div>
                <strong>Nom :</strong> ${pays.nom}<br>
                <strong>Valeur :</strong> ${pays.valeur} ${data.unite}<br>
                <strong>Pourcentage :</strong> ${pays.pourcentage}%<br>
                <strong>Code :</strong> ${pays.code}
            </div>
            <br>
        `;
    });
    listePaysElement.innerHTML = contenuPays;
}
