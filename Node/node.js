//"express"
function removerDuplicados(lista) {
    const valorUnicos = [];
    const listaSemDuplicados =[];

    for (let i of lista) {
        let valor = i;
        if (!valorUnicos[valor]) {
            valorUnicos[valor] = valor;
            listaSemDuplicados.push(valor);
        }
    }
    return listaSemDuplicados
}

let listaComDuplicados = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let listaSemDuplicados = removerDuplicados(listaComDuplicados)
console.log(listaSemDuplicados)