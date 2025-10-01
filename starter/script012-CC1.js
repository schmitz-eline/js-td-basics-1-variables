/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
// 2. Calculez le BMI de chacun.
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
//
// BONNE CHANCE 😀

const weightMark = 80;
const heightMark = 1.98;
const weightJohn = 100;
const heightJohn = 1.72;
const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
const isBmiMarkHigherThanBmiJohn = bmiMark > bmiJohn;
console.log('BMI de Mark : ' + bmiMark);
console.log('BMI de John : ' + bmiJohn);
console.log('Est-ce que le BMI de Mark est plus élevé que celui de John ? ' + isBmiMarkHigherThanBmiJohn);