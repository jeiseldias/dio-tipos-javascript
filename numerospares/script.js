let array = [1,3,4,6,0,30,11,22,60];

function TrocaNumerosPares(array) {
    if(array.length === 0) return -1;

    for(let i = 0; i < array.length; i++){
        ((array[i] % 2) === 0 && array[i] !== 0) ? array[i] = 0 : ""; 
    }

    return array;
}

console.log(TrocaNumerosPares(array));