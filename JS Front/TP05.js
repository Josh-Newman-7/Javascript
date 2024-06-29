function calcul(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("Les deux paramètres a et b sont requis.");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Les paramètres a et b doivent être des nombres.");
    }

    return a * b + a + b;
}

// Test de la fonction avec des nombres
try {
    let resultat = calcul(5, 3);
    console.log("Résultat de l'appel avec des nombres :", resultat);
} catch (error) {
    console.error(error.message);
}

// Test de la fonction avec un paramètre manquant
try {
    let resultat = calcul(5);
    console.log("Résultat de l'appel avec un paramètre manquant :", resultat);
} catch (error) {
    console.error(error.message);
}

// Test de la fonction avec un paramètre non-numérique
try {
    let resultat = calcul(5, "trois");
    console.log("Résultat de l'appel avec un paramètre non-numérique :", resultat);
} catch (error) {
    console.error(error.message);
}

// Test de la fonction avec des paramètres manquants
try {
    let resultat = calcul();
    console.log("Résultat de l'appel avec des paramètres manquants :", resultat);
} catch (error) {
    console.error(error.message);
}

console.log("-----------------");

function calculerMoyenne(tableau) {
    if (!Array.isArray(tableau)) {
        throw new Error("Erreur : Le paramètre passé n'est pas un tableau.");
    }

    if (tableau.length === 0) {
        return 0;
    }

    let somme = 0;
    let nombreElements = 0;

    for (let element of tableau) {
        if (typeof element !== 'number' || isNaN(element)) {
            throw new Error("Erreur : Le tableau contient des éléments qui ne sont pas des nombres.");
        }
        somme += element;
        nombreElements++;
    }

    let moyenne = somme / nombreElements;
    return moyenne;
}

try {
    let tableau1 = [10, 20, 30, 40, 50];
    console.log("Moyenne du tableau 1:", calculerMoyenne(tableau1)); // Moyenne attendue : 30
} catch (error) {
    console.error(error.message);
}

try {
    let tableau2 = [];
    console.log("Moyenne du tableau 2:", calculerMoyenne(tableau2)); // Doit retourner 0 car le tableau est vide
} catch (error) {
    console.error(error.message);
}

try {
    let tableau3 = ["10", "20", "30"];
    console.log("Moyenne du tableau 3:", calculerMoyenne(tableau3)); // Doit retourner une erreur car il y a des chaînes de caractères
} catch (error) {
    console.error(error.message);
}

try {
    let nonTableau = "ceci n'est pas un tableau";
    console.log("Moyenne d'un paramètre non tableau:", calculerMoyenne(nonTableau)); // Doit retourner une erreur car le paramètre n'est pas un tableau
} catch (error) {
    console.error(error.message);
}
