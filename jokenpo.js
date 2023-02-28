const dev = process.argv[2]
let comp = ""

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

if(!dev){
    console.log("Digite pedra, papel ou tesoura para jogar");
} else {
    switch (aleatorio(1,3)) {
        case 1:
            comp = "pedra"
            break;
        case 2:
            comp = "papel"
            break;
    
        default:
            comp = "tesoura"
            break;
    }
    if(comp === dev) {
        console.log(`Você escolheu ${dev} e o computador escolheu ${comp}. Empate!`);
    } if((comp === "pedra" && dev === "tesoura") || (comp === "papel" && dev === "pedra") || (comp === "tesoura" && dev === "papel")) {
        console.log(`Você escolheu ${dev} e o computador escolheu ${comp}. Você perdeu!`); 
    } else {
        console.log(`Você escolheu ${dev} e o computador escolheu ${comp}. Você ganhou!`);
    }
}