const ent1 = document.getElementById("entrada1")
const ent2 = document.getElementById("entrada2")

function somar()    {
    const n1 = Number(ent1.value)
    const n2 = Number(ent2.value)
    const soma = n1 + n2
    resultado.innerHTML = `O resultado da sua soma é = ${soma}.`
}