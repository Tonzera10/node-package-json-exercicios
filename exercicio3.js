const dev = process.argv[2]
const valorDev = Number(process.argv[3])

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const  valorComp = aleatorio(1,9)
const comp = ""

if(!dev || !valorDev) {
    console.log("Digite corretamente");
} else {
    let resultValor = ""
    let valorTotal = valorDev + valorComp
    if(valorTotal % 2 === 0){
        resultValor = "par"
    } else {
        resultValor = "impar"
    }
    if(process.argv[2] === "par"){
        comp = "impar"
    } else {
        comp = "par"
    }
    if(resultValor === process.argv[2]){
        console.log(`Você escolheu ${dev} e o computador escolheu ${comp}. O resultado foi ${valorTotal}. Você ganhou`);
    } else {
        console.log(`Você escolheu ${dev} e o computador escolheu ${comp}. O resultado foi ${valorTotal}. Você perdeu!`);
    }
}