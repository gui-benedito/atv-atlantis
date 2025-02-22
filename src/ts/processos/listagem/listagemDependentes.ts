import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private cliente: Cliente
    private impressor!: Impressor
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }
    processar(): void {
        console.clear()
        if (this.cliente.Dependentes.length > 0) {
            console.log(`Dependentes de ${this.cliente.Nome}`)
            this.cliente.Dependentes.forEach(c => {
                this.impressor = new ImpressaorCliente(c)
                console.log(this.impressor.imprimir())
            }) 
        } 
        else {
            console.log('Cliente sem dependente...')
        }
       
    }
}