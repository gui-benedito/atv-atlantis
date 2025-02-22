import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import EscolherTitular from "../../funcoes/escolherTitular";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private impressor!: Impressor
    constructor() {
        super()
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Id do titular:')
        let cliente = EscolherTitular(id)
        if ( cliente) {
            if (cliente.Dependentes.length > 0) {
                console.log(`Dependentes de ${cliente.Nome}`)
                cliente.Dependentes.forEach(c => {
                    this.impressor = new ImpressaorCliente(c)
                    console.log(this.impressor.imprimir())
                }) 
            } 
            else {
                console.log('Cliente sem dependente...')
            }
        } else {
            console.log('Titular não encontrado...')
        }
    }
}