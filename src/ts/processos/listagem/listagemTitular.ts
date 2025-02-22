import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import EscolherCliente from "../../funcoes/EscolherCliente";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitular extends Processo {
    private impressor!: Impressor
    constructor() {
        super()
    }
    processar(): void {
        console.clear()
        let documentoDependente = this.entrada.receberTexto('Documento do dependente:')
        let cliente = EscolherCliente(documentoDependente)
        if (cliente) {
            if (cliente.Titular) {
                console.log(`Titular de ${cliente.Nome}`)
                this.impressor = new ImpressaorCliente(cliente.Titular)
                console.log(this.impressor.imprimir())
            }
        } 
    }
}