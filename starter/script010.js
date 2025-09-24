/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2025, 28 et 33.
const now = new Date().getFullYear();
const ageJohn = 28;
const ageMark = 33;

// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
const yearJohn = now - ageJohn;
const yearMark = now - ageMark;
console.log('John est né en ' + yearJohn);
console.log('Mark est né en ' + yearMark);

// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
console.log('Dans 2 ans, nous serons en ' + (now + 2));
console.log('Double de l’année : ' + now * 2);
console.log('Dixième de l’année : ' + now / 10);

// Opérateurs logiques

// 4. … (Veuillez préciser votre question ou vos actions ici)

// Opérateur typeof
