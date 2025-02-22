import Processo from "../../abstracoes/processo";
import ImpressorTelefone from "../../impressores/impressorTelefone";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class EditarTelefone extends Processo {
    private impressor!: Impressor
    private cliente: Cliente
    private telefones: Telefone[] = []
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Edição de telefones...')
        this.cliente.Telefones.forEach(telefone => {
            this.impressor = new ImpressorTelefone(telefone)
            console.log(this.impressor.imprimir())
            let edicao = this.entrada.receberTexto('Editar esse telefone? (s/n)').toLowerCase()
            if (edicao === 's') {
                let ddd = this.entrada.receberTexto(`Novo ddd?`)
                let numero = this.entrada.receberTexto(`Novo número?`)
                let novoTelefone = new Telefone(ddd, numero)
                this.telefones.push(novoTelefone)
            } else {
                this.telefones.push(telefone)
            }
        })
        this.cliente.setTelefones(this.telefones)
        this.cliente.Dependentes.forEach(dep => {
            dep.setTelefones(this.cliente.Telefones)
        })
    }
}