function faireOperation() {
    const nombre1 = document.querySelector('#nombre1').value;
    const nombre2 = document.querySelector('#nombre2').value;
    const operateur = document.querySelector('#operateur').value;
    const resultatElement = document.querySelector('#resultat');

    resultatElement.innerHTML = '';
    resultatElement.classList.remove('error');

    if (isNaN(nombre1) || isNaN(nombre2) || nombre1.trim() === '' || nombre2.trim() === '') {
        resultatElement.classList.add('error');
        resultatElement.innerText = 'Vous devez saisir un nombre';
        return;
    }

    const num1 = parseFloat(nombre1);
    const num2 = parseFloat(nombre2);

    switch (operateur) {
        case '+':
            resultatElement.innerText = `Le résultat de l'addition est : ${num1 + num2}`;
            break;
        case '-':
            resultatElement.innerText = `Le résultat de la soustraction est : ${num1 - num2}`;
            break;
        case '*':
            resultatElement.innerText = `Le résultat de la multiplication est : ${num1 * num2}`;
            break;
        case '/':
            if (num2 === 0) {
                resultatElement.classList.add('error');
                resultatElement.innerText = 'Erreur : Division par zéro';
            } else {
                resultatElement.innerText = `Le résultat de la division est : ${num1 / num2}`;
            }
            break;
        default:
            resultatElement.classList.add('error');
            resultatElement.innerText = 'Opérateur non reconnu';
    }
}