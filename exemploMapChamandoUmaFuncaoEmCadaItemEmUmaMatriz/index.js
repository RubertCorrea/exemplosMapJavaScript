/** Chamando uma função em cada item em uma matriz */
/** https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-pt */
const numeroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosArray = numeroArray.map(numeroItem => {
    return numeroItem * 2
})

console.log(numerosArray);