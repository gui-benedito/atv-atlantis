import Processo from "../abstracoes/processo";
import MenuTipoListagemAcomodacoes from "../menus/menuTipoListagemAcomodacoes";
import ListagemAcomodacoes from "./listagem/listagemAcomodacao";

export default class TipoListagemAcomodacoes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemAcomodacoes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch(this.opcao) {
            case 1:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}