function initialiserDonnees() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let pays = JSON.parse(xhr.responseText);
            afficherDonnees(pays);
        }
    };

    xhr.send();
}

function afficherDonnees(pays) {
    let container = document.getElementById('data-container');
    let contenu = '';

    pays.forEach(pays => {
        contenu += `
            <div>
                <h2>${pays.name}</h2>
                <p>Capital: ${pays.capital}</p>
                <p>Region: ${pays.region}</p>
                <p>Population: ${pays.population}</p>
                <img src="${pays.flag}" alt="Drapeau de ${pays.name}" style="width:100px;">
            </div>
            <hr>
        `;
    });

    container.innerHTML = contenu;
}
