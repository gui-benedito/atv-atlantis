import Menu from "../interfaces/menu";

export default class MenuTipoListagemHospedagem implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| - Escolhe uma opção`)
        console.log(`----------------------`)
        console.log(`| 1 - Listar todas hospedagens`)
        console.log(`| 2 - Listar hospedagem de um cliente`)
        console.log(`----------------------`)
    }
}