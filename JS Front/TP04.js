function fonctionConstante() {
    return 33;
}

let res = fonctionConstante();
console.log("Résultat de l'appel de la fonction constante :", res);

console.log('-------------');
function direBonjour(nom) {
    console.log("Bonjour " + nom);
}

direBonjour("Marcel");
console.log("-------------");
function calcul(a, b) {
    return a * b + a + b;
}

let resultat = calcul(5, 3);
console.log("Résultat de l'appel avec des nombres :", resultat);

resultat = calcul("5", "3");
console.log("Résultat de l'appel avec des chaînes de caractères :", resultat);

console.log('-----------------');
function verifierTableau(tableau) {
    for (let element of tableau) {
        if (typeof element !== 'number' || isNaN(element)) {
            return false;
        }
    }
    return true;
}

let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [1, 2, 3, "4", 5];
let tableau3 = [];

console.log("Tableau 1:", verifierTableau(tableau1));
console.log("Tableau 2:", verifierTableau(tableau2));
console.log("Tableau 3:", verifierTableau(tableau3));
console.log("--------------");

function calculerMoyenne(tableau) {
    if (!Array.isArray(tableau)) {
        return "Erreur : Le paramètre passé n'est pas un tableau.";
    }

    if (tableau.length === 0) {
        return 0;
    }

    let somme = 0;
    let nombreElements = 0;

    for (let element of tableau) {
        if (typeof element !== 'number' || isNaN(element)) {
            return "Erreur : Le tableau contient des éléments qui ne sont pas des nombres.";
        }
        somme += element;
        nombreElements++;
    }

    let moyenne = somme / nombreElements;
    return moyenne;
}

tableau1 = [10, 20, 30, 40, 50];
tableau2 = [];
tableau3 = ["10", "20", "30"];
// Appel de la fonction et affichage des résultats
console.log("Moyenne du tableau 1:", calculerMoyenne(tableau1)); // Moyenne attendue : 30
console.log("Moyenne du tableau 2:", calculerMoyenne(tableau2)); // Doit retourner 0 car le tableau est vide
console.log("Moyenne du tableau 3:", calculerMoyenne(tableau3)); // Doit retourner une erreur car il y a des chaînes de caractères
console.log("-----------------");

function premiereLettreMajuscule(chaine) {
    if (chaine.length === 0) {
        return chaine;
    }
    
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

let chaine1 = "bonjour";
let chaine2 = "BONJOUR";
let chaine3 = "";
let chaine4 = "bonjour tout le monde"

console.log("Chaîne 1:", premiereLettreMajuscule(chaine1)); // Attendu : "Bonjour"
console.log("Chaîne 2:", premiereLettreMajuscule(chaine2)); // Attendu : "BONJOUR" (reste inchangé)
console.log("Chaîne 3:", premiereLettreMajuscule(chaine3)); // Attendu : "" (reste inchangé, chaîne vide)
console.log("Chaîne 4:", premiereLettreMajuscule(chaine4)); // Attendu : "Bonjour Tout Le Monde"
console.log('----------------');

function phraseMajuscule(phrase) {
    let mots = phrase.split(" ");
    let motsMajuscules = mots.map(mot => premiereLettreMajuscule(mot));
    
    return motsMajuscules.join(" ");
}

let phrase = "Bonjour tout le monde";
resultat = phraseMajuscule(phrase);
console.log("Phrase originale:", phrase);
console.log("Phrase avec chaque première lettre en majuscule:", resultat);