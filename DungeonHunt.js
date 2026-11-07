const prompt = require("prompt-sync")()

//ESTATISTICAS GLOBAIS

    //heroi
    let Heroi = 0
    let VidaMaxHeroi = 1
    let VidaHeroi = 1
    let DanoBase = 1
    let DanoHeroi = 1
    let ManaHeroi = 1

    //inimigo
    let Inimigo = 0
    let VidaMaxInimigo = 1
    let VidaInimigo = 1
    let DanoInimigo = 1
    let ManaInimigo = 1

//INVENTARIO
let inventario = []

//FUNÇÕES====================================
const OpcaoInvalida = function() {
    console.clear()
    console.log("Opção inválida. Tente novamente.");
    prompt("Pressione enter para continuar...");
}

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

const batalha = function() {
    VidaInimigo = Math.ceil(Math.random() * 100);
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


const estatus = function() {
    console.clear()
    console.log(`Estatísticas do Personagem:\nVida: ${VidaHeroi}\nDano: ${DanoBase}\nMana: ${ManaHeroi}`);
    prompt("pressione enter para voltar...")
    console.clear()
}

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
    
//MENU======================================
{
    do{
        console.log("-------Dungeon Hunt--------");
        console.log("1 - Iniciar Jogo");
        console.log("2 - Sair do Jogo");
        let MENU = Number(prompt("-->"));

        if (MENU == 1) {
            break
        }else if (MENU == 2){
            process.exit()
        }else{
            OpcaoInvalida()
        }
    }while (MENU == 0)
    console.clear()
}
    
//MENU DE PERSONAGENS=======================
{
    let Continuar = true
    while (Continuar) {
        console.log("selecione seu personagem");
        console.log("1 - Mago      |(vida: 80, dano max: 15, mana: 100)");
        console.log("2 - Cavaleiro |(vida: 120, dano max: 20, mana: 50)");
        console.log("3 - Arqueiro  |(vida: 60, dano max: 25, mana: 75)");
        let EscolhaHeroi = Number(prompt("-->"));
    
        console.clear()

        switch (EscolhaHeroi) {
            case 1:
                Heroi = "Mago"
                VidaHeroi = 80
                VidaMaxHeroi = 80
                DanoBase = 15
                ManaHeroi = 100
                Continuar = false
            break;
            case 2:
                Heroi = "Cavaleiro"
                VidaHeroi = 120
                VidaMaxHeroi = 120
                DanoBase = 20
                ManaHeroi = 50
                Continuar = false
                break;
            case 3:
                Heroi = "Arqueiro"
                VidaHeroi = 60
                VidaMaxHeroi = 60
                DanoBase = 25
                ManaHeroi = 75
                Continuar = false
                break;
            case 9999:
                Heroi = "Saitama"
                VidaHeroi = 9999
                VidaMaxHeroi = 9999
                DanoBase = 9999
                ManaHeroi = 9999
                Continuar = false
                break;
            default:
                OpcaoInvalida()
                console.clear()
                break;
            }
        }
        console.log("Você escolheu o personagem: " + Heroi + "\nVida: " + VidaHeroi + "\nDano: " + DanoBase + "\nMana: " + ManaHeroi)
        prompt("Pressione enter para continuar...")
        console.clear()
    }
    
//HISTORIA DO JOGO===========================
{
    console.log("Você é um aventureiro que está em busca de tesouros e glória. \nVocê entra em uma masmorra escura e perigosa, onde monstros e armadilhas aguardam por você.\nSeu objetivo é explorar a masmorra, derrotar os inimigos e encontrar matar o demonio escondido.\nBoa sorte!")
    prompt("Pressione enter para continuar...")
}


//JOGO PRINCIPAL=============================

{
    do {
        menudeexploracao()
        explorar()
    }while (VidaHeroi > 0)
        if (VidaHeroi <= 0) {
            console.log("Você morreu! Fim de jogo.");
            prompt("Pressione enter para continuar...");
            process.exit()
        }
    }
        
