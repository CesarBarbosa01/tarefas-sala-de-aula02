const express = require("express")
const app = express();

app.listen(3111, () => {
    console.log("O servidor está rodando...")
})

app.use(express.json())


let info = []
// receber dados
app.get("/meus-dados", (req, res) => {
    res.json(info)
})
// enviar informações
app.post("/meus-dados", (req, res) => {
    const novodados = res.body
})


