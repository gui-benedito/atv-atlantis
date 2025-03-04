import Processo from "../abstracoes/processo";
import EscolherCliente from "../funcoes/EscolherCliente";
import MenuTipoCadastroTelefone from "../menus/menuTipoCadastroTelefone";
import CadastroTelefone from "./cadastro/cadastroTelefone";
import EditarTelefone from "./edicao/editarTelefones";
import ExcluirTelefone from "./exclusao/excluirTelefone";

export default class TipoCadastroTelefone extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroTelefone()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual opção desejada?`)
        let documento = this.entrada.receberTexto(`Documento:`)
        let cliente = EscolherCliente(documento)

        switch(this.opcao) {
            case 1:
                if(cliente != null) {
                    this.processo = new CadastroTelefone(cliente)
                    this.processo.processar()
                }
                break
            case 2:
                if(cliente != null) {
                    this.processo = new ExcluirTelefone(cliente)
                    this.processo.processar()
                }
                break
            case 3:
                if(cliente != null) {
                    this.processo = new EditarTelefone(cliente)
                    this.processo.processar()
                }
                break
            default:
                console.log(`Opção não entendida :(`)
        }
    }
}