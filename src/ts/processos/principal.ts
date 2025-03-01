import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import EditarCliente from "./edicao/editarCliente"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoExcluirCliente from "./tipoExcluirCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import TipoListagemAcomodacoes from "./tipoListagemAcomodacoes"
import TipoCadastroHospedagem from "./tipoCadastroHospedagem"
import TipoListagemHospedagem from "./tipoListagemHospedagem"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoExcluirCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new TipoListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new TipoCadastroHospedagem()
                this.processo.processar()
                break
            case 7:
                this.processo = new TipoListagemHospedagem()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}