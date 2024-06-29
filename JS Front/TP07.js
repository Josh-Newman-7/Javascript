function afficherPlusGrandeDate(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    if (d1 > d2) {
        console.log(`La date la plus récente est : ${d1.toLocaleDateString()}`);
    } else if (d1 < d2) {
        console.log(`La date la plus récente est : ${d2.toLocaleDateString()}`);
    } else {
        console.log("Les deux dates sont identiques.");
    }
}

afficherPlusGrandeDate('2024-06-01', '2023-12-01');
console.log("-------------");

function calculerAge(dateNaissance) {
    let naissance = new Date(dateNaissance);
    let today = new Date();

    let ageAnnees = today.getFullYear() - naissance.getFullYear();
    let ageMois = today.getMonth() - naissance.getMonth();

    if (ageMois < 0) {
        ageAnnees--;
        ageMois += 12;
    }

    console.log(`Vous avez ${ageAnnees} ans et ${ageMois} mois.`);
}

calculerAge('2000-01-01');
