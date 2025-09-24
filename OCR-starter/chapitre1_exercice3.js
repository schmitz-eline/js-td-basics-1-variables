// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différents cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ? ADDITION
    * quel est le résultat de l'opération ? 9
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ? CONCATÉNATION
    * quel est le résultat de l'opération ? 45
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ? CONCATÉNATION
    * quel est le résultat de l'opération ? 45
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ? NUMBER1 + NUMBER2 CAR C'EST UNE CHAÎNE DE CARACTÈRES
*/

// Cas 1 : 4 et 5 sont toutes deux de type nombres
const number1 = 4;
const number2 = 5;
console.log('Cas 1 : ' + `${number1 + number2}`);

// Cas 2 : 4 et 5 sont toutes deux de type chaîne
const number3 = '4';
const number4 = '5';
console.log('Cas 2 : ' + `${number3 + number4}`);

// Cas 3 : 4 est de type chaîne et 5 est de type nombre
const number5 = '4';
const number6 = 5;
console.log('Cas 3 : ' + `${number5 + number6}`);

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
console.log('Cas 4 : ' + 'number1 + number2');