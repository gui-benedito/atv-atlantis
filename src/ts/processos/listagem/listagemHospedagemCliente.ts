import Processo from "../../abstracoes/processo";
import EscolherCliente from "../../funcoes/EscolherCliente";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";
import Impressor from "../../interfaces/impressor";

export default class ListagemHospedagemCliente extends Processo {
    private impressor!: Impressor
    constructor() {
        super()
    }

    processar(): void {
        let documento = this.entrada.receberTexto(`Documento do cliente: `)
        let cliente = EscolherCliente(documento)
        if (cliente) {
            console.clear()
            console.log(`Iniciando a listagem das hospedagens de ${cliente.Nome}...`)
            console.log(`-------------------------------------------------`)
            cliente.Hospedagens.forEach(hospedagem => {
                this.impressor = new ImpressorHospedagem(hospedagem)
                console.log(this.impressor.imprimir())
                console.log(`-------------------------------------------------`)
            })
        } else {
            console.log(`Cliente não encontrado!`)
        }
    }
}