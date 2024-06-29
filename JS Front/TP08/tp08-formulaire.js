function validerFormulaire() {
    const nom = document.querySelector('#nom').value;
    const prenom = document.querySelector('#prenom').value;
    const dateNaissance = document.querySelector('#dateNaissance').value;
    const messageElement = document.querySelector('#message');

    messageElement.innerHTML = '';
    messageElement.classList.remove('error', 'success');

    if (nom.trim() === '' || prenom.trim() === '' || dateNaissance.trim() === '') {
        messageElement.classList.add('error');
        messageElement.innerText = 'Tous les champs doivent être renseignés.';
    } else {
        messageElement.classList.add('success');
        messageElement.innerText = 'Formulaire soumis avec succès.';
    }
}