const prompt = require("prompt-sync")()

//ESTATISTICAS GLOBAIS
const {Personagem, Inimigo} = require("./EstatisticasGlobais")

    //heroi
    Personagem

    //inimigo
    Inimigo

//FUNÇÕES====================================

//Verificação de Opção Selecionada
const OpcaoInvalida = function() {
    console.clear()
    console.log("Opção inválida. Tente novamente.");
    prompt("Pressione enter para continuar...");
}



//Função de Exploração
const explorar = function() {
    console.clear()
    let resultado = Math.ceil(Math.random() * 100);
    if (resultado <= 20) {
        console.log(`Você encontrou um Baú!
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""      "=.|                  |
|___________________|__"=._o "-._         "=.______________|___________________
          |                 "=._o "=._      _ "=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ;  "=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .      ,   "-._"-._   ". '__|___________________
          |           |o "=._  , "   ; .". ,  "-._"-._; ;              |
 _________|___________| ; -.o "=._; ."   ' ."   . "-._ /_______________|_______
|                   | |o;     "-.o "=._   '  " ,__.--o;   |
|___________________|_| ;     (#)  -.o  "=. _.--"_o.-; ;___|___________________
____/______/______/___|o;._    "       ".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/  
*******************************************************************************`);
    }else {
        console.log(`Você encontrou um inimigo!`);
        prompt("Pressione enter para continuar...");
        console.clear()
        batalha()
    }
}


//Função de Batalha
const batalha = function() {
    VidaInimigo = Math.ceil(Math.random() * 40);
    VidaMaxInimigo = VidaInimigo
    do {
        DanoInimigo = Math.ceil(Math.random() * 20);
        DanoHeroi = Math.ceil(Math.random() * DanoBase);
        console.log(`
            
                     HP Heroi: ${VidaHeroi}/${VidaMaxHeroi} | HP Inimigo: ${VidaInimigo}/${VidaMaxInimigo}
                   
          .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
dX.    9Xb      .dXb    __                         __    dXb.     dXP     .Xb
9XXb._       _.dXXXXb dXXXXbo.                 .odXXXXb dXXXXb._       _.dXXP
 9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP
   9XXXXXXXXXXXXXXXXXXXXX'~   ~ OOO8b   d8OOO'~   ~ XXXXXXXXXXXXXXXXXXXXXP'
     9XXXXXXXXXXXP'  9XX'           98v8P'           XXP'  9XXXXXXXXXXXP'
        ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~
                        )b.  .dbo.dP' v' 9b.odb.  .dX(
                      ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.
                     dXXXXXXXXXXXP'   .    9XXXXXXXXXXXb
                    dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb
                    9XXb'    XXXXXb.dX|Xb.dXXXXX'    dXXP
                      '      9XXXXXX{   }XXXXXXP       '
                              XXXX X. v'.X XXXX
                              XP^X' b   d' X^XX
                              X. 9      '  P )X
                               b         '  d'
                               
                               `)
        let decisao = prompt("O que deseja fazer? (1- Atacar / 2- Fugir): ");
        switch (decisao) {
            case "1":
                VidaInimigo -= DanoHeroi;
                VidaHeroi -= DanoInimigo;
                console.clear()
                console.log("\x1b[3J");
                console.log(`Você atacou o inimigo e causou ${DanoHeroi} de dano e recebeu ${DanoInimigo} de dano do inimigo.`);
                prompt("Pressione enter para continuar...");
                console.clear()
                break;
            case "2":
                maneira = Math.ceil(Math.random() * 100);
                if (maneira <= 50) {
                    console.log("Você conseguiu fugir do inimigo!");
                    prompt("Pressione enter para continuar...");
                    console.clear()
                }else {
                    VidaHeroi -= DanoInimigo;
                    console.log(`Você tentou fugir, mas o inimigo te atacou e causou ${DanoInimigo} de dano.`);
                    prompt("Pressione enter para continuar...");
                    console.clear()
                }
        }
    }while (VidaHeroi > 0 && VidaInimigo > 0)
        if (VidaHeroi <= 0) {
            console.log("Você morreu! Fim de jogo.");
            prompt("Pressione enter para continuar...");
            process.exit()
        }else if (VidaInimigo <= 0) {
            console.log("Você derrotou o inimigo!");
            prompt("Pressione enter para continuar...");
            console.clear()
        }
}


//Função para Demonstrar Status Atuais
const estatus = function() {
    console.clear()
    console.log(`Estatísticas do Personagem:\nVida: ${VidaHeroi}/${VidaMaxHeroi}\nDano: ${DanoBase}\nMana: ${ManaHeroi}`);
    prompt("pressione enter para voltar...")
    console.clear()
}


//Função para mostar o Menu de Exploração
const menudeexploracao = function() {
{
    let MenuDeExploração = 0
    do {
        console.clear()
        console.log(`Voce está na masmorra. O que deseja fazer?
1- Explorar
2- Ver estatísticas
3- Sair do jogo`)
        let acao = Number(prompt("-->"));

        switch (acao) {
            case 1:
                MenuDeExploração = 1
                break;
            case 2:
                estatus()
                break;
            case 3:
                process.exit()
                break;
            default:
                OpcaoInvalida()
                break;
        }
    }while (MenuDeExploração == 0)
}
}

module.exports = {
    OpcaoInvalida,
    explorar,
    batalha,
    estatus,
    menudeexploracao
};