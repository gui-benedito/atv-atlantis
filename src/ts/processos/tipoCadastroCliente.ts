import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteDependente from "./cadastro/cadastroClienteDependente";
import CadastroClienteTitular from "./cadastro/cadastroClienteTitular";
import TipoCadastroDocumento from "./tipoCadastroDocumento";
import TipoCadastroTelefone from "./tipocadastroTelefone";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoCadastroTelefone()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoCadastroDocumento()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}