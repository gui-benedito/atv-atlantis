import Menu from "../interfaces/menu";

export default class MenuTipoCadastroDocumento implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Escolha uma opção para documento? `)
        console.log(`----------------------`)
        console.log(`| 1 - Adicionar`)
        console.log(`| 2 - Excluir`)
        console.log(`| 3 - Editar`)
        console.log(`----------------------`)
    }
}