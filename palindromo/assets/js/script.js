let frase = prompt('Digite a frase: ')

let original = [];
let reverso = [];

frase = frase.toUpperCase();
frase = frase.replace(/\s/g, '');

original = Array.from(frase);
reverso = Array.from(frase).reverse();

console.log(original);
console.log(reverso);

(original.every((value, index) => value === reverso[index])) ? console.log('É um palíndromo') : console.log('Não é um palíndromo');