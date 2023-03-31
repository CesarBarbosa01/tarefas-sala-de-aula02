async function pegarFilmes(f) {
    return await new Promise((resolve, reject) => {
        const filmes = [
            {nome: 'Matrix', genero: 'Ficção Científica'},
            {nome: 'Harry Potter', genero: 'High Fatansy'},
            {nome: 'Barbie', genero: 'Animação'}
        ]

        if(f) {
            let filmesGen = []
            for (let i of filmes) {
                if (i.genero === f) {
                    filmesGen.push(i.nome)
                } 
            }
            resolve(filmesGen)
        }   else {
            resolve(filmes)
        }
    })          
}

pegarFilmes('Ficcção Científica').then(resposta => console.log(resposta)).catch(error => console.error(error))

