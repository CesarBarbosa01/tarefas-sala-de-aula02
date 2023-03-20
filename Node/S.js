let estado = ["Amapá", "São Paulo", "Rio de Janeiro", "Santa Catarina"]
let resultado = estado.filter((valor) => {
    if(valor.toLocaleLowerCase().charAt(0) === "s") {
        return valor;
    }
})

console.log(resultado)