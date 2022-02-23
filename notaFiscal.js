// Encontro remoto 2 da UC8
// Abaixo a atividade realizada no encontro (aula) que esta comentada e
// atividade para uc8 remoto 2 : contagem e classificacao de itens de uma nota fiscal

console.clear()

/*

// atividade encontro remoto (aula)

// variavel
let numeroDeAlunos = 10

// laco de 0 a numeroDeAlunos, classifica se é par ou impar e imprimi
console.log("Classificacao :")
for (let contador = 0; contador <= numeroDeAlunos; contador++){
    if (contador == 0) {
        console.log("O numero atual é zero")
    } else if (contador % 2 == 0) {
        console.log("O numero ",contador," é par")
    } else {
        console.log(`O numero  ${contador}  é impar`)
    }
}  

console.log()

// array
let nomeDeAlunos = ["Caique","Thiago","Ordilei","Jessica"]

//laco que imprimi o nome do aluno
console.log("Lista :")
for (let nome of nomeDeAlunos) {
    console.log(`Esta pessoa se chama ${nome}`)
}

*/

// ----------------------------------------------------------------------------

// atividade para uc8 remoto 2

// codificacao de um sistema de contagem e classificacao
// nota fiscal com a contagem dos itens e classificacao de tributos pela inicial do nome do item

// array com os itens da nota
const notaFiscal = ["Nescau","Coca-cola","Danoninho","Miojo","Passatempo","Bala","Feijao","Arroz","Sabao"]

// quantidade de itens da nota
let numeroItensNotaFiscal = notaFiscal.length

// data de compra
let dataAtual = new Date()
let dia = dataAtual.getDate()
let mes = dataAtual.getMonth()
let ano = dataAtual.getFullYear()

// cabecalho da nota
console.clear()
console.log("--------------------------------------------")
console.log("----------------Cupom fiscal----------------")
console.log("--------------------------------------------")
console.log(`Data da compra : ${dia} / ${mes} / ${ano}`) 
console.log(`Numero de itens na nota : ${numeroItensNotaFiscal}`)
console.log("--------------------------------------------")

// laco que percorre os itens da nota
for (let contador = 0; contador < numeroItensNotaFiscal; contador++) {
    let nomeItem = (notaFiscal[contador])
    let inicial = nomeItem[0]

    // tributa os itens da nota de acordo com sua letra inicial
    switch (inicial) {      
        case "N":
            // itens iniciados por "N"
            console.log("Nome :", nomeItem)
            console.log("Produto iniciado por N tem 17% de tributos")
            console.log("--------------------------------------------")
            break;
        case "D":
            // itens iniciados por "D"
            console.log("Nome :", nomeItem)
            console.log("Produto iniciado por D tem 25% de tributos")
            console.log("--------------------------------------------")
            break;
        case "P":
            // itens iniciados por "P"
            console.log("Nome :", nomeItem)
            console.log("Produto iniciado por P tem 30% de tributos")
            console.log("--------------------------------------------")
            break;
       case "B":
           // itens iniciados por "B"
            console.log("Nome :", nomeItem)
            console.log("Produto iniciado por B tem 50% de tributos")
            console.log("--------------------------------------------")
            break;            
        default:
            // demais itens são isentos de tributos
            console.log("Nome :", nomeItem)
            console.log("Este produto esta isento de tributos")
            console.log("--------------------------------------------")
            break;
    } 

}  


