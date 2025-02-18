export async function autualizarParcelaFunction(parcela){
    let [parcelaAtual, parcelaFinal] = parcela.split("/").map(Number)
    parcelaAtual+=1

    let novaParcelaAtual = parcelaAtual.toString().padStart(2, "0")
    let novaParcelaFinal = parcelaFinal.toString().padStart(2, "0")

    return `${novaParcelaAtual}/${novaParcelaFinal}`
}