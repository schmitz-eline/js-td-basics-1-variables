const ageToto = 20;
const ageTiti = 22;

console.log(ageToto > ageTiti); // false
console.log(ageToto >= ageTiti); // false
console.log(ageToto < ageTiti); // true
console.log(ageToto <= ageTiti); // true
console.log(ageToto === ageTiti); // false
console.log(ageToto !== ageTiti); // true

console.log(ageToto < ageTiti); // true
console.log(!ageToto < ageTiti); // false

const a = 20;
const b = 20;
const c = '20';
console.log(a === b); // true
console.log(a === c); // false
console.log(a == c); // true

console.log(a > 20 && a < 10); // false
// 20 > 20 = false
// 20 < 10 = false
// => false && false = false