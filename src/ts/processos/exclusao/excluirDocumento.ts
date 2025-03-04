import Processo from "../../abstracoes/processo";
import ImpressorDocumento from "../../impressores/impressorDocumento";
import ImpressorTelefone from "../../impressores/impressorTelefone";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import Telefone from "../../modelos/telefone";

export default class ExcluirDocumento extends Processo {
    private impressor!: Impressor
    private cliente: Cliente
    private documentos: Documento[] = []
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente  
        this.execucao = true
    }

    processar(): void {
        console.log('Exclusão de documentos...')
        
        while(this.execucao) {
            this.cliente.Documentos.forEach(documento => {
                this.impressor = new ImpressorDocumento(documento)
                console.log(this.impressor.imprimir())
                let edicao = this.entrada.receberTexto('Excluir esse documento? (s/n)').toLowerCase()

                if (edicao === 'n') {
                    this.documentos.push(documento)
                } 
            })

            if(this.documentos.length == 0) {
                console.log(`Cliente deve ter ao menos um documento`)
            } else {
                this.execucao = false
            }
        }

        this.cliente.setDocumentos(this.documentos)
        this.cliente.Dependentes.forEach(dep => {
            dep.setDocumentos(this.cliente.Documentos)
        })
    }
}