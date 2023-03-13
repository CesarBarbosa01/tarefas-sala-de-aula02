 function MaiorNome (nomes) {
    for (let position in nomes) {
        if (nomes[position].length > 5) {
            console.log(nomes[position])
        }
    }
}

MaiorNome(['Cesar', 'Eduardo', 'Gabriela', 'Ana'])


