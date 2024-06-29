console.log(`Affichage Suivant`);

let num1 = 10;
for(var i = 0; i < 10; i++){
    console.log(num1+1);
}

console.log(`-----------------`);
console.log(`Calcul Somme`);

let num2 = 10;
let res = 0;
for(var i = 0; i < num2; i++){
    res += i;
}
console.log(`Somme de 0 jusqu'a ${num2} : ${res}`);

console.log(`-----------------`);
console.log(`Affichage Inversé`);

let array = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
console.log("Affichage normal")
for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}
console.log("Affichage inverse")
for(var i = array.length-1; i >= 0; i--){
    console.log(array[i]);
}
var arrayCopy = [...array];

console.log(`-----------------`);
console.log(`Inversion Contenu`);

var arrayCopy = [...array].reverse();
console.log(`Array = ${array}`);
console.log(`ArrayCopy = ${arrayCopy}`);

console.log(`-----------------`);
console.log(`Affichage Partiel`);

console.log("entier plus grand que 3:");
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        console.log(array[i]);
    }
}
console.log("Entier Pairs:");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}
console.log("valeurs dont l'indice est pair:");
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}
console.log("Entier impairs :");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

console.log(`-----------------`);
console.log(`Recherche Max`);

let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log("Plus grand entier :", max);

console.log(`-----------------`);
console.log(`Recherche Min`);

let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log("Plus petit entier :", min);

console.log(`-----------------`);
console.log(`Calcul Moyenne`);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

let average = sum / array.length;
console.log("Moyenne des éléments :", average);

console.log(`-----------------`);
console.log(`Somme Arrays`);

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

let sumArray = [];
for (let i = 0; i < array1.length; i++) {
    sumArray.push(array1[i] + array2[i]);
}

console.log("Somme des tableaux:", sumArray);

console.log(`-----------------`);
console.log(`Somme Arrays Taille différentes`);

array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
array2 = [-1, 12, 17, 14, 5, -9, 0, 18];

let maxLength = Math.max(array1.length, array2.length);
sumArray = [];

for (let i = 0; i < maxLength; i++) {
    let value1 = array1[i] !== undefined ? array1[i] : 0;
    let value2 = array2[i] !== undefined ? array2[i] : 0;
    sumArray.push(value1 + value2);
}
console.log("The sum of the two arrays is:", sumArray);

console.log(`-----------------`);
console.log(`Comparaison de tableaux`);

array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

let commonElementsCount = 0;

for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        commonElementsCount++;
    }
}
console.log("Nombre d'éléments en commun :", commonElementsCount);

console.log(`-----------------`);
console.log(`Premier ou dernier élément = 6`);

array = [1, 6, 3, 4, 5, 6];
let result = array.length > 0 && (array[0] === 6 || array[array.length - 1] === 6);
console.log(result);

console.log(`-----------------`);
console.log(`Premier et dernier élément identique`);

array = [6, 2, 3, 4, 5, 6];
result = array.length >= 1 && array[0] === array[array.length - 1];
console.log(result);

console.log(`-----------------`);
console.log(`Rotation`);

array = [0, 1, 2, 3];
let lastElement = array.pop();
array.unshift(lastElement);
console.log("New Array :", array);

console.log(`-----------------`);
console.log(`Interactif Table Mult`);

let number = 7;
console.log(`Table de ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log(`-----------------`);
console.log(`Fibonacci`);

let n = 10;

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(`Fibonacci de rang ${n}:`, fibonacci(n));