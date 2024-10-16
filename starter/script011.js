/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.

// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.

// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.

// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.

const x = 10;
const y = "10";
// const x = 5, y = 10; => affectation multiple

console.log("Est-ce que x est plus grand que y ?");
console.log(x > y); // true ou false
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x === y); // attention casting implicite
console.log(x !== y); // est-ce que x est différent de y ?
console.log(x>y && x<20); // && ET
console.log(x>y || x<20); // || OU
// ET et OU sont des opérateurs de liaison, si on les mélange, utiliser des () car règle des priorités, le ET l'emporte sur le OU