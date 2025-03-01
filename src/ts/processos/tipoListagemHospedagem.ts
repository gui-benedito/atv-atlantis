import Processo from "../abstracoes/processo";
import MenuTipoListagemHospedagem from "../menus/menuTipoListagemHospedagem";
import ListagemHospedagemCliente from "./listagem/listagemHospedagemCliente";
import ListagemHospedagem from "./listagem/listagemHospedagens";

export default class TipoListagemHospedagem extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemHospedagem()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Opção desejada: `)

        switch(this.opcao) {
            case 1:
                this.processo = new ListagemHospedagem()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListagemHospedagemCliente()
                this.processo.processar()
                break
            default:
                console.log(`Opção não entendida :(`)
        }
    }
}