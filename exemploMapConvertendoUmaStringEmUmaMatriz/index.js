/**Convertendo uma string em uma matriz */
/** https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-pt */
const nome = "João"
const map = Array.prototype.map

const novoNome = map.call(nome, cadaLetra => {
    return `${cadaLetra}`
})

console.log(novoNome);