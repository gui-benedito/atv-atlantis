import Processo from "../../abstracoes/processo";
import ImpressorTelefone from "../../impressores/impressorTelefone";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class ExcluirTelefone extends Processo {
    private impressor!: Impressor
    private cliente: Cliente
    private telefones: Telefone[] = []
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Exclusão de telefones...')
        this.cliente.Telefones.forEach(telefone => {
            this.impressor = new ImpressorTelefone(telefone)
            console.log(this.impressor.imprimir())
            let edicao = this.entrada.receberTexto('Excluir esse telefone? (s/n)').toLowerCase()
            if (edicao === 'n') {
                this.telefones.push(telefone)
                
            } 
        })
        this.cliente.setTelefones(this.telefones)
        this.cliente.Dependentes.forEach(dep => {
            dep.setTelefones(this.cliente.Telefones)
        })
    }
}