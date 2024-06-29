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
            <div class="country-container">
                <h2>${pays.name}</h2>
                <p>Capital: ${pays.capital}</p>
                <p>Region: ${pays.region}</p>
                <p>Population: ${pays.population.toLocaleString()}</p>
            </div>
        `;
    });

    container.innerHTML = contenu;
}
