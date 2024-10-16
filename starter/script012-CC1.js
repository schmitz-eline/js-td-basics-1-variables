/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle), qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//

// 1. Stockez le poids et la taille de Mark et de John dans des variables.
const poidsMark = 70;
const tailleMark = 1.8;
const poidsJohn = 80;
const tailleJohn = 1.65;
console.log(`Poids Mark : ${poidsMark}`);
console.log(`Taille Mark : ${tailleMark}`);
console.log(`Poids John : ${poidsJohn}`);
console.log(`Taille John : ${tailleJohn}`);

// 2. Calculez le BMI de chacun.
const bmiMark = poidsMark / (tailleMark * tailleMark);
const bmiJohn = poidsJohn / (tailleJohn * tailleJohn);
console.log(`BMI Mark : ${bmiMark}`);
console.log(`BMI John : ${bmiJohn}`);

// 3. Créez une variable booléenne qui contient l'information de savoir si le BMI de Mark est plus élevé que celui de John.
const isBmiMarkBiggerThanJohns = bmiMark > bmiJohn;
console.log(isBmiMarkBiggerThanJohns);

// 4. Imprimez une chaîne de caractères dans la console contenant la variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de Mark est plus élevé que celui de John ? true").
console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${isBmiMarkBiggerThanJohns}`); // false

if (isBmiMarkBiggerThanJohns) {
    console.log("Le BMI de Mark est plus élevé que celui de John");
    if (bmiMark <= 18) {
        console.log("Ton BMI est inférieur à 18");
    } else if (bmiMark <= 25) {
        console.log("Ton BMI est entre 19 et 25");
    } else if (bmiMark <= 35) {
        console.log("Ton BMI est entre 26 et 35");
    } else {
        console.log("Ton BMI est supérieur à 35");
    }
} else if (bmiJohn === bmiMark) {
    console.log("Le BMI est le même que celui de John");
} else {
    console.log("Le BMI de Mark est plus élevé que celui de John");
    if (bmiJohn <= 18) {
        console.log("Ton BMI est inférieur à 18");
    } else if (bmiJohn <= 25) {
        console.log("Ton BMI est entre 19 et 25");
    } else if (bmiJohn <= 35) {
        console.log("Ton BMI est entre 26 et 35");
    } else {
        console.log("Ton BMI est supérieur à 35");
    }
}