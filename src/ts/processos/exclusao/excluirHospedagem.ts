import Processo from "../../abstracoes/processo";
import EscolherHospedagem from "../../funcoes/EsolherHospedagem";
import RemoverHospedagem from "../../funcoes/RemoverHospedagem";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";
import Impressor from "../../interfaces/impressor";

export default class ExcluirHospedagem extends Processo {
    impressor!: Impressor
    constructor() {
        super()
    }

    processar(): void {
        console.log(`Iniciando exclusão de hospedagem...`)
        let idHospedagem = this.entrada.receberNumero(`Id da hospedagem: `)
        let hospedagem = EscolherHospedagem(idHospedagem)

        if (hospedagem) {
            this.impressor = new ImpressorHospedagem(hospedagem)
            this.impressor.imprimir()

            let opcao = this.entrada.receberTexto(`Excluir hospedagem?(s/n)`).toUpperCase()
            if (opcao == 'S') {
                RemoverHospedagem(idHospedagem)
            }
        } else {
            console.log(`Hospedagem não encontrada`)
        }
    }
}