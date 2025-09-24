/*****************************
 * 009 - Mutation de variable et conversion de type
 */

// 1. Initialisez les variables firstName à "John" et age à 28.
const firstName = 'John';
let age = 28;

// Conversion de type

// 2. Affichez la phrase "John a 28 ans" en utilisant les variables et affichez le type de cette expression.
const sentence1 = firstName + ' a ' + age + ' ans.';
console.log(sentence1);
console.log('Type de cette expression : ' + typeof sentence1)

// 3. Déclarez les variables job et isMarried, puis affectez la valeur "professeur" à job et false à isMarried. Ensuite, affichez la phrase "John est un professeur de 28 ans. Est-il marié ? false".
let job = 'professeur';
const isMarried = false;
const sentence2 = firstName + ' est un ' + job + ' de ' + age + ' ans. Est-il marrié ? ' + isMarried;
console.log(sentence2);

// Variable mutation

// 4. Affectez la valeur "vingt-huit" à la variable age et la valeur "conducteur" à la variable job. Ensuite, affichez la phrase précédente dans une boîte de dialogue.
age = 'vingt-huit';
job = 'conducteur';
alert(firstName + ' est un ' + job + ' de ' + age + ' ans.');

// 5. Affichez une boîte de dialogue demandant "Quel est son nom de famille ?" pour permettre à l'utilisateur d'entrer le nom de famille de John. Stockez ce nom dans une variable lastName, puis affichez "Le nom de famille de John est … (le nom
const lastName = prompt('Quel est son nom de famille ?');
console.log('Le nom de famille de ' + firstName + ' est ' + lastName);