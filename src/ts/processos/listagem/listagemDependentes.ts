import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import EscolherCliente from "../../funcoes/EscolherCliente";
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
        let documentoDependente = this.entrada.receberTexto('Documento do cliente:')
        let cliente = EscolherCliente(documentoDependente)
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