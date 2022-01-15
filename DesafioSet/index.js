const meuArray = [1,22,3443,14,5223,64543,756,812,94,10];

function valoresUnicos (arr){
    const meuSet = new Set(arr);

    return[...meuSet];
}

console.log(valoresUnicos(meuArray))