import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import EscolherCliente from "../../funcoes/EscolherCliente";

export default class ExcluirClienteDependente extends Processo {
    processar(): void {
        console.log(`Iniciando exclusão de cliente.`)
        let documentoCliente = this.entrada.receberTexto('Documento do cliente:')
        let cliente = EscolherCliente(documentoCliente)
        
        if (cliente) {
            let titular = cliente?.Titular

            let docsCliente = cliente?.Documentos.map(c => c.Numero)
            let indiceCliente = titular?.Dependentes.findIndex(cliente => 
                cliente.Documentos.some(doc => docsCliente?.includes(doc.Numero))
            )
            
            if (indiceCliente !== -1 && indiceCliente !== undefined) {
                titular?.Dependentes.splice(indiceCliente, 1)
                console.log(`Finalizando exclusão do cliente...`)
            }

        }
    }
}