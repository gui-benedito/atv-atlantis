import Menu from "../interfaces/menu";

export default class MenuTipoListagemAcomodacoes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo do cliente para cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Listar todas acomodações`)
        console.log(`| 2 - Listar acomodacoes ocupadas`)
        console.log(`----------------------`)
    }
}