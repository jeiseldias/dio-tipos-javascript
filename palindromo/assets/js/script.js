let frase = prompt('Digite a frase: ')

let original = [];
let reverso = [];

frase = frase.toUpperCase();
frase = frase.replace(/\s/g, '');

original = Array.from(frase);
reverso = Array.from(frase).reverse();

(original.every((value, index) => value === reverso[index])) ? document.getElementById('resposta').innerText = "É um palíndromo" : document.getElementById('resposta').innerText = "Não é um palíndromo";