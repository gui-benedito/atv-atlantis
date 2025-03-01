import Processo from "../abstracoes/processo";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomodacao";
import MenutTipoCadastroHospedagem from "../menus/menuTipoCadastroHospedagem";
import CadastrarHospedagem from "./cadastro/cadastrarHospedagem";

export default class TipoCadastroHospedagem extends Processo {
    constructor() {
        super()
        this.menu = new MenutTipoCadastroHospedagem()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual opção desejada?`)

        switch(this.opcao) {
            case 1:
                this.processo = new CadastrarHospedagem(1, NomeAcomadacao.SolteiroSimples)
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastrarHospedagem(1, NomeAcomadacao.SolteiroMais)
                this.processo.processar()
                break
            case 3:
                this.processo = new CadastrarHospedagem(2, NomeAcomadacao.CasalSimples)
                this.processo.processar()
                break
            case 4:
                this.processo = new CadastrarHospedagem(4, NomeAcomadacao.FamiliaSimples)
                this.processo.processar()
                break
            case 5:
                this.processo = new CadastrarHospedagem(7, NomeAcomadacao.FamiliaMais)
                this.processo.processar()
                break
            case 6:
                this.processo = new CadastrarHospedagem(10, NomeAcomadacao.FamiliaSuper)
                this.processo.processar()
                break
            default:
                console.log(`Opção não entendida :(`)
        }
    }
}