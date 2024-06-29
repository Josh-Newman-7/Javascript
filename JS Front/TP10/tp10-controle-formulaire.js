function validerFormulaire() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let dateNaissance = document.getElementById("dateNaissance").value;
    let lieuNaissance = document.getElementById("lieuNaissance").value;
    let departementNaissance = document.getElementById("departementNaissance").value;
    let numeroRue = document.getElementById("numeroRue").value;
    let libelleRue = document.getElementById("libelleRue").value;
    let codePostal = document.getElementById("codePostal").value;
    let ville = document.getElementById("ville").value;
    let messageErreur = document.getElementById("messageErreur");

    messageErreur.style.display = "none";
    messageErreur.innerHTML = "";

    if (!nom || !prenom || !dateNaissance || !lieuNaissance || !departementNaissance || !numeroRue || !libelleRue || !codePostal || !ville) {
        messageErreur.innerHTML = "Tous les champs doivent être renseignés.";
        messageErreur.style.display = "block";
        return;
    }

    let dateNaissanceDate = new Date(dateNaissance);
    let age = calculerAge(dateNaissanceDate);

    if (age < 18) {
        messageErreur.innerHTML = "Vous devez avoir 18 ans ou plus pour soumettre ce formulaire.";
        messageErreur.style.display = "block";
        return;
    }

    let dto = {
        id: null,
        identiteCreateur: null,
        dateMaj: new Date().toISOString(),
        nom: nom,
        prenom: prenom,
        genre: null,
        dateNaissance: dateNaissance,
        lieuNaissance: lieuNaissance,
        departementNaissance: departementNaissance,
        numeroRue: numeroRue,
        libelleRue: libelleRue,
        codePostal: codePostal,
        ville: ville
    };

    envoyerDonnees(dto);
}

function calculerAge(dateNaissance) {
    let maintenant = new Date();
    let age = maintenant.getFullYear() - dateNaissance.getFullYear();
    let mois = maintenant.getMonth() - dateNaissance.getMonth();
    if (mois < 0 || (mois === 0 && maintenant.getDate() < dateNaissance.getDate())) {
        age--;
    }
    return age;
}

function envoyerDonnees(dto) {
    fetch("https://digicode.cleverapps.io/utilisateurs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dto)
    })
    .then(response => {
        if (response.ok) {
            alert("Utilisateur créé avec succès !");
        } else {
            return response.json().then(err => {
                throw new Error(err.message);
            });
        }
    })
    .catch(error => {
        alert("Erreur lors de la création de l'utilisateur : " + error.message);
    });
}
