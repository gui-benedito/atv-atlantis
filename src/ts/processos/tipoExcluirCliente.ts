import Processo from "../abstracoes/processo";
import MenuTipoExcluirCliente from "../menus/menuTipoExcluirCliente";
import ExcluirClienteDependente from "./exclusao/excluirClienteDependente";
import ExcluirClienteTitular from "./exclusao/excluirClienteTitutlar";

export default class TipoExcluirCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoExcluirCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual a opção desejada?`)

        switch(this.opcao) {
            case 1:
                this.processo = new ExcluirClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new ExcluirClienteDependente()
                this.processo.processar()
                break
            default:
                console.log(`Opção não entendida :(`)
        }
    }
}