import Processo from "../../abstracoes/processo";
import ImpressorDocumento from "../../impressores/impressorDocumento";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";

export default class EditarDocumentos extends Processo {
    private impressor!: Impressor
    private cliente: Cliente
    private documentos: Documento[] = []
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Edição de documentos...')
        this.cliente.Documentos.forEach(doc => {
            this.impressor = new ImpressorDocumento(doc)
            console.log(this.impressor.imprimir())
            let edicao = this.entrada.receberTexto('Editar esse documento? (s/n)').toLowerCase()
            if (edicao === 's') {
                let numero = this.entrada.receberTexto(`Novo número?`)
                let dataExpedicao = this.entrada.receberData(`Nova data de expedição?`)
                let novoDoc = new Documento(numero, doc.Tipo, dataExpedicao)
                this.documentos.push(novoDoc)
            } else {
                this.documentos.push(doc)
            }
        })
        this.cliente.setDocumentos(this.documentos)
    }
}