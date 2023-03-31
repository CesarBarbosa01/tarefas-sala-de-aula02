async function pegarFilme(f) {
    return await new Promise((resolve, reject) => {
        const filmes = [
            {nome: 'Matrix', genero: 'ficcao'},
            {nome: 'Harry Potter', genero: 'Alta fantasia'},
            {nome: 'Barbie', genero: 'Animação'}
        ]

        if(f) {
            let filmeGen = []
            for (let guardar of filmes) {
                if (guardar.genero === f) {
                    filmeGen.push(guardar.nome)
                }
            }
            resolve(filmeGen)
        } else {
            resolve(filmes)
        }
    })
}

pegarFilme('nada').then((resultadoPositivo) => {
    console.log(resultadoPositivo)
}).catch((err) => {
    console.log(err)
})