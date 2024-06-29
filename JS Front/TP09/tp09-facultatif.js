function chargerDonnees() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://digicode.cleverapps.io/json/pays/pollution', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            afficherTableauPays(res.pays);
        }
    };

    xhr.send();
}

function afficherTableauPays(pays) {
    let tbody = document.getElementById('corps-tableau');

    pays.sort((a, b) => b.valeur - a.valeur);

    pays.forEach(pays => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${pays.nom}</td>
            <td>${pays.valeur}</td>
            <td>${pays.pourcentage}</td>
        `;
        tbody.appendChild(row);
    });
}
