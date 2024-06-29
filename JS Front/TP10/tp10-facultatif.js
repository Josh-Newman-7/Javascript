let data;

function initialiserDonnees() {
    fetch("https://digicode.cleverapps.io/json/pays/pollution")
        .then(response => response.json())
        .then(json => {
            data = json.pays;
            afficherPays(data);
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données : ", error);
        });
}

function afficherPays(paysList) {
    let corpsTableau = document.getElementById("corpsTableau");
    corpsTableau.innerHTML = "";

    paysList.forEach(pays => {
        let row = document.createElement("tr");

        let cellNom = document.createElement("td");
        cellNom.textContent = pays.nom;
        row.appendChild(cellNom);

        let cellValeur = document.createElement("td");
        cellValeur.textContent = pays.valeur;
        row.appendChild(cellValeur);

        let cellPourcentage = document.createElement("td");
        cellPourcentage.textContent = pays.pourcentage;
        row.appendChild(cellPourcentage);

        let cellDrapeau = document.createElement("td");
        let imgDrapeau = document.createElement("img");
        imgDrapeau.src = `https://flagsapi.com/${pays.code.toUpperCase()}/flat/32.png`;
        cellDrapeau.appendChild(imgDrapeau);
        row.appendChild(cellDrapeau);

        corpsTableau.appendChild(row);
    });
}

function filtrerPays() {
    let minValue = document.getElementById("minValue").value;
    let maxValue = document.getElementById("maxValue").value;
    let messageErreur = document.getElementById("messageErreur");

    messageErreur.style.display = "none";
    messageErreur.innerHTML = "";

    if (minValue === "") minValue = 0;
    if (maxValue === "") maxValue = Number.MAX_VALUE;

    minValue = parseFloat(minValue);
    maxValue = parseFloat(maxValue);

    if (minValue < 0 || maxValue < 0) {
        messageErreur.innerHTML = "Veuillez saisir des valeurs positives.";
        messageErreur.style.display = "block";
        return;
    }

    if (minValue > maxValue) {
        messageErreur.innerHTML = "La valeur MIN doit être inférieure ou égale à la valeur MAX.";
        messageErreur.style.display = "block";
        return;
    }

    let paysFiltres = data.filter(pays => pays.valeur >= minValue && pays.valeur <= maxValue);
    afficherPays(paysFiltres);
}
