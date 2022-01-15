/** Reformatando objetos de matriz */
/** https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-pt */
const meusUsuarios = [{
        nome: 'João',
        gosta: 'oceano'
    },
    {
        nome: 'Pedro',
        gosta: 'Jogo'
    },
    {
        nome: 'Alvaro',
        gosta: 'ping pong'
    },
]

const usuariosPorCurtidas = meusUsuarios.map(item => {
    const recipiente = {};

    recipiente[item.nome] = item.gosta;
    recipiente.era = item.nome.length * 10

    return recipiente;

})

console.log(usuariosPorCurtidas);