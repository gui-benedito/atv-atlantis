import Processo from "../abstracoes/processo";
import EscolherCliente from "../funcoes/EscolherCliente";
import MenuTipoCadastroDocumento from "../menus/menuTipoCadastroDocumento";
import CadastrarDocumentosCliente from "./cadastro/cadastrarDocumentosCliente";
import EditarDocumentos from "./edicao/editarDocumentos";
import ExcluirDocumento from "./exclusao/excluirDocumento";

export default class TipoCadastroDocumento extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroDocumento()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual opção desejada?`)
        let documento = this.entrada.receberTexto(`Documento:`)
        let cliente = EscolherCliente(documento)

        switch(this.opcao) {
            case 1:
                if(cliente != null) {
                    this.processo = new CadastrarDocumentosCliente(cliente)
                    this.processo.processar()
                }
                break
            case 2:
                if(cliente != null) {
                    this.processo = new ExcluirDocumento(cliente)
                    this.processo.processar()
                }
                break
            case 3:
                if(cliente != null) {
                    this.processo = new EditarDocumentos(cliente)
                    this.processo.processar()
                }
                break
            default:
                console.log(`Opção não entendida :(`)
        }
    }
}