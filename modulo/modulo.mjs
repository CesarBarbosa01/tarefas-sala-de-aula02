export function soma (n1, n2) {
    let soma1 = n1 + n2
    return soma1
}

export function verificarMedia(media) {
    let media1 = 0
    for (let i = 0; i < media.length; i++) {
        media1 += media[i]
    }
    media1 = media1/media.length
    
    if (media1 >= 6 ) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
