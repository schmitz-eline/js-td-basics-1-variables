// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

// Cas 1 : 4 et 5 sont toutes deux de type nombres
const nb1 = 4;
const nb2 = 5;
const r1 = nb1 + nb2;
console.log(r1);

// Cas 2 : 4 et 5 sont toutes deux de type chaîne
const nb3 = "4";
const nb4 = "5";
const r2 = nb3 + nb4;
console.log(r2);

// Cas 3 : 4 est de type chaîne et 5 est de type nombre
const nb5 = "4";
const nb6 = 5;
const r3 = nb5 + nb6;
console.log(r3);

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
const nb7 = 4;
const nb8 = 5;
const r4 = "nb7 + nb8";
console.log(r4);