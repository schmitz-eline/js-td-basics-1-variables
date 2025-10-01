const nombreADeviner = 6; // [1-10]

if (nombreADeviner > 5) {
    console.log('Le nombre est compris entre 6 et 10. [6-10]');
    if (nombreADeviner > 7) {
        console.log('Le nombre est compris entre 8 et 10. [8-10]');
    } else /* nombreADeviner <= 7*/ {
        console.log('Le nombre est compris entre 6 et 7. [6-7]');
        if (nombreADeviner > 6 /* Donc nombreADeviner = 7 */ ) {
            console.log('Le nombre est 7');
        } else {
            console.log('Le nombre est 6');
        }
    }
} else /* nombreADeviner <= 5 */ {
    console.log('Le nombre est compris entre 1 et 5. [1-5]');
    if (nombreADeviner > 2) {
        console.log('Le nombre est compris entre 3 et 5. [3-5]');
    } else /* nombreADeviner <= 2 */ {
        console.log('Le nombre est compris entre 1 et 2. [1-2]');
        if (nombreADeviner > 1 /* Donc nombreADeviner = 2 */ ) {
            console.log('Le nombre est 2');
        } else {
            console.log('Le nombre est 1');
        }
    }
}