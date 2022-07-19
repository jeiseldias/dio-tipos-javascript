// SOLUÇÃO 1
function verificaPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("abba"));

// SOLUÇÃO 2
function verificaPalindromo2(string) {
    if(!string) return;

    for(let i = 0; i < string.length / 2; i++) {
        if(string[1] !== string[string.length - 1 - i]) {
            return false
        }
    }

    return true;
}

console.log(verificaPalindromo("abba"));