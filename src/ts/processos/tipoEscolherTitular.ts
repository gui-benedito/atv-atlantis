import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import Cliente from "../modelos/cliente";

export default class TipoEscolherTitular extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Id do titular:')
        let titular = Armazem.InstanciaUnica.Clientes.find(c => c.Id === this.opcao)
    }
}