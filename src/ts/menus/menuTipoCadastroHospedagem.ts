import Menu from "../interfaces/menu";

export default class MenutTipoCadastroHospedagem implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Qual hospedagem deseja?`)
        console.log(`----------------------`)
        console.log(`| 1 - Solteiro simples`)
        console.log(`| 2 - Solteiro mais`)
        console.log(`| 3 - Casal simples`)
        console.log(`| 4 - Família simples`)
        console.log(`| 5 - Família mais`)
        console.log(`| 6 - Família super`)
        console.log(`----------------------`)
    }
}