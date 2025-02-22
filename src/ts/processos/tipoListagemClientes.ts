import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import EscolherTitular from "../funcoes/escolherTitular";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemDependentes from "./listagem/listagemDependentes";
import ListagemTitulares from "./listagem/listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                let id = this.entrada.receberNumero('Id do titular:')
                let cliente = EscolherTitular(id)
                if (cliente != null) {
                    this.processo = new ListagemDependentes(cliente)
                } else {
                    console.log('Titular não encontrado...')
                }
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}