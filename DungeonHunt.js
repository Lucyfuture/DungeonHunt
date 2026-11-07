const prompt = require("prompt-sync")()

//ESTATISTICAS GLOBAIS
const {Personagem, Inimigo} = require("./EstatisticasGlobais")

    //heroi
    Personagem

    //inimigo
    Inimigo

//INVENTARIO


//FUNÇÕES====================================
const {
    OpcaoInvalida,
    explorar,
    batalha,
    estatus,
    menudeexploracao
} = require("./Funcoes");

OpcaoInvalida
explorar
batalha
estatus
menudeexploracao

//MENU======================================
{
    let Continuar = true
    while(Continuar){
        console.clear()
        console.log("-------Dungeon Hunt--------");
        console.log("1 - Iniciar Jogo");
        console.log("2 - Sair do Jogo");
        let MENU = Number(prompt("-->"));

        if (MENU == 1) {
            Continuar = false
            break
        }else if (MENU == 2){
            process.exit()
        }else{
            OpcaoInvalida()
        }
    }
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
    console.log("Você é um aventureiro que está em busca de tesouros e glória. \nVocê entra em uma masmorra escura e perigosa, onde monstros e armadilhas aguardam por você.\nSeu objetivo é explorar a masmorra, derrotar os inimigos e matar o demonio escondido.\nBoa sorte!")
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
        
